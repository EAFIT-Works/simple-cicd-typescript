/**
 * Unit tests for divide()
 * Loads the compiled divide.js so window.divide is available (same as in the browser).
 */
declare global {
  interface Window {
    divide: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // Load the built script that attaches divide to window (non-module)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./divide.js");
});

describe("divide", () => {
  it("divides two positive numbers", () => {
    expect(window.divide(10, 2)).toBe(5);
  });

  it("divides with result as decimal", () => {
    expect(window.divide(5, 2)).toBe(2.5);
  });

  it("divides zero by a number", () => {
    expect(window.divide(0, 5)).toBe(0);
  });

  it("divides a number by one", () => {
    expect(window.divide(10, 1)).toBe(10);
  });

  it("divides two negative numbers", () => {
    expect(window.divide(-10, -2)).toBe(5);
  });

  it("divides a positive by a negative number", () => {
    expect(window.divide(10, -2)).toBe(-5);
  });

  it("divides by zero throws an error", () => {
    expect(() => window.divide(5, 0)).toThrow("Division by zero");
  });

  it("divides zero by zero throws an error", () => {
    expect(() => window.divide(0, 0)).toThrow("Division by zero");
  });
});

export {};
