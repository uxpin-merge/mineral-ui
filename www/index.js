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

function animateColors(...colors) {
  return animate({
    attributeName: "fill",
    values: colors.join(";"),
    repeatCount: "indefinite",
    begin: "0s",
    dur: "10s"
  });
}

function triangle(one, two, three, ...colors) {
  return path({
    d: `M${one}L${two}L${three}z`
  }, animateColors(colors));
}

function triangle1(one, ...colors) {
  return path({
    d: `M${one}l1 2l1 -2z`
  }, animateColors(colors));
}

function mesh(num, width, height) {
  const verticies = [],
        area = Math.sqrt(width * height / num / 2);
  console.log(area);

  for (let i=0, row=1; i<num; row++) {
    for (let offset=0; offset<width; i++, offset+=area) {
      const x = offset + Math.random() * area,
            y = row * Math.random() * area,
            v = `${x} ${y}`;
      console.log(v);
      verticies[i] = [x, y];
    }
  }
  return verticies;
}

const svgStr = svg(
  mesh(10, 300, 200).map(v => triangle1(`${v[0]} ${v[1]}`, "black"))
);

fs.writeFile("www/gems.svg", svgStr, err => {
  if (err) {
    return console.log(err);
  }
  process.exit();
});
