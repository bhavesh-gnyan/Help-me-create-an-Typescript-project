
import ChainedAddition from '../src/ChainedAddition';

describe('ChainedAddition', () => {
  it('should chain addition operations and return the correct result', () => {
    const chainedAddition = new ChainedAddition();
    expect(chainedAddition.add(1).add(2).add(3).result()).toBe(6);
  });

  it('should start with an initial value and chain addition operations', () => {
    const chainedAddition = new ChainedAddition(10);
    expect(chainedAddition.add(5).add(15).result()).toBe(30);
  });

  it('should return the initial value if no additions are made', () => {
    const chainedAddition = new ChainedAddition(20);
    expect(chainedAddition.result()).toBe(20);
  });
});
