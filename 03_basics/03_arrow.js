const user = {
  userName: "kedar",
  price: 3545,
  welcomeMessage: function(){
    console.log(`${this.userName} you are great`)  // 👉 "kedar you are great" / "kd you are great"
    console.log(this) 
    /*
    {
      userName: 'kedar',
      price: 3545,
      welcomeMessage: [Function: welcomeMessage]
    }
    */
  }
}
user.welcomeMessage()  // 👉 kedar you are great
user.userName = "kd"
user.welcomeMessage()  // 👉 kd you are great

// "this" gives the current object context
// Dynamic context changes based on how the function is called

console.log(this) 
// 👉 {} in Node.js 
// In browser → this = window object

function one(){
  console.log(this)
}
// one()
// 👉 In Node.js: logs the global object
// 👉 In browser: logs window object

function two(){
  const userasm = "kedar"
  console.log(this.userasm)  // 👉 undefined
  console.log(this)          // 👉 global object or window (but userasm not part of this)
}
two()

const twooo = () => {  // arrow function
  const userasm = "kedar"
  console.log(this.userasm)  // 👉 undefined
  console.log(this)          // 👉 {} in Node.js
}
twooo()


// Arrow function + implicit return example:
const afdscxm = (num1, num2) => (num1 + num2)
console.log(afdscxm(4, 5))  // 👉 9

// Paranthesis () ke andar likha toh implicit return
// Agar {} braces use kiya toh `return` likhna padega
// Traditional function => dynamic 'this' (based on caller)
const obj = {
  name: "kedar",
  print: function() {
    console.log(this.name)  // 👉 "kedar"
  }
}
obj.print()

// Arrow function => lexical 'this' (inherits from parent scope)
const obj2 = {
  name: "kedar",
  print: () => {
    console.log(this.name)  // 👉 undefined (points to global scope)
  }
}
obj2.print()


// Arrow function shortcut:
const add = (a, b) => a + b
console.log(add(3, 7)) // 👉 10

const sayHello = () => "Hello!"
console.log(sayHello()) // 👉 Hello!

// If returning an object implicitly → wrap with parentheses:
const getUser = () => ({ name: "kedar", age: 19 })
console.log(getUser()) // 👉 { name: 'kedar', age: 19 }
