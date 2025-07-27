const accountId = 24456; // const: cannot be reassigned

let accountEmail = "hitesh@google.com"; // let: re-assignable, block-scoped
var accountPassword = "12345";          // var: re-assignable, function-scoped (❌ avoid using)
accountCity = "Jaipur";                 // no declaration keyword => becomes global (❌ not recommended)
let accountState;                       // declared but not initialized => default value is undefined

// accountId = 2; // ❌ Error: Assignment to constant variable

// Updating values
accountEmail = "kedar@google.com";
accountPassword = "9999";
accountCity = "nanded";

console.log(accountId);
// 👉 Output: 24456

console.table([accountEmail, accountPassword, accountCity, accountState]);
// 👉 Output:
// ┌─────────┬──────────────────────┐
// │ (index) │      Values          │
// ├─────────┼──────────────────────┤
// │    0    │ 'kedar@google.com'   │
// │    1    │ '9999'               │
// │    2    │ 'nanded'             │
// │    3    │ undefined            │
// └─────────┴──────────────────────┘

/*
prefer not to use var because
of issues in block and functional scope
*/

// 🔥 Extra Points:

// const:
// 👉 Must be initialized during declaration
// 👉 Cannot be reassigned
// 👉 But objects/arrays declared with const can be mutated internally
const person = { name: "kedar" };
person.name = "shubham"; // ✅ allowed (object content changed)
// person = {}            // ❌ not allowed (reference reassignment)

// var vs let:
// - var is function scoped
// - let is block scoped

// Example: var leaking out of block
if (true) {
    var a = 10;
    let b = 20;
}
console.log(a); // 👉 Output: 10
// console.log(b); // ❌ ReferenceError: b is not defined

// Global variable (without declaration keyword)
globalCity = "Mumbai";
console.log(globalCity); // 👉 Works, but ❌ avoid this (pollutes global scope)


