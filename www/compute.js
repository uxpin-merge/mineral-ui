function pointOnAndDistanceFromLine({x:x1, y:y1}, {x: x2, y: y2}, {x: x3, y:y3}) {
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

function color(maxBrightness, diffusionRadius, distance) {
  const percentOfMax = Math.min(1, distance / diffusionRadius),
        lightness = maxBrightness - Math.floor(percentOfMax * maxBrightness),
        hex = lightness.toString(16),
        code = ((hex) => {
          let code = "";
          const padded = 1 === hex.length ? `0${hex}` : hex;

          while(code.length < 6) {
            code += padded;
          }

          return code;
        })(hex);

  return `#${code}`;
}

function distance({x: x1, y: y1}, {x: x2, y: y2}) {
  return (((x1 - x2) ** 2) + ((y2 - y1) ** 2)) ** (1/2);
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

module.exports = {
  color,
  dimensions,
  distance,
  pointOnAndDistanceFromLine,
  minDistanceFromReference,
  rotatePoint90Anti,
  rotateTriangle90Anti
};
