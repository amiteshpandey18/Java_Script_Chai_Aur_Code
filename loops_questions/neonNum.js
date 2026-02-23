// Neon number = 9 * 9 = 81 , 8 + 1 = 9 

let num = 5;
 
let square = num * num;

let sum = 0;

while (square != 0) {
    let mod = square % 10;
    sum += mod;
    square = Math.floor(square/10);
}

if(num == sum) {
    console.log("Neon Number")
} else {
    console.log("Not neon number");
}
