const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Step by step breakdown:

const newNums = myNumers
    .map((num) => num * 10 )       // [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    .map( (num) => num + 1)        // [11, 21, 31, 41, 51, 61, 71, 81, 91, 101]
    .filter( (num) => num >= 40)   // [41, 51, 61, 71, 81, 91, 101]

console.log(newNums)
// Output: [ 41, 51, 61, 71, 81, 91, 101 ]
// map() → hamesha ek NEW array return karta hai, same length ke saath
// filter() → hamesha ek NEW array return karega jisme sirf true wale elements honge

// Chain karne ka faida:
// - Ek hi jagah pe multiple transformations possible
// - Readable aur concise hota hai
// - Performance bhi better compared to nested loops

// Bonus:
const arr = [1, 2, 3]
const result = arr.map((x) => {
  if (x % 2 === 0) return x * 100
  return x
})
console.log(result) // [1, 200, 3]
