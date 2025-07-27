//js is dynamically typed,their is no type safety as typescript
//primitive-->passed by values
//String,Number,Boolean,null,undefined,Symbol,Bigint

const id=Symbol('123')
const anotherId=Symbol('123')

//non-primitive-->passed by reference
//Array,Objects,Functions
const heroes=["spider man","iron man","thor"]
let myObj={
    name:"kedar",
    age:19
}

const myFunction=function(){
    console.log("hello world")
}

/* Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

 Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object           */


       /*********************************************************************************** */

       //stack meomery(primitive) 
       // heap meomery(non-primitive)