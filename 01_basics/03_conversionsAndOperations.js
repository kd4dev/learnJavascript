let score = "33"

console.log(typeof score) // 👉 string
console.log(typeof (score)) // 👉 string // typeof() --> aise bhi chlta he

let valueInNumber = Number(score) // typecasting <DataType>(variable name) --> ye convert hoga
console.log(score) // 👉 33 (original score string hi rahega, convert valueInNumber me hua he)

//  generally sabhi data types shuru capital se hi hote he

let score1 = "33abc"

console.log(score1) // 👉 33abc
console.log(typeof score1) // 👉 string
let value = Number(score1)
console.log(typeof value) // 👉 number
console.log(value) // 👉 NaN

let score2 = null
console.log(score2) // 👉 null
console.log(typeof score2) // 👉 object
let value2 = Number(score2)
console.log(typeof value2) // 👉 number
console.log(value2) // 👉 0

let score3 = undefined
console.log(score3) // 👉 undefined
console.log(typeof score3) // 👉 undefined
let value3 = Number(score3)
console.log(typeof value3) // 👉 number
console.log(value3) // 👉 NaN

// true-->1
// false-->0

// 0 , "" (empty string) --> convert Boolean --> false
// any non-zero number,"kedar"(any non empty string) --> convert Boolean --> true

// *****************************OPERATIONS***************************************

let value5 = 3
let negValue = -value5
console.log(negValue) // 👉 -3

console.log(3 + 2) // 👉 5
console.log(3 - 2) // 👉 1
console.log(3 * 2) // 👉 6
console.log(3 ** 2) // 👉 9 --> a**b --> a^b
console.log(3 / 2) // 👉 1.5
console.log(3 % 2) // 👉 1
console.log(2 % 3) // 👉 2 --> a%b --> a if (a<b)

let str1 = "hello"
let str2 = "world"
let str3 = str1 + str2
console.log(str3) // 👉 helloworld

console.log(typeof ("1" + 2)) // 👉 string
console.log(1 + "2") // 👉 "12"
console.log("1" + 2 + 2) // 👉 "122" --> left to right evaluation, string concat
console.log(1 + 2 + "2") // 👉 "32" --> 1+2 = 3 → 3 + "2" = "32"

console.log(+true) // 👉 1
console.log(true + 1) // 👉 2
console.log(+"") // 👉 0

// focus more on readability not on fancieness

let counter = 100
console.log(++counter) // 👉 101 (pre-increment: pehle badhao, fir print)
console.log(counter) // 👉 101
console.log(counter++) // 👉 101 (post-increment: pehle print, fir badhao)

// 🔥 Extra Points:

// isNaN() → check karne ke liye ki value NaN hai ya nahi
console.log(isNaN("33abc")); // 👉 true
console.log(isNaN(33));      // 👉 false

// Number("") → empty string converts to 0
console.log(Number(""));     // 👉 0

// Number(" ") → whitespace also becomes 0
console.log(Number(" "));    // 👉 0

// Boolean conversions cheat sheet:
console.log(Boolean(0));         // 👉 false
console.log(Boolean(""));        // 👉 false
console.log(Boolean("kedar"));   // 👉 true
console.log(Boolean(999));       // 👉 true

// Special NaN behavior:
console.log(NaN === NaN);        // 👉 false (NaN is never equal to itself)

// typeof NaN is 'number' (confusing, but true)
console.log(typeof NaN);         // 👉 'number'

// Incrementation clarity:
let a = 5;
console.log(a++); // 👉 5 (prints then increments)
console.log(++a); // 👉 7 (increments then prints)
