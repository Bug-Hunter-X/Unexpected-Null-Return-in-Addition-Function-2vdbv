function foo(a, b) {
  // Handle null, undefined, and NaN values
  a = a === null || a === undefined || isNaN(a) ? 0 : a;
  b = b === null || b === undefined || isNaN(b) ? 0 : b;

  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0
console.log(foo(1, undefined)); // Output: 1
console.log(foo(undefined, 2)); // Output: 2
console.log(foo(NaN, 2)); // Output: 2
console.log(foo(1, NaN)); //Output: 1