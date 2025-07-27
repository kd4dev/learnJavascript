// array
const arr = [0, 1, 2, 3, 4]
/*
in js, arrays are:
- resizable
- can contain different data types
- 0-based indexing
*/

const heroes = ["spider man", "iron man", "thor", "black widow", "batman"]

console.log(arr[2]) // 👉 Output: 2

const arr2 = new Array(1, 2, 3, 4, 5) // new keyword se bhi array ban sakta hai

// Array methods

arr.push(6) // adds element at end of array 👉 arr = [0,1,2,3,4,6]
arr.pop() // deletes element from end 👉 arr = [0,1,2,3,4]
arr.unshift(9) // adds element at start 👉 arr = [9,0,1,2,3,4]
arr.shift() // removes element from start 👉 arr = [0,1,2,3,4]

console.log(arr.includes(3)) 
// 👉 Output: true (3 exists in array)

console.log(arr.indexOf("kedar")) 
// 👉 Output: -1 (element not found)

console.log(arr) 
// 👉 Output: [0, 1, 2, 3, 4]

const newArr = arr.join()
// join() se array ke saare elements ek string me convert ho jaate hain
// Default separator comma (,) hota hai
console.log(newArr) // 👉 Output: "0,1,2,3,4"
console.log(typeof newArr) // 👉 Output: "string"

const arrn1 = arr.slice(1, 3) 
// slice() returns a shallow copy from index 1 to 3 (3 exclusive)
// does NOT modify original array
console.log("A", arr) // 👉 Output: A [0, 1, 2, 3, 4]
console.log(arrn1)    // 👉 Output: [1, 2]

const arrn2 = arr.splice(1, 3) 
// splice() modifies the original array
// deletes 3 elements starting from index 1 and returns them
console.log("B", arr)   // 👉 Output: B [0, 4]
console.log(arrn2)      // 👉 Output: [1, 2, 3]

// 🔥 Extra Points:

// push() & pop() ➡️ stack-style behavior (LIFO - Last In First Out)
let stack = [];
stack.push(1);
stack.push(2);
console.log(stack.pop()); // 👉 Output: 2

// unshift() & shift() ➡️ queue-style behavior (FIFO - First In First Out)
let queue = [];
queue.unshift(1);
queue.unshift(2);
console.log(queue.pop()); // 👉 Output: 1

// join() doesn't modify original array, just returns a string
// reverse() and sort() do modify the original array (⚠️ destructive)

// slice() vs splice():
// slice(start, end) ➡️ non-destructive, end index is exclusive
// splice(start, deleteCount) ➡️ destructive, can also insert elements

let arrEx = [1, 2, 3, 4, 5];
let removed = arrEx.splice(1, 2, 99, 100);
console.log(arrEx);   // 👉 Output: [1, 99, 100, 4, 5]
console.log(removed); // 👉 Output: [2, 3]

// Array.isArray(x) ➡️ to check if a variable is really an array
console.log(Array.isArray([1, 2, 3])); // 👉 true
console.log(Array.isArray("not an array")); // 👉 false

