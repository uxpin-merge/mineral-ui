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
    subject: compute.getPointOnAndDistanceFromLine,
    cases: [
      {
        name: "works",
        args: [{x:0, y:0}, {x:2, y:0}, {x:1, y:1}],
        result: {point:{x:1, y:0}, distance:1}
      }
    ]
  }
];

paratest("compute", tests);
