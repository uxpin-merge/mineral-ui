const fs = require('fs');
const triangles = require('./ripped_gems');

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

function animateColors(...colors) {
  return animate({
    attributeName: "fill",
    values: colors.join(";"),
    repeatCount: "indefinite",
    begin: "0s",
    dur: "10s"
  });
}

function getDimensions(triangles) {
  return triangles.reduce(({xmin, ymin, xmax, ymax}, {one, two, three}) => {
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
}

const path = tag("path");
const animate = tag("animate");
const svg = tag("svg").bind(this, {
  id:"gem",
  xmlns:"http://www.w3.org/2000/svg",
  "xmlns:xlink":"http://www.w3.org/1999/xlink",
  width:"500px",
  height:"500px",

  ...(({xmin, xmax, ymin, ymax}, width = xmax-xmin, height = ymax-ymin) => ({
    viewBox: `${xmin} ${ymin} ${width} ${height}`
  }))(getDimensions(triangles))
});

function triangle(one, two, three, ...colors) {
  return path({
    d: `M${one.x},${one.y}L${two.x},${two.y}L${three.x},${three.y}z`
  }, animateColors(colors));
}

const svgStr = svg(
  triangles.map(({one, two, three, color}) => triangle(one, two, three, color))
);

fs.writeFile("www/gems.svg", svgStr, err => {
  if (err) {
    return console.log(err);
  }
  process.exit();
});
