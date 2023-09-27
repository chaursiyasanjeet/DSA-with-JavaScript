//question: How can you check if two arrays are equal

const arr1 = [2, 3, "3213", "322"];
const arr2 = [2, 3, "3213", "322"];
const arr3 = [2, 5, "3213", "322"];

const isArrayEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  //   for (let i = 0; i < arr1.length; i++) {
  //     if (arr1[i] !== arr2[i]) return false;
  //   }
  //   return true;

  return (
    arr1.length === arr2.length && arr1.every((ele, i) => arr1[i] === arr2[i])
  );
};

console.log(isArrayEqual(arr1, arr2));
console.log(isArrayEqual(arr1, arr3));
