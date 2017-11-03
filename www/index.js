const fs = require('fs');
const triangleData = require('./triangles');
const svg = require('./svg');
const compute = require('./compute');
const draw = require('./draw');

function log(props) {
  console.log(props);
  return props;
}

function lightUp({start, end, brightness, radius}, triangle, index) {
  console.log("==============================");
  const {one, two, three} = triangle;
  const centroid = compute.centroid(one, two, three);
  const brightest = compute.pointOnAndDistanceFromLine(start, end, centroid);
  const illuminationDistance = compute.pythagoreanA(brightest.distance, radius);
  const distanceStartToBrightest = compute.distance(start, brightest.point);
  const lightDuration = end.time-start.time;
  const lightPathDistance = compute.distance(start, end);
  const beginSeconds = lightDuration * (distanceStartToBrightest - illuminationDistance) / lightPathDistance;
  const dur = illuminationDistance * 2 / lightPathDistance * lightDuration;

  const minDistanceFromTriangle = compute.minDistanceFromReference.bind(this, [one, two, three]);
  const startDistance = minDistanceFromTriangle(start);
  const endDistance = minDistanceFromTriangle(end);

  return {
    index,
    one,
    two,
    three,
    color: [startDistance, brightest.distance, endDistance].map(
      compute.color.bind(this, brightness, radius)),
    begin: beginSeconds,
    dur,
    centroid,
    brightest
  };
}

function selectTrianglesReducer(acc, triangle) {
  if([12, 15, 197].indexOf(triangle.id) !== -1) {
    return acc.concat(triangle);
  }
  return acc;
}

const {xmin, xmax, ymin, ymax, width, height} = compute.dimensions(triangleData);
const lightPath = {
  start: {
    time: 0,
    x: xmax-(width*.5),
    y: ymin
  },
  end: {
    time: 10,
    x: xmax-(width*.1),
    y: ymax
  },
  brightness: 100,
  radius: 700
};
const svgStr = svg.svg(
  {
    id:"gem",
    xmlns:"http://www.w3.org/2000/svg",
    "xmlns:xlink":"http://www.w3.org/1999/xlink",
    viewBox: [xmin, ymin, width, height].join(" "),
    width,
    height
  },
  svg.circle(
    {
      cx: lightPath.start.x,
      cy: lightPath.start.y,
      r: lightPath.radius,
      fill: "yellow",
      opacity: "0.5"
    },
    draw.animate("cx", [lightPath.start.x, lightPath.end.x], lightPath.start.time, lightPath.end.time),
    draw.animate("cy", [lightPath.start.y, lightPath.end.y], lightPath.start.time, lightPath.end.time)),
  triangleData
    // .reduce(selectTrianglesReducer, [])
    // .map(log)
    .map(lightUp.bind(this, lightPath))
    .map(log)
    .map(draw.triangle)
    .join(""),
  draw.line(lightPath.start, lightPath.end, "red"),
  svg.circle(
    {
      cx: lightPath.start.x,
      cy: lightPath.start.y,
      fill: "blue",
      r: 5
    },
    draw.animate("cx", [lightPath.start.x, lightPath.end.x], lightPath.start.time, lightPath.end.time),
    draw.animate("cy", [lightPath.start.y, lightPath.end.y], lightPath.start.time, lightPath.end.time))
);

fs.writeFile("www/gems.svg", svgStr, err => {
  if (err) {
    return console.log(err);
  }
  process.exit();
});
