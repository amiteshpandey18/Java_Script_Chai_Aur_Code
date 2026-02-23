let num = 12345;
let digit = num;

let sum = 0;

while (num != 0) {
    let mod = num % 10;
    sum += mod;
    num = Math.floor(num/10);
}

console.log("Sum of digit", digit, "is", sum);