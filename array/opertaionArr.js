//how to delete, add and update element from specific index

const arr = [2, 3, 4232, "hello", "hi", "3213", "322"]

//deleting from specific index  both index wil be included
arr.splice(1, 3) //return the cuuted part
console.log(arr)

//to add at the specific index
arr.splice(1, 0, 2, 3, 4, 55, 6)
console.log(arr)

//combine of both
arr.splice(1, 3, 45, 90, 23, 33)
console.log(arr)

//splice vs slice
const subarr = arr.slice(1, 4) //last index will excluded
console.log(subarr)
console.log(arr)
//in slice original array will not changed
//in splice original array will be changed