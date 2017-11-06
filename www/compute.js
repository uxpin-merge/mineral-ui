const roundOff = roundPlaces.bind(this, 2);

function pointOnAndDistanceFromLine({x:x1, y:y1}, {x: x2, y: y2}, {x: x3, y:y3}) {
  const a = x2-x1,
        b = y2-y1,
        cSquared = a*a + b*b,
        u = ((x3 - x1) * a + (y3 - y1) * b) / cSquared,
        x4 = x1 + u * a,
        y4 = y1 + u * b,
        point = {
          x: roundOff(x4),
          y: roundOff(y4)
        };
  return {
    point,
    distance: roundOff(distance(point, {x: x3, y: y3}))
  };
}

function lerp(value, low1, high1, low2, high2) {
  return Math.round(low2 + (value - low1) * (high2 - low2) / (high1 - low1));
}

function color(maxBrightness, diffusionRadius, distance) {
  const percentage = clamp(0, maxBrightness, lerp(distance, diffusionRadius, 0, 0, maxBrightness));
  const newValue = lerp(percentage, 0, maxBrightness, 0, 15);
  const hex = newValue.toString(16);
  return `#${hex}${hex}${hex}`;
}

function distance({x: x1, y: y1}, {x: x2, y: y2}) {
  return (((x1 - x2) ** 2) + ((y2 - y1) ** 2)) ** (1/2);
}

function pythagoreanA(b, c) {
  // a*a + b*b = c*c
  return Math.abs(c*c - b*b) ** (1/2);
}

function minDistanceFromReference(points, referencePoint) {
  const distanceFromReference = distance.bind(this, referencePoint),
        distances = points.map(distanceFromReference);
  return Math.min(...distances);
}

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

function dimensions(triangleData) {
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

function centroid(a, b, c) {
  return {
    x: Math.round((a.x + b.x + c.x) / 3),
    y: Math.round((a.y + b.y + c.y) / 3)
  };
}

function clamp(min, max, value) {
  return Math.min(Math.max(min, value), max);
}

function roundPlaces(places, value) {
  return parseFloat(value.toFixed(places));
}

module.exports = {
  centroid,
  clamp,
  color,
  dimensions,
  distance,
  lerp,
  pointOnAndDistanceFromLine,
  pythagoreanA,
  minDistanceFromReference,
  rotatePoint90Anti,
  rotateTriangle90Anti,
  roundPlaces
};
