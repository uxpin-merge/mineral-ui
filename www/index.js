const fs = require('fs');
const triangleData = require('./triangles');
const svg = require('./svg');
const compute = require('./compute');
const draw = require('./draw');

function log(props) {
  console.log(props);
  return props;
}

function extendLight({start, end, brightness, radius}) {
  const dur = end.time - start.time;
  const distance = compute.distance(start, end);
  const velocity = dur / distance;
  return {
    start,
    end,
    brightness,
    radius,
    dur,
    distance,
    velocity
  };
}

function timeTransform(time, dur) {
  return compute.roundPlaces(2, compute.clamp(0, 1, time/dur));
}

function distanceTransform(distance, brightness, radius) {
  return compute.color(brightness, radius, compute.roundPlaces(0, compute.clamp(0, radius, distance)));
}

function lightUp({start, end, brightness, radius, dur, velocity}, triangle) {
  const {one, two, three} = triangle;
  const centroid = compute.centroid(one, two, three);
  const startDistance = compute.distance(start, centroid);
  const endDistance = compute.distance(end, centroid);

  const brightest = compute.pointOnAndDistanceFromLine(start, end, centroid);
  const distanceStartToBrightest = compute.distance(start, brightest.point);
  const brightestTime = distanceStartToBrightest * velocity;

  const illuminationDistance = compute.pythagoreanA(brightest.distance, radius);
  const illuminationDuration = illuminationDistance * velocity;
  const illuminationTime = (distanceStartToBrightest - illuminationDistance) * velocity;

  const extinguishTime = brightestTime + illuminationDuration;

  const keyFrames = [{
    time: start.time,
    distance: startDistance
  }, {
    time: illuminationTime,
    distance: Math.min(startDistance, radius)
  }, {
    time: brightestTime,
    distance: brightest.distance
  }, {
    time: extinguishTime,
    distance: Math.min(radius, endDistance)
  }, {
    time: end.time,
    distance: endDistance
  }].reduce((acc, frame, index) => {
    const newTime = timeTransform(frame.time, dur);
    if (index > 0) {
      const prevTime = acc.keyTimes[index - 1];
      if (newTime === prevTime) {
        return acc;
      }
    }
    return {
      color: acc.color.concat(distanceTransform(frame.distance, brightness, radius)),
      keyTimes: acc.keyTimes.concat(newTime)
    };
  }, {
    color: [],
    keyTimes: []
  });

  return {
    one,
    two,
    three,
    dur,
    color: keyFrames.color,
    keyTimes: keyFrames.keyTimes,
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
const triangles = triangleData
      // .reduce(selectTrianglesReducer, [])
      // .map(log)
      .map(lightUp.bind(this, extendLight(lightPath)))
      // .map(log)
      .map(draw.triangle)
      .join("");
const light = svg.circle(
  {
    cx: lightPath.end.x,
    cy: lightPath.end.y,
    r: lightPath.radius,
    fill: "yellow",
    opacity: "0.5"
  },
  draw.animate("cx", {values:[lightPath.start.x, lightPath.end.x], begin:lightPath.start.time, dur:lightPath.end.time}),
  draw.animate("cy", {values:[lightPath.start.y, lightPath.end.y], begin:lightPath.start.time, dur:lightPath.end.time}));
const lightCenter = svg.circle(
  {
    cx: lightPath.end.x,
    cy: lightPath.end.y,
    fill: "blue",
    r: 5
  },
  draw.animate("cx", {values:[lightPath.start.x, lightPath.end.x], begin:lightPath.start.time, dur:lightPath.end.time}),
  draw.animate("cy", {values:[lightPath.start.y, lightPath.end.y], begin:lightPath.start.time, dur:lightPath.end.time}));
const svgStr = svg.svg(
  {
    id:"gem",
    xmlns:"http://www.w3.org/2000/svg",
    "xmlns:xlink":"http://www.w3.org/1999/xlink",
    viewBox: [xmin, ymin, width, height].join(" "),
    width: "100%"
  },
  light,
  triangles,
  draw.line(lightPath.start, lightPath.end, "red"),
  lightCenter
);

fs.writeFile("www/gems.svg", svgStr, err => {
  if (err) {
    return console.log(err);
  }
  process.exit();
});
