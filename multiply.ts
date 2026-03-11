/**
 * Returns the product of two numbers.
 */
function multiply(a: number, b: number): number {
  const result = a * b;
  return result === 0 ? 0 : result; // here we normalize multiplication by 0 (to avoid -0 when multiplying 0 with a negative number)
}

// Expose to window so the HTML script can call it
(window as unknown as { multiply: typeof multiply }).multiply = multiply;
