const score=400
console.log(score)

const balance=new Number(100)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2)) //number of decimals points tak jayega


const otherNumber = 12.462
// toPrecision(n) number ko n significant digits tak round karta hai aur string return karta hai
console.log(otherNumber.toPrecision(3)) // "12.5"
// Yaha 12.462 ko 3 significant digits tak round kiya, result "12.5" (string)

const num = 123.4567
console.log(num.toPrecision(2)) // "1.2e+2"
// 2 significant digits: "1.2e+2" (scientific notation)

console.log(num.toPrecision(5)) // "123.46"
// 5 significant digits: "123.46" (string)
// toPrecision() ka use tab hota hai jab aapko number ko specific significant digits tak round karna ho

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN')) // en-IN-->ye nahi diya toh international system use hoga 1,000,000

// +++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++

console.log(Math.abs(-4))
console.log(Math.round(4.6))
 // Math wala round of system 

 console.log(Math.ceil(4.2)) //uper wale number ki taraf le jayega -->5
 console.log(Math.floor(4.9))
 console.log(Math.min(4,3,5,6))
 console.log(Math.max(1,2,3,4,24,3,3))
 console.log(Math.floor((Math.random()*10)+1))

 const min=10
 const max=20
 console.log(Math.floor(Math.random()*(max-min+1))+min)

 //Math.floor(Math.random()*(max-min+1))+min

 