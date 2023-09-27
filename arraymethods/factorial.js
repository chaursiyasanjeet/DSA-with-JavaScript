//Given an array of numbers, calculate the factorial of the largest number in the array

const numbers = [5, 2, 4, 6, 7];

// const largetFactorial = numbers.reduce((largest, num) => {
//   let currentFactorial = num;
//   for (let i = num - 1; i > 0; i--) {
//     currentFactorial *= i;
//   }
//   return currentFactorial > largest ? currentFactorial : largest;
// });

// console.log(largetFactorial);

const largetFactorial = numbers.reduce((largest, num) => {
  let currentFactorial = Array.from({ length: num })
    .map((_, i) => i + 1)
    .reduce((fact, val) => fact * val, 1);

  return currentFactorial > largest ? currentFactorial : largest;
});

console.log(largetFactorial);
