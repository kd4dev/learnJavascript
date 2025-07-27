// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }
// 👉 Output: "temperature is greater than 50"

// console.log("Execute");
// 👉 Output: "Execute"

// <, >, <=, >=, ==, !=, ===, !== → Comparison operators

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`); // 👉 Output: User power: fly
// }

// console.log(`User power: ${power}`);
// ❌ Error: power is not defined (because let has block scope)

// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");
// 👉 Output: test
// 👉 Output: test2
// Single-line if can run multiple expressions separated by commas (not recommended for readability)

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }
// 👉 Output: less than 1200

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) { // false due to 2==3
    console.log("Allow to buy course"); // ❌ Will not run
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in"); 
    // 👉 Output: User logged in
}
// Difference between == and ===
console.log("5" == 5);  // 👉 true (only value comparison)
console.log("5" === 5); // 👉 false (value + type comparison)

// NOT operator
let isAdmin = false;
if (!isAdmin) {
    console.log("Not an admin"); // 👉 Output: Not an admin
}

// Ternary Operator
const age = 18;
const canVote = age >= 18 ? "Yes" : "No";
console.log("Can vote:", canVote); // 👉 Output: Can vote: Yes

// Nested conditions
const score = 85;
if (score > 90) {
    console.log("A grade");
} else if (score > 75) {
    console.log("B grade"); // 👉 Output: B grade
} else {
    console.log("C grade");
}
