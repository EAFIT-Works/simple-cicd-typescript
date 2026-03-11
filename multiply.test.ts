/**
 * Unit tests for multiply()
 * Loads the compiled multiply.js so window.multiply is available (same as in the browser).
 */
declare global {
  interface Window {
    multiply: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // Load the built script that attaches multiply to window (non-module)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./multiply.js");
});

describe("multiply", () => {
  it("multiplies two positive numbers", () => {
    expect(window.multiply(3, 4)).toBe(12);
  });

  it("multiplies a number by zero", () => {
    expect(window.multiply(5, 0)).toBe(0);
  });

  it("multiplies zero by zero", () => {
    expect(window.multiply(0, 0)).toBe(0);
  });

  it("multiplies two negative numbers", () => {
    expect(window.multiply(-3, -4)).toBe(12);
  });

  it("multiplies a positive and a negative number", () => {
    expect(window.multiply(5, -2)).toBe(-10);
  });

  it("multiplies a negative number by zero", () => {
    expect(window.multiply(-5, 0)).toBe(0);
  });
});

export {};
