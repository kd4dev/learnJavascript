//denoted by "" || ''

const name="hitesh"
const repoCount=50

console.log(name+repoCount+" value")

console.log(`hello my name is ${name} and my repocount is ${repoCount}`)

const gameName=new String('red dead redemption 2')

//0-based indexing
console.log(gameName)
console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.toLowerCase())
console.log(gameName.toUpperCase())
console.log(gameName.charAt(5))
console.log(gameName.indexOf(2))

const newString=gameName.substring(0,8) //last index include nahi hota
console.log(newString)

const anotherString=gameName.slice(0,5) //last index include nahi hota
console.log(anotherString)
const newstring=gameName.slice(-4,19) //start,end in slice start<end || empty string milega
console.log(newstring)

const one="         kedar          "
console.log(one)
console.log(one.trim()) //removes start and end spaces
const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))
console.log(url.includes('hitesh'))  // true-->if present ||false -->f not presen
console.log(url.includes('kedar')) //false

console.log(url.split('%'))

//string.split(separator, limit)
//separator: Kis character ya string par split karna hai.
//limit: Kitne maximum parts me split karna hai (optional).


const str = "apple,banana,grape,orange";
console.log(str.split(",", 2)); // [ 'apple', 'banana' ]
// Yaha ',' separator hai aur limit 2 hai, toh sirf 2 parts milenge. 