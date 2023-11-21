typescript
import Adder from '../src/Adder';

describe('Adder', () => {
  it('should chain addition operations and return the correct result', () => {
    const adder = new Adder();
    expect(adder.add(1).add(2).add(3).result()).toBe(6);
  });

  it('should start with an initial value and chain additions correctly', () => {
    const adder = new Adder(10);
    expect(adder.add(5).add(15).result()).toBe(30);
  });

  it('should return the initial value if no additions are made', () => {
    const adder = new Adder(20);
    expect(adder.result()).toBe(20);
  });
});
