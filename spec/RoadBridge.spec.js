const RoadBridge = require("../src/Roadbridge.js");

describe("Roadbridge", function () {
  let bridge;

  beforeEach(function () {
    bridge = new RoadBridge();
  });

  it("0 cars on bridge at the start", function () {
    const expected = 0;

    const result = bridge.getCarsOnBridge();

    expect(result).toEqual(expected);
  });

  it("addCarToBridge increases cars on bridge by 1", function () {
    //input
    bridge.addCarToBridge();

    const expected = 1;
    const result = bridge.getCarsOnBridge();

    expect(result).toEqual(expected);
  });

  it("addCarToBridge increases cars on bridge to 3 when called 3 times", function () {
    //input
    bridge.addCarToBridge();
    bridge.addCarToBridge();
    bridge.addCarToBridge();

    const expected = 3;

    //set result equal to the return value from the getCarsOnBridge method
    // "call the getCarsOnBridge() method (run the code in that method) and store the returned value from that method inside the the result variable"
    const result = bridge.getCarsOnBridge();

    expect(result).toEqual(expected);
  });

  it("addCarToBridge returns an error when cars on bridge are at capacity", function () {
    //input
    bridge.addCarToBridge();
    bridge.addCarToBridge();
    bridge.addCarToBridge();
    bridge.addCarToBridge();

    const expected = "bridge at capacity";

    const result = bridge.addCarToBridge();

    expect(result).toEqual(expected);
  });

  it("addCarToBridge does not increase counter when cars on bridge are at capacity", function () {
    bridge.addCarToBridge();
    bridge.addCarToBridge();
    bridge.addCarToBridge();
    bridge.addCarToBridge();

    //Because we are capacity, this call (the 5th) should *not* increase the counter
    bridge.addCarToBridge();

    const expected = 4;

    const result = bridge.getCarsOnBridge();

    expect(result).toEqual(expected);
  });
  it("removeCarsOnBridge removes one car from bridge", function () {
    bridge.addCarToBridge();
    bridge.addCarToBridge();
    bridge.addCarToBridge();
    bridge.addCarToBridge();
    bridge.removeCarsOnBridge();

    const expected = 3;

    const result = bridge.getCarsOnBridge();

    expect(result).toEqual(expected);
  });
  it("Change Capacity - change capacity to lower amount ", function () {
    bridge.addCarToBridge();
    bridge.addCarToBridge();
    bridge.addCarToBridge();

    bridge.changeCapacity(3);

    bridge.addCarToBridge();

    const expected = 3;

    const result = bridge.getCarsOnBridge();

    expect(result).toEqual(expected);
  });
  it("Close bridge completely - no more cars can go on but remaining can still leave ", function () {
    bridge.addCarToBridge();

    bridge.changeCapacity(0);

    bridge.removeCarsOnBridge();

    bridge.addCarToBridge();

    const expected = 0;

    const result = bridge.getCarsOnBridge();

    expect(result).toEqual(expected);
  });
  it("Close bridge completely - test one leaving but one remaining ", function () {
    bridge.addCarToBridge();
    bridge.addCarToBridge();

    bridge.changeCapacity(0);

    bridge.removeCarsOnBridge();

    const expected = 1;

    const result = bridge.getCarsOnBridge();

    expect(result).toEqual(expected);
  });
  it("reOpenBridge() - reopen bridge after it had been previously closed", function () {
    bridge.changeCapacity(0);
    bridge.reOpenBridge();
    bridge.addCarToBridge();
    bridge.addCarToBridge();

    const expected = 2;

    const result = bridge.getCarsOnBridge();

    expect(result).toEqual(expected);
  });
});
