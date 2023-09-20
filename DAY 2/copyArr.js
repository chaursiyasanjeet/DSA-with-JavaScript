//how to copy an array in JavaScript
const arr1 = [2, 3, 4232, "hello", "hi", "3213", "322"]

//shallow copy ->refrence to the specife address
const arr2 = arr1;
arr2.splice(2, 3);
console.log("arr1", arr1)
console.log("arr2", arr2)

//Deep copy of Array
const arr3 = [...arr1]
arr3.splice(1, 2)
console.log("arr3", arr3)

//another method to to Deep copy
const arr4 = Array.from(arr1)
const arr5 = arr1.concat()
arr4.splice(1, 1)
console.log("arr4", arr4)

//adding two array in JavaSript
const newArr = [...arr3, ...arr4]
const newArr2 = arr2.concat(arr3)
console.log(newArr)
console.log(newArr2)

