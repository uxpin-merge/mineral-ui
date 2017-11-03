const svg = require('./svg');

function animate(attributeName, values, begin, dur) {
  return svg.animate({
    attributeName,
    values: values.join(";"),
    repeatCount: "1",
    begin: `${begin}s`,
    dur: `${dur}s`
  });
}

function line(one, two, color) {
  return svg.path(
    {
      d: `M${one.x},${one.y}L${two.x},${two.y}z`
    },
    animate("stroke", [color], 0, 10)
  );
}

function triangle({one, two, three, color, begin, dur, centroid, brightest}) {
  let opts={}, children=[];
  const path = {
    d: `M${one.x},${one.y}L${two.x},${two.y}L${three.x},${three.y}z`
  };

  if(Array.isArray(color)) {
    children = [
      animate("fill", color, begin, dur)
    ];
  } else {
    opts = {fill: color};
  }
  const tri = svg.path(Object.assign(opts, path), ...children);
  const dot = svg.circle({
    cx: centroid.x,
    cy: centroid.y,
    r: 2,
    fill: "orange"
  });
  const proj = line(centroid, brightest.point, "green");
  return [tri, proj, dot].join("");
}

module.exports = {
  animate,
  line,
  triangle
};
