// Array in Java Script

const arr = [1, 2, 3, 4, "hello", { name: "sanjeet" }, [1, 2, 3]];
console.log(arr);

//accesing Array
const firstElement = arr[0];
console.log(firstElement)

//length of javascript
const arrLength = arr.length;
console.log(arrLength)

//removing element
const lastElement = arr.pop() //this will return last element also
console.log(arr)
console.log(lastElement)

//to add element in the last of array
arr.push(5);
console.log(arr)

//to add element in the start of the array
arr.unshift(0) //time complexity=>O(n)
console.log(arr)

//to delete element from the start
console.log(arr.shift())
console.log(arr)

//Loop through array in JavaScript
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

console.log("For each loop")
arr.forEach((x, i) => {  //i will be index and x wil be element
    console.log(x, i)
})

console.log("For of loop")
for (let x of arr) {
    console.log(x)
}



