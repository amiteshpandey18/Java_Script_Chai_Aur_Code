let arr = [10, 5, 20, 8];

let evenCount = 0;

for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0) {
        evenCount++;
    }    
}

console.log("Even number count:", evenCount);