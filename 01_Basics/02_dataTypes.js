
// 1. String
let name = "Amit";
console.log("String:", name, "| type:", typeof name);

// 2. Number
let age = 22;
let price = 99.5;
console.log("Number:", age, price, "| type:", typeof age);

// 3. Boolean
let isStudent = true;
console.log("Boolean:", isStudent, "| type:", typeof isStudent);

// 4. Undefined
let result;
console.log("Undefined:", result, "| type:", typeof result);

// 5. Null
let data = null;
console.log("Null:", data, "| type:", typeof data); // object (JS bug)

// // 6. Symbol
// let id1 = Symbol("id");
// let id2 = Symbol("id");
// console.log("Symbol:", id1 === id2, "| type:", typeof id1);

// 7. BigInt
let bigNumber = 123456789012345678901234n;
console.log("BigInt:", bigNumber, "| type:", typeof bigNumber);

// 8. Object
let student = {
  name: "Amit",
  age: 22
};
console.log("Object:", student, "| type:", typeof student);

// 9. Array (object type)
let marks = [85, 90, 78];
console.log("Array:", marks, "| type:", typeof marks);

// 10. Function (special object)
function greet() {
  return "Hello";
}
console.log("Function:", greet(), "| type:", typeof greet);

// ===== Primitive vs Reference Check =====
let a = 10;
let b = a;
b = 20;

let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value = 20;

console.log("Primitive copy:", a, b);
console.log("Reference copy:", obj1.value, obj2.value);
