const score = 400
console.log(score) 
// 👉 Output: 400

const balance = new Number(100)
console.log(balance) 
// 👉 Output: [Number: 100] → number object

console.log(balance.toString().length) 
// 👉 Output: 3 → "100".length

console.log(balance.toFixed(2)) 
// 👉 Output: 100.00 → 2 decimal places

const otherNumber = 12.462
// toPrecision(n): number ko n significant digits tak round karta hai, string return karta hai
console.log(otherNumber.toPrecision(3)) 
// 👉 Output: "12.5" (rounded 12.462 to 3 significant digits)

const num = 123.4567
console.log(num.toPrecision(2)) 
// 👉 Output: "1.2e+2" → 2 significant digits in scientific notation

console.log(num.toPrecision(5)) 
// 👉 Output: "123.46"

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')) 
// 👉 Output: 10,00,000 → Indian number system
// Default hota to: 1,000,000 (International)

// +++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++

console.log(Math.abs(-4)) 
// 👉 Output: 4 → absolute value

console.log(Math.round(4.6)) 
// 👉 Output: 5 → normal rounding

console.log(Math.ceil(4.2)) 
// 👉 Output: 5 → always round up

console.log(Math.floor(4.9)) 
// 👉 Output: 4 → always round down

console.log(Math.min(4, 3, 5, 6)) 
// 👉 Output: 3 → smallest number

console.log(Math.max(1, 2, 3, 4, 24, 3, 3)) 
// 👉 Output: 24 → largest number

console.log(Math.floor((Math.random() * 10) + 1)) 
// 👉 Output: 1 to 10 → random int

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) 
// 👉 Output: 10 to 20 (both inclusive)

// Math.floor(Math.random() * (max - min + 1)) + min → formula to get random integer between min and max

// 🔥 Extra Tips:

// Number() vs new Number():
console.log(typeof 100);             // 👉 "number"
console.log(typeof new Number(100)); // 👉 "object" (rarely needed)

// toExponential():
let bigNum = 123456;
console.log(bigNum.toExponential()); // 👉 "1.23456e+5"

// isNaN() & isFinite()
console.log(isNaN("hello"));         // 👉 true
console.log(isNaN(123));             // 👉 false
console.log(isFinite(99999));        // 👉 true
console.log(isFinite(Infinity));     // 👉 false

// Math.random() → always returns value in [0, 1)
console.log(Math.random());          // 👉 0 to <1

// Math.trunc()
console.log(Math.trunc(4.99));       // 👉 4 → removes decimal part
console.log(Math.trunc(-4.99));      // 👉 -4

// Math.pow() → alternative to **
console.log(Math.pow(2, 3));         // 👉 8

// Math.sqrt()
console.log(Math.sqrt(16));          // 👉 4
