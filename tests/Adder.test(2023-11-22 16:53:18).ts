
import Adder from '../src/Adder';

describe('Adder', () => {
  it('should chain addition operations', () => {
    const adder = new Adder();
    expect(adder.add(1).add(2).add(3).result()).toBe(6);
  });

  it('should start with an initial value', () => {
    const adder = new Adder(10);
    expect(adder.add(5).result()).toBe(15);
  });

  it('should handle adding zero correctly', () => {
    const adder = new Adder();
    expect(adder.add(0).result()).toBe(0);
  });

  it('should handle no additions correctly', () => {
    const adder = new Adder();
    expect(adder.result()).toBe(0);
  });
});
