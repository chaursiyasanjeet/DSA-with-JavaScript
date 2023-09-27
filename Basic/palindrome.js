// find plaindrome

//reverseNum function
const reverseNum = (num) => {
    let reverse = 0;

    while (num > 0) {
        const lastDigit = num % 10;
        reverse = reverse * 10 + lastDigit
        num = Math.floor(num / 10)
    }
    return reverse
}

//findinf plaindrome
const findPalindrome = (num) => {

    if (num != reverseNum(num)) return false

    return true
}

console.log(findPalindrome(2345))
console.log(findPalindrome(121))