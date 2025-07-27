// denoted by "" || ''

const name = "hitesh"
const repoCount = 50

console.log(name + repoCount + " value") 
// 👉 Output: hitesh50 value (normal string concat)

console.log(`hello my name is ${name} and my repocount is ${repoCount}`)
// 👉 Output: hello my name is hitesh and my repocount is 50 (template literal)

const gameName = new String('red dead redemption 2')

console.log(gameName) // 👉 Output: [String: 'red dead redemption 2']
console.log(gameName[0]) // 👉 Output: r
console.log(gameName.length) // 👉 Output: 22
console.log(gameName.toLowerCase()) // 👉 Output: red dead redemption 2
console.log(gameName.toUpperCase()) // 👉 Output: RED DEAD REDEMPTION 2
console.log(gameName.charAt(5)) // 👉 Output: e
console.log(gameName.indexOf(2)) // 👉 Output: 21 (index of character '2')

const newString = gameName.substring(0,8) // last index not included
console.log(newString) // 👉 Output: red dead

const anotherString = gameName.slice(0,5) // last index not included
console.log(anotherString) // 👉 Output: red d

const newstring = gameName.slice(-4,19) 
// slice(start, end) => start<end, here -4 = position from end
console.log(newstring) // 👉 Output: tion (from index 18 to 19)

const one = "         kedar          "
console.log(one) // 👉 Output: "         kedar          "
console.log(one.trim()) // 👉 Output: "kedar" (removes start and end spaces)

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-')) 
// 👉 Output: https://hitesh.com/hitesh-choudhary

console.log(url.includes('hitesh'))  
// 👉 Output: true

console.log(url.includes('kedar')) 
// 👉 Output: false

console.log(url.split('%')) 
// 👉 Output: [ 'https://hitesh.com/hitesh', '20choudhary' ]

// string.split(separator, limit)
// separator: Kis character ya string par split karna hai.
// limit: Kitne maximum parts me split karna hai (optional).

const str = "apple,banana,grape,orange";
console.log(str.split(",", 2)); 
// 👉 Output: [ 'apple', 'banana' ]
// ',' separator hai aur limit 2 hai, toh sirf 2 parts milenge.

// 🔥 Extra Tips:

// Strings are immutable: koi bhi method naya string return karta hai, original nahi badalta

// substring(start, end) vs slice(start, end)
// slice() can take negative indexes, substring() can't
console.log("hello".substring(1, 4)); // 👉 "ell"
console.log("hello".slice(-3));       // 👉 "llo"

// trimStart() and trimEnd()
let messy = "   code   ";
console.log(messy.trimStart()); // 👉 "code   "
console.log(messy.trimEnd());   // 👉 "   code"

// startsWith() and endsWith()
console.log("kedar bhai".startsWith("ked")); // 👉 true
console.log("kedar bhai".endsWith("bhai"));  // 👉 true

// padStart and padEnd
console.log("5".padStart(3, "0")); // 👉 "005"
console.log("5".padEnd(3, "*"));   // 👉 "5**"

