const calculator = require("../js/calculator");

describe("add", () => {
  test("add 1 + 2", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test('add 0 + 3', () => {
    expect(calculator.add(0, 3)).toBe(3);
  });
});

describe('subtract', () => {
    test('1 - 4', () => {
        expect(calculator.subtract(1, 4)).toBe(-3);
    });
});

describe('divide', () => {
    test('8 / 4', () => {
        expect(calculator.divide(8,4)).toBe(2);
    });
});

describe('multiply', () => {
    test('times 0', () => {
        expect(calculator.multiply(4,0)).toBe(0);
    });

    test('100 * 7', () => {
        expect(calculator.multiply(100, 7)).toBe(700);
    });
});