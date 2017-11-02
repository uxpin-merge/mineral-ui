const fs = require('fs');
const triangleData = require('./triangles');
const svg = require('./svg');
const compute = require('./compute');
const draw = require('./draw');

function log(props) {
  console.log(props);
  return props;
}

function lightUp({start, end}, {one, two, three}) {
  const { distance: minDistance } = [one, two, three].reduce((acc, triPoint) => {
          const pointAndDistance = compute.pointOnAndDistanceFromLine(start, end, triPoint);
          return pointAndDistance.distance < acc.distance ? pointAndDistance : acc;
        }, {
          distance: Number.POSITIVE_INFINITY
        });

  const minDistanceFromTriangle = compute.minDistanceFromReference.bind(this, [one, two, three]),
        startDistance = minDistanceFromTriangle(start),
        endDistance = minDistanceFromTriangle(end);

  return {
    one,
    two,
    three,
    color: [startDistance, minDistance, endDistance].map(compute.color)
  };
}

const {xmin, xmax, ymin, ymax, width, height} = compute.dimensions(triangleData),
      lightPath = {
        start: {
          time: 0,
          x: xmax-(width*.5),
          y: ymin
        },
        end: {
          time: 10,
          x: xmax-(width*.1),
          y: ymax
        }
      },
      svgStr = svg.svg(
        {
          id:"gem",
          xmlns:"http://www.w3.org/2000/svg",
          "xmlns:xlink":"http://www.w3.org/1999/xlink",
          viewBox: [xmin, ymin, width, height].join(" "),
          width,
          height
        },
        triangleData
          .map(lightUp.bind(this, lightPath))
          .map(draw.triangle)
          .join("")
      );

fs.writeFile("www/gems.svg", svgStr, err => {
  if (err) {
    return console.log(err);
  }
  process.exit();
});
