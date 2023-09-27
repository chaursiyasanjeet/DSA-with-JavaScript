//map filter and reduce
const arr = [3, 2, 5, 6, 81, 5, -3, -2];

//map=>returns a new array
const newMapArray = arr.map((ele) => ele * ele);
console.log(newMapArray);

//filter=>returns a new array by filter
const positiveNumbers = arr.filter((ele) => ele > 0);
console.log(positiveNumbers);

//reduce=>returns a number by reducing array
const sumOfArr = positiveNumbers.reduce((acc, ele) => acc + ele);
console.log(sumOfArr);

//flat array =>flat the nested arary
const a = [1, 2, 3, [3, 3, 4, 4, [23, 4, 4]], 4, 4, 5];
const flatendArray = a.flat(2); //takes value at which deep you want to falt
console.log(flatendArray);

//filter vs find
//it will return first matching element
const findElem = arr.find((ele) => ele < 0);
console.log(findElem);
