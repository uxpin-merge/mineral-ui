const svg = require('./svg');

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

module.exports = {
  animate,
  line,
  triangle
};
