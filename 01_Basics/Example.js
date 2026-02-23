

let num = 1234;
let sum=0;

while(num!=0) {
    let mod = num %10;
    sum =(sum*10) +mod;
    num= Math.floor(num/10);
}

console.log(sum);