// singleton --> constructor se banta hai --> Object.create()
// object literals se singleton nahi banta

// key ko JS automatic string treat karta hai
const mySym = Symbol("key1") // unique symbol

const JsUser = {
    name: "kedar",
    "full name": "kedar baswade", // key with space
    4: "roasfdkn", // key converted to string '4'
    age: 19,

    // mySym: "myKey1",  // yeh string key ban jata, Symbol nahi
    [mySym]: "myKey1", // proper symbol key

    email: "kedarbajsdbka!@Ngmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}

// Accessing values:
console.log(JsUser.email)              // 👉 "kedarbajsdbka!@Ngmail.com"
console.log(JsUser["email"])           // 👉 same result
console.log(JsUser["full name"])       // 👉 "kedar baswade"
// console.log(JsUser.full name) --> ❌ Syntax Error
console.log(typeof mySym)             // 👉 "symbol"
console.log(JsUser[mySym])            // 👉 "myKey1"

// Updating property
JsUser.age = 20

Object.freeze(JsUser) 
// Object is now frozen, changes won't apply

JsUser.age = 32 // No effect
console.log(JsUser.age)              // 👉 20 (unchanged)
console.log(JsUser)                  // 👉 entire object log

/**
{
  '4': 'roasfdkn',
  name: 'kedar',
  'full name': 'kedar baswade',
  age: 20,
  email: 'kedarbajsdbka!@Ngmail.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Sunday' ],
  [Symbol(key1)]: 'myKey1'
}
*/

// Adding methods (works only if freeze is removed temporarily)
JsUser.greet = function () {
    console.log("Hello js user")
}

JsUser.greet2 = function () {
    console.log(`Hello js user, ${this.name}`)
}

console.log(JsUser.greet)       // 👉 [Function (anonymous)]
console.log(JsUser.greet())     // 👉 Hello js user

console.log(JsUser.greet2)      // 👉 [Function (anonymous)]
console.log(JsUser.greet2())    // 👉 Hello js user, kedar

// Object.freeze() ➝ object ka structure aur values dono lock ho jaate hain
// even new properties can't be added

JsUser.newKey = "test"
console.log(JsUser.newKey) // 👉 undefined

// Object.seal() ➝ properties update ho sakte hain, par naye add/remove nahi ho sakte
const obj = { name: "kedar" }
Object.seal(obj)
obj.name = "bhagwan"
obj.age = 19
console.log(obj) // 👉 { name: 'bhagwan' } → new key not added

// Symbol keys are non-enumerable
for (let key in JsUser) {
    console.log(key)
}
// 👉 Output will NOT include Symbol(key1)

console.log(Object.getOwnPropertySymbols(JsUser))
// 👉 [ Symbol(key1) ] → manually access symbol keys

// To clone an object
const clone = Object.assign({}, JsUser) // shallow copy
// OR
const spreadClone = { ...JsUser }
