// find the sum of all natural number from 1 to n 

const sumOfNatural = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return sum;
}

console.log(sumOfNatural(5))