//how to sort an array in ascending or desending order;
const arr = [3, 2, 5, 6, 81, 5, -3, -2];

//sorting in ascending order
arr.sort();
console.log(arr);

arr.sort((a, b) => b - a);
console.log(arr);
