function outer() {
    let count = 0;
    function inner() {
        console.log(count);
        count++;
    }
    return inner;
}

let res = outer();

res();
res();
res();
res();