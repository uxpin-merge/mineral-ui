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

// To find orientation of ordered triplet (p, q, r).
// The function returns following values
// 0 --> p, q and r are colinear
// 1 --> Clockwise
// 2 --> Counterclockwise
function orientation(p, q, r) {
  // See http://www.geeksforgeeks.org/orientation-3-ordered-points/
  // for details of below formula.
  const val = (q.y - p.y) * (r.x - q.x) -
    (q.x - p.x) * (r.y - q.y);

  if (val == 0) return 0;  // colinear

  return (val > 0)? 1: 2; // clock or counterclock wise
}

function doIntersect(p1, q1, p2, q2) {
  // Find the four orientations needed for general and
  // special cases
  const o1 = orientation(p1, q1, p2),
        o2 = orientation(p1, q1, q2),
        o3 = orientation(p2, q2, p1),
        o4 = orientation(p2, q2, q1);

  // General case
  if (o1 != o2 && o3 != o4) {
    return true;
  }

  // Special Cases :)
  return false;
}

// function intersects({start, end}, {one, two, three}) {
//   return sameSign([one, two, three].map(dot));
// }

function lightUp({start, end}, {one, two, three, color}) {
  edge1Intersects = doIntersect(start, end, one, two);
  edge2Intersects = doIntersect(start, end, one, three);
  edge3Intersects = doIntersect(start, end, two, three);
  return {
    one,
    two,
    three,
    color: edge1Intersects || edge2Intersects || edge3Intersects ? "red" : color
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
      svgStr = svg.svg({
        id:"gem",
        xmlns:"http://www.w3.org/2000/svg",
        "xmlns:xlink":"http://www.w3.org/1999/xlink",
        viewBox: (({xmin, ymin, width, height}) => [xmin, ymin, width, height].join(" "))(dimesions),
        width: dimesions.width,
        height: dimesions.height
      }, triangleData.map(lightUp.bind(this, lightPath)).map(triangle).join(""));

fs.writeFile("www/gems.svg", svgStr, err => {
  if (err) {
    return console.log(err);
  }
  process.exit();
});
