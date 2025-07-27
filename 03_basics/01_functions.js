function sayMyname() {
    console.log("k")
    console.log("e")
    console.log("d")
    console.log("a")
    console.log("r")
}

sayMyname()
// 👉 Prints each character of "kedar" line by line


function addTwo(number1, number2) {
    // number1, number2 → parameters
    console.log(number1 + number2)
}

addTwo(3, 4) 
// 👉 7 (3 + 4)
// 3, 4 → arguments (call time)


function addNumbers(number1, number2) {
    let result = number1 + number2
    return result
    // return ke baad koi code run nahi hota
}

const k = addNumbers(234, 234)
console.log(k)
// 👉 468


function loggedInUser(userName) {
    return `${userName} just logged in`
}

console.log(loggedInUser("kedar"))  
// 👉 "kedar just logged in"

console.log(loggedInUser())        
// 👉 "undefined just logged in"
// agar argument nahi diya toh `undefined`


function loggedInUser2(userName = "kd") {
    // default value set → "kd"
    return `${userName} just logged in`
}

console.log(loggedInUser2())        
// 👉 "kd just logged in"
console.log(loggedInUser2("kedar")) 
// 👉 "kedar just logged in"


function calculateCartPrice(...num1) {
    // rest operator → saare arguments ek array me pack ho jaate hain
    return num1
}

console.log(calculateCartPrice(200, 300, 4000))
// 👉 [200, 300, 4000]


function calculateCartPrice2(val1, val2, ...num1) {
    // val1 = 20, val2 = 12
    // num1 = remaining values → [213, 0, 300, 4000]
    return num1
}

console.log(calculateCartPrice2(20, 12, 213, 0, 300, 4000))
// 👉 [213, 0, 300, 4000]


const user = {
    name: "kedar",
    pass: 123
}

function any(anyObject) {
    // parameter me object liya aur uski keys access ki
    console.log(`username is ${anyObject.name} and password is ${anyObject.pass}`)
}

any(user)
// 👉 username is kedar and password is 123

any({
    name: "kedar",
    pass: 123
})
// 👉 same output


// Same method se array bhi pass kar sakte ho
const myArr = [100, 200, 300]

function getSecondElement(arr) {
    return arr[1]
}

console.log(getSecondElement(myArr)) 
// 👉 200
// Arrow Function (short syntax)
const sum = (a, b) => a + b
console.log(sum(2, 3)) // 👉 5

// Function expression
const greet = function() {
    return "Hello"
}
console.log(greet()) // 👉 Hello

// Callback function
function doSomething(fn) {
    fn()
}
doSomething(() => console.log("I am a callback")) // 👉 I am a callback

// Rest vs Spread difference
function test(...args) {
    console.log(args) // 👉 [1, 2, 3]
}
test(1, 2, 3)

const arr = [1, 2, 3]
console.log(...arr) // 👉 1 2 3 (spread operator)
