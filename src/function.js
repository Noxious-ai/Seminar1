function checkDivisible(n, divisor) {
    return n % divisor === 0;
}

console.log(checkDivisible(10, 2));  // true
console.log(checkDivisible(10, 3));  // false