const compute = require('./compute');

describe("distance", () => {
  it("works", () => {
    expect(compute.distance({x:0, y:0}, {x: 0, y:5})).toEqual(5);
  });
});
