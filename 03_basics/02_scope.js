var c = 300

if (true) {
    // let a = 12
    // const b = 23
    var c = 123  // var ka block scope nahi hota, overwrite kar deta hai outer c ko
}

// console.log(a) → ❌ a is not defined (let ka block scope hota hai)

console.log(c)  
// 👉 123 → kyunki var ka function scope hota hai, block scope nahi

// Note: browser scope aur node.js scope thoda alag behave karte hain


function one() {
    const username = "kedar"

    function two() {
        const website = "youtube.com"
        console.log(username) 
        // 👉 "kedar" (inner function can access outer variable)
    }

    // console.log(website) → ❌ website is not defined (outer can't access inner)
    two()
}

one()
// 👉 "kedar"


// Nested if block scope example:
if (true) {
    const userksa = "kedar"
    if (userksa === "kedar") {
        const web = "youtube"
        console.log(web + userksa)
        // 👉 "youtubekedar"
    }

    // console.log(web) → ❌ Error: web is not defined
}

// console.log(userksa) → ❌ Error: userksa is not defined


const add = function (num) {  // Function expression
    return num + 2
}

console.log(add(34)) 
// 👉 36

// Variables in JS are powerful → they can hold functions, objects, arrays, etc.


// Hoisting behavior:
// Function declaration → hoist hoti hai (pehle call karna valid)
// Function expression → hoist nahi hoti (pehle call karne par error)

console.log(declared(5)) // 👉 10

function declared(x) {
    return x * 2
}

// console.log(expr(5)) → ❌ Error: Cannot access 'expr' before initialization
const expr = function (x) {
    return x * 2
}
// Scope summary:
function outer() {
    let x = 10
    function inner() {
        console.log(x) // 👉 10
    }
    return inner
}
const innerFn = outer()
innerFn() // Closure concept

// Global scope → accessible anywhere
// Function scope → only inside the function
// Block scope → inside { } for let/const

// Hoisting:
console.log(a) // 👉 undefined (due to hoisting)
var a = 10

// let/const are not hoisted like var
// console.log(b) → ❌ ReferenceError
let b = 20
