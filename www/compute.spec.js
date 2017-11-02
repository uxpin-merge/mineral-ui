const compute = require('./compute');
const paratest = require('./paratest');

const tests = [
  {
    subject: compute.distance,
    cases: [
      {
        name: "works",
        args: [{x:0, y:0}, {x:0, y:5}],
        result: 5
      }, {
        name: "doesn't return negatives",
        args: [{x:5, y:0}, {x:0, y:0}],
        result: 5
      }
    ]
  }, {
    subject: compute.pointOnAndDistanceFromLine,
    cases: [
      {
        name: "works",
        args: [{x:0, y:0}, {x:2, y:0}, {x:1, y:1}],
        result: {point:{x:1, y:0}, distance:1}
      }, {
        name: "when point is outside segment",
        args: [{x:0, y:0}, {x:2, y:0}, {x:3, y:1}],
        result: {point:{x:3, y:0}, distance:1}
      }
    ]
  }, {
    subject: compute.minDistanceFromReference,
    cases: [
      {
        name: "works",
        args: [[{x:3,y:0}, {x:5, y:5}], {x:0,y:0}],
        result: 3
      }
    ]
  }, {
    subject: compute.color,
    cases: [
      {
        name: "works at no distance",
        args: [0],
        result: "#ffffff"
      }, {
        name: "works at some distance",
        args: [350],
        result: "#808080"
      }, {
        name: "works with all single digit hex",
        args: [673],
        result: "#0a0a0a"
      }, {
        name: "works at great distance",
        args: [1050],
        result: "#000000"
      }
    ]
  }
];

paratest("compute", tests);
