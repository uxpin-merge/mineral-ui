const fs = require('fs');

const svg=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  width="300"
  height="200"
  id="gem"
  >
  <path d="M 100 0 L 0 200 L 200 200 z">
  <animate
    attributeName="fill"
    values="orange; purple; orange"
    repeatCount="indefinite"
    begin="0s"
    dur="10s"
    />
  </path>
  <path id="theMotionPath"
    d="M 1 1 L 299 199 L 100 100 z"
    fill="none"
    stroke="black"
    stroke-width="3"
    />
    <circle cx="" cy="" r="5" fill="red">
      <animateMotion dur="6s" repeatCount="indefinite">
        <mpath xlink:href="#theMotionPath"/>
      </animateMotion>
    </circle>
</svg>`;

fs.writeFile("www/gems.svg", svg, err => {
  if (err) {
    return console.log(err);
  }

  console.log(`wrote!`);
  process.exit();
});
