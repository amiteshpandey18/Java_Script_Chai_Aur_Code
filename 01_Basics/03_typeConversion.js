// ===== JavaScript Type Conversion (Complete in One Code) =====

// Implicit Type Conversion (Automatic)
console.log("5" + 2);        // "52"  (string)
console.log("5" - 2);        // 3     (number)
console.log("5" * 2);        // 10    (number)
console.log("5" / 2);        // 2.5   (number)

console.log(true + 1);       // 2
console.log(false + 1);      // 1

console.log("5" == 5);       // true  (type conversion)
console.log("5" === 5);      // false (no conversion)

// Explicit Type Conversion (Manual)

// String → Number
let strNum = "10";
console.log(Number(strNum));     // 10
console.log(parseInt(strNum));   // 10
console.log(+strNum);            // 10

// Invalid conversion
console.log(Number("abc"));      // NaN

// Number → String
let num = 100;
console.log(String(num));        // "100"
console.log(num.toString());     // "100"

// Boolean Conversion
console.log(Boolean(1));         // true
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean("Hello"));   // true
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false

// Truthy & Falsy demonstration
let values = [0, 1, "", "0", null, undefined, NaN, [], {}];

values.forEach(value => {
  console.log(value, "=>", Boolean(value));
});

// Mixed Real Example
let a = "10";
let b = 5;

console.log(a + b);              // "105"
console.log(a - b);              // 5
console.log(Number(a) + b);      // 15
console.log(String(b));          // "5"
console.log(Boolean(a));         // true
console.log(Boolean(0));         // false
