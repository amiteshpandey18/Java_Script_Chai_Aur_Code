const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values  --> In JavaScript, every value is either truthy or 
//                   falsy when used in a Boolean context (like inside if, while, &&, ||).

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Rest all Truthy values just like eg:--

//truthy values
// "0", 'false', " ", [], {}, function(){} and more.......

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {  // keys() find object keys it will give you in array 
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10            // Gives number, it will only for null and undefined
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")