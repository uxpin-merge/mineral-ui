const fs = require('fs');
const triangles = require('./triangles');

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

function log(props) {
  console.log(props);
  return props;
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

function animateFill(...colors) {
  return animate({
    attributeName: "fill",
    values: colors.join(";"),
    repeatCount: "indefinite",
    begin: "0s",
    dur: "10s"
  });
}

function animateStroke(...colors) {
  return animate({
    attributeName: "stroke",
    values: colors.join(";"),
    repeatCount: "indefinite",
    begin: "0s",
    dur: "10s"
  });
}

function getDimensions(triangles) {
  const dimensions = triangles.reduce(({xmin, ymin, xmax, ymax}, {one, two, three}) => {
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
    width: dimensions.xmax-dimensions.xmin,
    height: dimensions.ymax-dimensions.ymin,
    ...dimensions
  };
}

function renderTriangle({one, two, three, color, ...rest}) {
  return path({
    d: `M${one.x},${one.y}L${two.x},${two.y}L${three.x},${three.y}z`
  }, animateFill(color), animateStroke(color));
}

const path = tag("path");
const animate = tag("animate");
const svg = tag("svg");

const dimesions = getDimensions(triangles),
      svgStr = svg({
        id:"gem",
        xmlns:"http://www.w3.org/2000/svg",
        "xmlns:xlink":"http://www.w3.org/1999/xlink",
        viewBox: (({xmin, ymin, width, height}) => [xmin, ymin, width, height].join(" "))(dimesions),
        width: dimesions.width,
        height: dimesions.height
      }, triangles.map(renderTriangle) .join(""));

fs.writeFile("www/gems.svg", svgStr, err => {
  if (err) {
    return console.log(err);
  }
  process.exit();
});
