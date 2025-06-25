console.log(2>1)
console.log(2>=1)
console.log(2<1)
console.log(2==1)
console.log(2!=1)
console.log(123)

//when you comapre make sure both have same data types
//sometimes javascript behave differently

console.log(null>0) //false
console.log(null==0)//false
console.log(null>=0)//true

console.log(undefined>0) //false
console.log(undefined==0)//false
console.log(undefined>=0)//false

// === -->strict check,check data type and value also
//== -->only value
console.log("2"==2)//true
console.log("2"===2)//false
