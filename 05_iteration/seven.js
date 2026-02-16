const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers                   // It is used to create a new array by applying a function
                .map((num) => num * 10 )   //  to each element of an existing array.
                .map( (num) => num + 1)
                .filter( (num) => num >= 40) // (Chaining) calling multiple methods one after another on the same object in a single line.

console.log(newNums);