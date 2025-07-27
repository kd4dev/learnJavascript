const marvelHeroes = ["spider man", "iron man", "thor"]
const dcHeroes = ["batman", "superman", "flash"]

marvelHeroes.push(dcHeroes)
console.log(marvelHeroes) 
// 👉 Output: ['spider man', 'iron man', 'thor', [ 'batman', 'superman', 'flash' ]]
// dcHeroes pura ek array ke roop me last me add hua (nested)

console.log(marvelHeroes[3]) 
// 👉 Output: [ 'batman', 'superman', 'flash' ] → nested array

console.log(marvelHeroes[3][1]) 
// 👉 Output: "superman" → accessing 2nd element of nested array

marvelHeroes.pop() 
// 👉 Nested array hat gaya

// const all = marvelHeroes.concat(dcHeroes)
// console.log(all)

const all = [...marvelHeroes, ...dcHeroes]
// 👉 Spread operator: sab elements ko merge kar deta hai
console.log(all) 
// 👉 Output: [ 'spider man', 'iron man', 'thor', 'batman', 'superman', 'flash' ]

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const realAnotherArray = anotherArray.flat(Infinity)
// 👉 flat(level) → nested arrays ko flatten karta hai
// Infinity means sab levels flatten ho jao
console.log(realAnotherArray) 
// 👉 Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray("kedar")) 
// 👉 false → "kedar" is a string, not an array

console.log(Array.from("kedar")) 
// 👉 Output: [ 'k', 'e', 'd', 'a', 'r' ]

console.log(Array.from({ name: "kedar" })) 
// 👉 Output: [] → object se array banane ke liye iterable hona chahiye, { } is not iterable

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)) 
// 👉 Output: [100, 200, 300] → individual values ko ek naya array me daal deta hai

// ⚠️ push vs concat vs spread:

// .push() → modifies original array, returns new length
let arr1 = [1, 2]
arr1.push([3, 4])
console.log(arr1) // 👉 [1, 2, [3, 4]]

// .concat() → returns new array, doesn't mutate original
let arr2 = [1, 2]
let newArr = arr2.concat([3, 4])
console.log(newArr) // 👉 [1, 2, 3, 4]

// spread (...) → modern and cleaner way
let combined = [...arr2, ...[3, 4]]
console.log(combined) // 👉 [1, 2, 3, 4]

// flat(level) examples:
let nested = [1, [2, [3, [4]]]]
console.log(nested.flat(1))  // 👉 [1, 2, [3, [4]]]
console.log(nested.flat(2))  // 👉 [1, 2, 3, [4]]
console.log(nested.flat(Infinity))  // 👉 [1, 2, 3, 4]

// Array.from with map:
console.log(Array.from([1, 2, 3], x => x * 2)) // 👉 [2, 4, 6]

// Array.from({ length: 5
