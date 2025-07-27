// js is dynamically typed, there is no type safety as in TypeScript
// primitive --> passed by value
// String, Number, Boolean, null, undefined, Symbol, Bigint

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId) 
// 👉 Output: false → Symbols are always unique even with same description

// non-primitive --> passed by reference
// Array, Objects, Functions

const heroes = ["spider man", "iron man", "thor"]
console.log(typeof heroes) 
// 👉 Output: object → arrays are of type object

let myObj = {
    name: "kedar",
    age: 19
}
console.log(typeof myObj) 
// 👉 Output: object

const myFunction = function () {
    console.log("hello world")
}
console.log(typeof myFunction) 
// 👉 Output: function (but technically also an object under the hood)

/* Primitive Datatypes
       Number     => number
       String     => string
       Boolean    => boolean
       null       => object      👈 (quirk in JS)
       undefined  => undefined
       Symbol     => symbol
       BigInt     => bigint

 Non-primitive Datatypes
       Arrays     => object
       Function   => function
       Object     => object           
*/

// ***********************************************************************************

// Stack memory (primitive) 
// Heap memory (non-primitive)

// Primitive types store value directly in stack (copy gets passed)
let name1 = "kedar"
let name2 = name1
name2 = "bhagwan"
console.log(name1) // 👉 "kedar"
console.log(name2) // 👉 "bhagwan"

// Non-primitive types store reference in stack pointing to heap memory
let user1 = { email: "k@k.com" }
let user2 = user1
user2.email = "kedar@chatgpt.com"
console.log(user1.email) // 👉 "kedar@chatgpt.com"

// typeof null === "object"
// It's a long-standing bug in JavaScript (since its early days)

console.log(typeof null); // 👉 "object"
console.log(typeof undefined); // 👉 "undefined"

// BigInt example:
const bigNum = 1234567890123456789012345678901234567890n;
console.log(typeof bigNum); // 👉 "bigint"

// Symbol uniqueness:
const s1 = Symbol("id");
const s2 = Symbol("id");
console.log(s1 === s2); // 👉 false (even with same description)

// Copying non-primitives:
const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2.push(4);
console.log(arr1); // 👉 [1, 2, 3, 4] → same reference

// Deep copy (structuredClone for modern JS)
const arr3 = structuredClone(arr1);
arr3.push(5);
console.log(arr1); // 👉 [1, 2, 3, 4]
console.log(arr3); // 👉 [1, 2, 3, 4, 5]
