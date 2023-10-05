//factorial of a number using recursion

function factorial(n) {
  if (n < 2) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));

// time complexity=O(n);
// space complexity=O(n);
