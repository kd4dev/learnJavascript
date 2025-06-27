function sayMyname(){
    console.log("k")
    console.log("e")
    console.log("d")
    console.log("a")
    console.log("r")
}

sayMyname() 

function addTwo(number1 ,number2){  // parameters-->definition ke time par
    console.log( number1+number2)
}

addTwo(3,4) //arguments-->calling ke time par

function addNumbers(number1,number2){
    let result=number1+number2
    return result;    
}

//return ke baad function khatam,return ke baad ka kuch bi execute nahi hota

const k=addNumbers(234,234)
console.log(k)


function loggedInUser(userName){
    return `${userName} just logged in`
}

console.log(loggedInUser("kedar")) //koi argument hi nahi deta toh undefined ata


//"",0,undefined,empty strings are considered false

function loggedInUser2(userName="kd"){  //koi value nai di toh kd lega apne app di toh override ho jayega,aur jo diya he woh lega kd nai lega 
    return `${userName} just logged in`
}

console.log(loggedInUser2())//kd

console.log(loggedInUser2("kedar"))//kedar


function calculateCartPrice(...num1){
    return num1
}

//  ... -->called rest 

console.log(calculateCartPrice(200,300,4000))


function calculateCartPrice2(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice2(20,12,213,0,300,4000)) //[ 213, 0, 300, 4000 ]

const user={
    name:"kedar",
    pass:123
}

function any(anyObject){
    console.log(`username is${anyObject.name} and password is ${anyObject.pass}`)  //koi spellino mistake can cause undefined 
}


any(user)
any({
    name:"kedar",
    pass:123
})
//same output

//same for array,and passing array to function 