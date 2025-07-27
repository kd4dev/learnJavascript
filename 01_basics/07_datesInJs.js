let myDate = new Date(); 
console.log(myDate) 
// 👉 Output: System ke current time ke according full date-time object
// Example: Wed Jul 27 2025 20:18:10 GMT+0530 (India Standard Time)

console.log(Date) 
// 👉 Output: [Function: Date]

console.log(myDate.toString()) 
// 👉 Output: Full date-time in readable format
// Example: Sun Jul 27 2025 20:18:10 GMT+0530 (India Standard Time)

console.log(myDate.toDateString()) 
// 👉 Output: Date only → Example: Sun Jul 27 2025

console.log(myDate.getTime()) 
// 👉 Output: Milliseconds since Jan 1, 1970 (Unix Epoch)

console.log(myDate.getFullYear()) 
// 👉 Output: 2025

console.log(myDate.getMonth()) 
// 👉 Output: 6 (July → 0-based index)

console.log(myDate.getDate()) 
// 👉 Output: 27

console.log(myDate.getHours()) 
// 👉 Output: System ke current hour (0–23)

console.log(myDate.getMinutes()) 
// 👉 Output: System ke current minutes

console.log(myDate.getSeconds()) 
// 👉 Output: System ke current seconds

console.log(myDate.getMilliseconds()) 
// 👉 Output: Milliseconds part of current time

console.log(typeof myDate) 
// 👉 Output: "object"

//  Date object ka output system ki current date/time par depend karta hai


let createMyDate = new Date(2006, 1, 28) 
// 0-based month → 1 = February
console.log(createMyDate.toDateString()) 
// 👉 Output: Tue Feb 28 2006

let createMyDate2 = new Date("2006-02-28") 
// Month yaha 1-based hota hai (February = 02)
console.log(createMyDate2.toDateString()) 
// 👉 Output: Tue Feb 28 2006

let myTimeStamp = Date.now()
console.log(myTimeStamp) 
// 👉 Output: Milliseconds from Jan 1, 1970 to now

console.log(createMyDate.getTime()) 
// 👉 Output: Milliseconds from Jan 1, 1970 to Feb 28, 2006

console.log(Math.floor(Date.now() / 1000)) 
// 👉 Output: Seconds from Jan 1, 1970 to now

let newDate = new Date()
// `${newDate.getDay()} and the month is ${newDate.getMonth()}`
newDate.toLocaleString('default', {
    weekday: "long"
}) 
// 👉 This returns the localized weekday string (like "Sunday") but you're not printing it.
// 🔥 Extra Tips:

// Getting full formatted date & time:
let now = new Date();
console.log(now.toLocaleString()); 
// 👉 Output: formatted date+time based on local settings

// Getting only date:
console.log(now.toLocaleDateString()); 
// 👉 Example: 27/7/2025

// Getting only time:
console.log(now.toLocaleTimeString()); 
// 👉 Example: 8:23:45 PM

// Custom format (weekday, month, date):
console.log(now.toLocaleString('en-IN', {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric"
})); 
// 👉 Example: Sunday, Jul 27, 2025

// Day of week (0 = Sunday, 6 = Saturday)
console.log(now.getDay()); 

// Setting a specific date:
let custom = new Date();
custom.setFullYear(2030);
custom.setMonth(0); // January
custom.setDate(15);
console.log(custom.toDateString()); // 👉 Mon Jan 15 2030
