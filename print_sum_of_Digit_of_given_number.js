
function sumOfDigits(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}

// Example usage:
let number = 12345;
console.log("Sum of digits of", number, "is", sumOfDigits(number));
