// find sum of array of elements using recursion

// function sumOfArrays(arr) {
//   if (arr.length == 0) return 0;
//   return arr[arr.length - 1] + sumOfArrays(arr.slice(0, arr.length - 1));
// }

// console.log(sumOfArrays([2, 3, 4]));
function sumOfArrays(arr, n) {
  if (n === 0) return 0;
  return arr[n - 1] + sumOfArrays(arr, n - 1);
}
console.log(sumOfArrays([2, 3, 4], 3));
