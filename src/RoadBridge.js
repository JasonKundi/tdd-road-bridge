const DEFAULT_CAPACITY = 4;

class RoadBridge {
  constructor() {
    this.numCars = 0;
    this.capacity = DEFAULT_CAPACITY;
  }

  getCarsOnBridge() {
    return this.numCars;
  }

  addCarToBridge() {
    if (this.numCars === this.capacity) {
      return "bridge at capacity";
    }
    this.numCars++;
  }

  removeCarsOnBridge() {
    return this.numCars--;
  }

  changeCapacity(newCapacity) {
    return (this.capacity = newCapacity);
  }

  reOpenBridge() {
    return (this.capacity = DEFAULT_CAPACITY);
  }
}

module.exports = RoadBridge;
