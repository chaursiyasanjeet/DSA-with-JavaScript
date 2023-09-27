// polyfill of map filter method

const employees = [
  { name: "John", age: 32 },
  { name: "Sanjeet", age: 23 },
  { name: "Amit", age: 12 },
  { name: "Ayush", age: 55 },
];

const employeeName = employees.map(function (employee) {
  return employee.name;
});

console.log(employeeName);

//polyfill of map

Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

const employeeNameMy = employees.myMap(function (employee) {
  return employee.name;
});

console.log("my map", employeeNameMy);

//filter polyfill
const products = [
  { name: "iphone", price: "344", inStock: true },
  { name: "samsung", price: "894", inStock: false },
  { name: "redmi", price: "123", inStock: true },
];

const available = products.filter((item) => {
  return item.inStock;
});

console.log(available);

Array.prototype.myFilter = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};
const myavailable = products.myFilter((item) => {
  return item.inStock;
});

console.log(myavailable);

//reduce
const orders = [
  { name: "iphone", price: 344, inStock: true },
  { name: "samsung", price: 234, inStock: false },
  { name: "redmi", price: 455, inStock: true },
];

const totalvalue = orders.reduce((acc, item) => {
  return acc + item.price;
}, 0);

console.log(totalvalue);

Array.prototype.myReduce = function (callback, initialValue) {
  let accumlator = initialValue === undefined ? this[0] : initialValue;
  for (let i = initialValue === undefined ? 1 : 0; i < this.length; i++) {
    console.log("inside");
    accumlator = callback(accumlator, this[i], i, this);
  }
  return accumlator;
};

const mytotalvalue = orders.myReduce((acc, item) => {
  return acc + item.price;
}, 0);

console.log("mytotalvalue", mytotalvalue);
