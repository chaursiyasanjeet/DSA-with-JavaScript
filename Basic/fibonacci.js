// find fibonacci

const fibb = (n) => {

    //base case
    if (n < 2) {
        return n;
    }

    let prev = 0, curr = 1, next

    for (let i = 2; i <= n; i++) {
        next = prev + curr;
        prev = curr;
        curr = next;
    }
    return next
}

console.log(fibb(2))
console.log(fibb(3))