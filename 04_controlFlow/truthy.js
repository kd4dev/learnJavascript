const userEmail = []

if (userEmail) {
    console.log("Got user email"); 
    // ✅ Output: Got user email
    // Explanation: [] is a truthy value, so the if block runs
} else {
    console.log("Don't have user email");
}

// falsy values:
// false, 0, -0, BigInt 0n, "", null, undefined, NaN 

// truthy values:
// "0", 'false', " ", [], {}, function(){}

// Check if array is empty
if (userEmail.length === 0) {
    console.log("Array is empty"); 
    // ✅ Output: Array is empty
}

// Check if object is empty
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty"); 
    // ✅ Output: Object is empty
}


// Nullish Coalescing Operator (??): only works for null or undefined
let val1;
// val1 = 5 ?? 10              --> 5 (because 5 is not null/undefined)
// val1 = null ?? 10           --> 10
// val1 = undefined ?? 15      --> 15
val1 = null ?? 10 ?? 20       // ✅ Output: 10

console.log(val1)             // ✅ Output: 10


// Ternary Operator
// Syntax: condition ? exprIfTrue : exprIfFalse

const iceTeaPrice = 100
iceTeaPrice <= 80 
    ? console.log("less than 80") 
    : console.log("more than 80") 
// ✅ Output: more than 80
// More on truthy/falsy:
console.log(Boolean([]))         // true
console.log(Boolean({}))         // true
console.log(Boolean(""))         // false
console.log(Boolean(" "))        // true
console.log(Boolean(null))       // false

// Using ?? vs || (important difference)
let a = null || "default"        // 'default' - because null is falsy
let b = null ?? "default"        // 'default' - because null triggers ??
let c = 0 || "default"           // 'default' - 0 is falsy
let d = 0 ?? "default"           // 0 - 0
