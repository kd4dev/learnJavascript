//singleton -->constructor-->object.creat

//object literals-->no singleton 

//key ko pc apne app string man leta he
const mySym=Symbol("key1")
const JsUser={
    name : "kedar",
    "full name":"kedar baswade",
    4 : "roasfdkn",
    age : 19,

    //mySym : "myKey1", //-->string

    [mySym] : "myKey1",  // -->symbol
    email : "kedarbajsdbka!@Ngmail.com",
    isLoggedIn : false ,
    lastLoginDays : ["Monday","Sunday"]
}

console.log(JsUser.email) // dot lagane par string dene ki jarurat nahi he
console.log(JsUser["email"]) // yaha he string ki tarah dene ki

//console.log(JsUser.full name) -->agar key me hi string ho toh ye dot wala possible hi nahi he
console.log(JsUser["full name"]) 

//console.log(typeof JsUser.mySym) //-->string
console.log(typeof mySym) //symbol
console.log( JsUser[mySym]) //myKey1


JsUser.age=20

Object.freeze(JsUser) //object frreze ho chuka he ab koi chane kiye toh bhi toh woh honge nahi

JsUser.age=32
console.log(JsUser)

/**
  {
  '4': 'roasfdkn',
  name: 'kedar',
  'full name': 'kedar baswade',
  age: 20,
  email: 'kedarbajsdbka!@Ngmail.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Sunday' ],
  Symbol(key1): 'myKey1' -->yaha hum symbol kaise dikhata he yeh bhi dekh skte he
}
 */


JsUser.greet=function(){
    console.log("Hello js user")
}

JsUser.greet2=function(){
    console.log(`Hello js user,${this.name}`)
}

//freeze ke comment hata diye he ye run krne ke liye,tab ye output aye he badme firse comment krdiya
 console.log(JsUser.greet) //[Function (anonymous)]
 console.log(JsUser.greet()) // Hello js user undefined
  console.log(JsUser.greet2) // Function (anonymous)]
 console.log(JsUser.greet2()) //  Hello js user,kedar  undefined
