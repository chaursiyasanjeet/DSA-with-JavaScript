const arr = [2, 3, 42, 3, "sad", 324, 324]

//find element in an array
const findElement = (arr, target) => {
    for (let x of arr) {
        if (x === target) return true;
    }
    return false
}

console.log(findElement(arr, 42))
console.log(findElement(arr, 1))

//inbuilt function to find element in array
console.log(arr.includes(3))

//find element in an array and also return index

const findElementIndex = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1
}

console.log(findElementIndex(arr, 56))
console.log(findElementIndex(arr, 3))

//inbuilt funtion to find the index of elemetnt
console.log(arr.indexOf(3))