// Find the sum of the digit of the num

const sumOfAllDigit = (num) => {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10) //to get only integer we have to use Math.floor
    }
    return sum;
}

console.log(sumOfAllDigit(2345))