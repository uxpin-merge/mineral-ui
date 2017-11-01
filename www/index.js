const fs = require('fs');
const triangleData = require('./triangles');
const svg = require('./svg');

function rotatePoint90Anti({width, height}, {x, y}) {
  return {x: y, y: width-x};
}

function rotateTriangle90Anti(dimensions, {one, two, three, ...rest}) {
  const rotate = rotatePoint90Anti.bind(this, dimensions);
  return {
    one: rotate(one),
    two: rotate(two),
    three: rotate(three),
    ...rest
  };
}

function log(props) {
  console.log(props);
  return props;
}

function getDimensions(triangleData) {
  const dimensions = triangleData.reduce(({xmin, ymin, xmax, ymax}, {one, two, three}) => {
    const triangleXs = [one, two, three].map(p => p.x);
    const triangleYs = [one, two, three].map(p => p.y);
    return {
      xmin: Math.min(xmin, ...triangleXs),
      ymin: Math.min(ymin, ...triangleYs),
      xmax: Math.max(xmax, ...triangleXs),
      ymax: Math.max(ymax, ...triangleYs)
    };
  }, {
    xmin: Number.POSITIVE_INFINITY,
    ymin: Number.POSITIVE_INFINITY,
    xmax: Number.NEGATIVE_INFINITY,
    ymax: Number.NEGATIVE_INFINITY
  });
  return {
    width: dimensions.xmax - dimensions.xmin,
    height: dimensions.ymax - dimensions.ymin,
    ...dimensions
  };
}

function animate(attributeName, colors) {
  return svg.animate({
    attributeName,
    values: colors.join(";"),
    repeatCount: "indefinite",
    begin: "0s",
    dur: "10s"
  });
}

function line(one, two, color) {
  return svg.path(
    {
      d: `M${one.x},${one.y}L${two.x},${two.y}z`
    },
    animate("stroke", [color])
  );
}

function triangle({one, two, three, color}) {
  return svg.path(
    {
      d: `M${one.x},${one.y}L${two.x},${two.y}L${three.x},${three.y}z`
    },
    animate("fill", color),
    animate("stroke", color)
  );
}

function getPointOnAndDistanceFromLine({x:x1, y:y1}, {x: x2, y: y2}, {x: x3, y:y3}) {
  const a = x2-x1,
        b = y2-y1,
        cSquared = a*a + b*b,
        u = ((x3 - x1) * a + (y3 - y1) * b) / cSquared,
        x4 = x1 + u * a,
        y4 = y1 + u * b,
        point = {
          x: x4,
          y: y4
        };
  return {
    point,
    distance: distance(point, {x: x3, y: y3})
  };
}

function computeColor(distance) {
  const diffusionRadius = 700,
        lightness = distance / diffusionRadius,
        maxBrightness = 60;

  return `hsl(0, 0%, ${maxBrightness - (lightness * maxBrightness)}%)`;
}

function distance({x: x1, y: y1}, {x: x2, y: y2}) {
  return (((x1 - x2) ** 2) + ((y2 - y1) ** 2)) ** (1/2);
}

function minDistanceFromReference(points, referencePoint) {
  return Math.min(points.map(distance.bind(this, referencePoint)));
}

function lightUp({start, end}, {one, two, three}) {
  const { distance: minDistance } = [one, two, three].reduce((acc, triPoint) => {
          const pointAndDistance = getPointOnAndDistanceFromLine(start, end, triPoint);
          return pointAndDistance.distance < acc.distance ? pointAndDistance : acc;
        }, {
          distance: Number.POSITIVE_INFINITY
        });

  const minDistanceFromTriangle = minDistanceFromReference.bind(this, [one, two, three]),
        startDistance = minDistanceFromTriangle(start),
        endDistance = minDistanceFromTriangle(end);

  return {
    one,
    two,
    three,
    color: [startDistance, minDistance, endDistance].map(computeColor)
  };
}

const dimesions = getDimensions(triangleData),
      lightPath = (({xmax, ymin, ymax, width}) => ({
        start: {
          time: 0,
          x: xmax-(width*.5),
          y: ymin
        },
        end: {
          time: 10,
          x: xmax-(width*.1),
          y: ymax
        }}))(dimesions),
      svgStr = svg.svg(
        {
          id:"gem",
          xmlns:"http://www.w3.org/2000/svg",
          "xmlns:xlink":"http://www.w3.org/1999/xlink",
          viewBox: (({xmin, ymin, width, height}) => [xmin, ymin, width, height].join(" "))(dimesions),
          width: dimesions.width,
          height: dimesions.height
        },
        triangleData
          .map(lightUp.bind(this, lightPath))
          .map(triangle).join("")
      );

fs.writeFile("www/gems.svg", svgStr, err => {
  if (err) {
    return console.log(err);
  }
  process.exit();
});
