const user = {
  userName: "kedar",
  price: 3545,
  welcomeMessage: function(){
    console.log(`${this.userName} you are great`)
    console.log(this)
    /*
  {
    userName: 'kedar',
    price: 3545,
    welcomeMessage: [Function: welcomeMessage]
  }
    */
  }
}
user.welcomeMessage()//kedar
user.userName="kd"
user.welcomeMessage()//kd 
//this gives context context change hogaya,harcoded cheese ko htane ke liye this use hota he

console.log(this)
/**
{
  userName: 'kd',
  price: 3545,
  welcomeMessage: [Function: welcomeMessage]
}
 */
console.log(this)//{}

//pr ye brower me window object ko point karega
//kyuki browser me sabse global object window hi he

function one(){
  console.log(this)
}
one()

// <ref *1> Object [global] {
//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     Symbol(nodejs.util.promisify.custom): [Getter]
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     Symbol(nodejs.util.promisify.custom): [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Function: structuredClone],
//   atob: [Function: atob],
//   btoa: [Function: btoa],
//   performance: [Getter/Setter],
//   fetch: [Function: fetch],
//   crypto: [Getter],
//   navigator: [Getter]
// }

function two(){
  const userasm="kedar"
  console.log(this.userasm) //yaha undefined ayega 
  console.log(this) // yaha bada kuch ayega

}
two()

const twooo=() => {  //arrow function
  const userasm="kedar"
  console.log(this.userasm) //yaha undefined ayega 
  console.log(this) // {}
}
twooo()


// arrow function me implidit return bhi hota he jab hamko ek hi line return krni ho braces hata do return hata do bas jo return krna he woh likh do,par parenthesis ke andar

const afdscxm=(num1,num2) => (num1+num2)