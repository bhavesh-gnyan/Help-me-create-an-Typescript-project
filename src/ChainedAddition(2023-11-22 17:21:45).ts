
class ChainedAddition {
  private sum: number;

  constructor(initialValue: number = 0) {
    this.sum = initialValue;
  }

  add(value: number): ChainedAddition {
    this.sum += value;
    return this;
  }

  result(): number {
    return this.sum;
  }
}

export default ChainedAddition;
