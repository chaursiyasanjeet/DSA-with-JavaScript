// count the number of digits

const countDigit = (num) => {
    num = Math.abs(num) //to count digit of negative value
    let totalDigit = 0;
    while (num > 0) {
        totalDigit++
        num = Math.floor(num / 10)
    }
    return totalDigit
}

console.log(countDigit(0))
console.log(countDigit(-3233))