let score = "33"

console.log(typeof score)
console.log(typeof (score)) //typeof()--> aise bhi chlta he

let valueInNumber=Number(score) // typecasting <DatatType(isme convert hoga)>(variable name)--> ye convert hoga
console.log(score)

//  generally sabhi data types shuru capital se hi hote he

let score1 = "33abc"

console.log(score1)
console.log(typeof score1)
let value=Number(score1)
console.log(typeof value) //number
console.log(value) //NaN

let score2 = null
console.log(score2)//null
console.log(typeof score2) //object
let value2=Number(score2)
console.log(typeof value2) //number
console.log(value2) //0

let score3 = undefined
console.log(score3)//undefined
console.log(typeof score3) //undefined
let value3=Number(score3)
console.log(typeof value3) //number
console.log(value3) //NaN

//true-->1
//false-->0

// 0 , "" (empty string) --> convert Boolean -->false
// any non-zero number,"kedar"(any non empty string) --> convert Boolean --> true

// *****************************OPERATIONS***************************************

let value5=3
let negValue=-value5
console.log(negValue)
console.log(3+2) //5
console.log(3-2) //1
console.log(3*2) //6
console.log(3**2) //9-->a**b-->a^b
console.log(3/2) //1.5
console.log(3%2)//1
console.log(2%3)//2-->a%b-->a if(a<b

let str1="hello"
let  str2="world"
let str3=str1+str2
console.log(str3) //helloworld
console.log(typeof("1"+2)) //string
console.log(1+"2")//12
console.log("1"+2+2) //122 -->string
console.log(1+2+"2")//32-->string
console.log(+true)//1
console.log(true+1)//2
console.log(+"")//0

//focus more on readability not on fancieness

let counter=100
console.log(++counter)//101
console.log(counter)//101
console.log(counter++)//101
