const fs = require('fs');

function spreadAttrs(attrs) {
  return Object.keys(attrs).map(key => {
    const str = `${key}="${attrs[key]}"`;
    return str;
  }).join(" ");
}

function tag(name) {
  return function(attrs, ...children) {
    // console.log("name:", name);
    // console.log("attrs:", attrs);
    // console.log("children:", children);
    return `<${name} ${spreadAttrs(attrs)}`
      + (children && children.length > 0
         ? `>${children.join("")}</${name}>`
         : '/>');
  };
}

const path = tag("path");
const animate = tag("animate");
const svg = tag("svg").bind(this, {
  id:"gem",
  xmlns:"http://www.w3.org/2000/svg",
  "xmlns:xlink":"http://www.w3.org/1999/xlink",
  width:"300",
  height:"200"
});

function triangle(one, two, three, ...colors) {
  return path({
    d: `M${one}L${two}L${three}z`
  }, animate({
    attributeName: "fill",
    values: colors.join(";"),
    repeatCount: "indefinite",
    begin: "0s",
    dur: "10s"
  }));
}

const svgStr = svg(
  triangle("50 100", "200 100", "200 0", "black", "green"),
  triangle("100 0", "0 200", "200 200", "orange", "purple", "orange"));

fs.writeFile("www/gems.svg", svgStr, err => {
  if (err) {
    return console.log(err);
  }
  process.exit();
});
