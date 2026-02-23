let num = 1234;

let reverse = 0;

while (num != 0) {
    let mod = num % 10;
    reverse = (reverse * 10) + mod;
    num = Math.floor(num / 10); // Math.floor() covert decimal into nearly exact value
}

console.log("reverse number is", reverse);