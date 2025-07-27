"use strict"; // treat all JS code as per the latest standards

/*
pehli ki js alag thi, naya code aur purane me farak pata chale is liye ye aaya
abhi ye nahi likha toh bhi chalta he.
*/

// alert(3+3) --> ye Node.js he, ye sab browser me chalta he, isey use karne ka syntax alag he

// code readability should be high
// ; --> semi-colon use krna na krna hamari marzi he


let name = "kedar" // string --> " " ya ' ' dono chalte he --> use only one consistently
let age = 19       // number --> Range: -(2^53 - 1) to (2^53 - 1)
let isLoggedIn = false  // boolean
let temparature = null  // abhi tak temp aya hi nahi (intentional absence of value)

console.log(typeof null)        
// 👉 Output: object (JavaScript ka ek purana bug)

console.log(typeof undefined)   
// 👉 Output: undefined

// typeof is used to find the type of any data value

/*   <-- primitive data types -->

// number
// string
// boolean
// bigint         --> range: approx -2^100 to 2^100 
// null           --> stand-alone value, "intentional empty"
// undefined      --> value ayi hi nahi
// symbol         --> mostly React me for uniqueness (like unique object keys)
*/

// 🔥 Extra Points:

// null vs undefined:
   // null => developer ne khud set kiya "value abhi nahi hai"
   // undefined => JS ne khud diya, "value mila hi nahi"

// typeof NaN
console.log(typeof NaN); // 👉 Output: "number"

// string interpolation (recommended modern way)
let myName = "kedar";
console.log(`Hello, my name is ${myName}`); // 👉 Output: Hello, my name is kedar

// typeof for functions
function greet() {}
console.log(typeof greet); // 👉 Output: "function" (special type of object)

// typeof for arrays
console.log(typeof [1,2,3]); // 👉 Output: "object" (use Array.isArray() to check properly)
