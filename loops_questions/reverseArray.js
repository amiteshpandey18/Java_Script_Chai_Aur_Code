let arr = [10, 5, 20, 8];

let revArr = [];
let j = arr.length;

for (let i = 0; i < arr.length; i++) {
    revArr[j--] = arr[i];
}

revArr.forEach((ele) => console.log(ele));