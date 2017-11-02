const svg = require('./svg');

function animate(attributeName, colors, begin, dur) {
  return svg.animate({
    attributeName,
    values: colors.join(";"),
    repeatCount: "indefinite",
    begin: `${begin}s`,
    dur: `${dur}s`
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

function triangle({one, two, three, color, begin, dur}) {
  return svg.path(
    {
      d: `M${one.x},${one.y}L${two.x},${two.y}L${three.x},${three.y}z`
    },
    animate("fill", color, begin, dur),
    animate("stroke", color, begin, dur)
  );
}

module.exports = {
  animate,
  line,
  triangle
};
