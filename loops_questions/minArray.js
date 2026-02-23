let arr = [10, 5, 20, 8];

let min = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log("Minimum element in Array is:", min);