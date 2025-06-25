let myDate = new Date(); 
console.log(myDate) // Output: Wed Jun 25 2025 18:30:00 GMT+0530 (India Standard Time) [actual output system time par depend karega]
console.log(Date) // Output: [Function: Date]
console.log(myDate.toString())//Wed Jun 25 2025 20:18:10 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()) //Wed Jun 25 2025
console.log(myDate.getTime()) // Output: milliseconds since Jan 1, 1970 (Unix Epoch)
console.log(myDate.getFullYear()) // Output: 2025
console.log(myDate.getMonth()) // Output: 5 (June, 0-based index)
console.log(myDate.getDate()) // Output: 25
console.log(myDate.getHours()) // Output: 18 (ya system ke hisab se)
console.log(myDate.getMinutes()) // Output: 30 (ya system ke hisab se)
console.log(myDate.getSeconds()) // Output: 0 (ya system ke hisab se)
console.log(myDate.getMilliseconds()) // Output: 0 (ya system ke hisab se)
console.log(typeof myDate) // Output: object

//  Date object ka output system ki current date/time par depend karta


let createMyDate=new Date(2006,1,28)
console.log(createMyDate.toDateString())//Tue Feb 28 2006
let createMyDate2=new Date("2006-02-28")//yaha 0 based nahi he,months ki
console.log(createMyDate2.toDateString())//Tue Feb 28 2006

let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(createMyDate.getTime())

console.log(Math.floor(Date.now()/1000)) //in second from 1970 to now

let newDate=new Date()
//`${newDate.getDay()} and the month is ${newDate.getMonth()}`
newDate.toLocaleString('default',{
    weekday:"long"
})