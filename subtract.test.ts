/**
 * Unit tests for subtract()
 * Loads the compiled subtract.js so window.subtract is available (same as in the browser).
 */
declare global {
  interface Window {
    subtract: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // Load the built script that attaches subtract to window (non-module)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./subtract.js");
});

describe("subtract", () => {
  it("subtracts two positive numbers", () => {
    expect(window.subtract(5, 3)).toBe(2);
  });

  it("subtracts with zero as second number", () => {
    expect(window.subtract(0, 5)).toBe(-5);
  });

  it("subtracts zero from a number", () => {
    expect(window.subtract(5, 0)).toBe(5);
  });

  it("subtracts two zeros", () => {
    expect(window.subtract(0, 0)).toBe(0);
  });

  it("subtracts with negative numbers", () => {
    expect(window.subtract(-5, -3)).toBe(-2);
  });

  it("subtracts a negative number from a positive number", () => {
    expect(window.subtract(5, -3)).toBe(8);
  });
});

export {};
