let index = 0

// while loop
// while (index <= 10) {
//     console.log(`Value of index is ${index}`); 
//     index = index + 2
// }
/*
✅ Output if uncommented:
Value of index is 0
Value of index is 2
Value of index is 4
Value of index is 6
Value of index is 8
Value of index is 10
*/

// ----------------------------------------

let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    // console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}
/*
✅ Output if uncommented:
Value is flash
Value is batman
Value is superman
*/

// ----------------------------------------

let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10)
/*
✅ Output:
Score is 11
(Do-while executes once even if condition is false)
*/
// while loop executes only if condition is true from start

let x = 5
while (x < 5) {
    console.log("This won't run")
}

// do-while always runs once before checking condition

let y = 5
do {
    console.log("This will run once")
} while (y < 5)

// Infinite while loop (⚠️ Never run without a break)
// while(true){ console.log("Don't try this at home") }

// Practical usage: reading from array, API polling, or retry logic

