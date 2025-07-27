// const user = new Object() → singleton object
const user = {} // 👉 empty object (non-singleton)

user.id = "123abc"
user.name = "kedar"
user.isLoggedIn = "false"

console.log(user)
// 👉 Output: { id: '123abc', name: 'kedar', isLoggedIn: 'false' }

const regularUser = {
    email: "kedasia@gmail.com",
    fullname: {
        userfullname: {
            firstName: "soham",
            lastName: "pawade"
        }
    }
}

console.log(regularUser.fullname.userfullname.lastName)
// 👉 Output: "pawade"

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

const obj3 = { obj1, obj2 }
// 👉 Nested objects, not merged
// Output: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
console.log(obj3)

const obj4 = Object.assign({}, obj1, obj2)
// 👉 Merges obj1 & obj2 into empty target {}
console.log(obj4) 
// 👉 Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj5 = { ...obj1, ...obj2 }
// 👉 Spread operator: clean merge
console.log(obj5) 
// 👉 Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

console.log(Object.keys(user))
// 👉 Output: [ 'id', 'name', 'isLoggedIn' ]

console.log(Object.values(user))
// 👉 Output: [ '123abc', 'kedar', 'false' ]

console.log(Object.entries(user))
// 👉 Output: [ ['id','123abc'], ['name','kedar'], ['isLoggedIn','false'] ]

console.log(user.hasOwnProperty('isLoggedIn'))
// 👉 true → key present in object

const course = {
    coursName: "learn javascript",
    price: "free",
    courseInstructor: "Hitesh Choudhary"
}

const { courseInstructor: kd } = course
// 👉 Destructuring → course.courseInstructor ab nahi likhna padega
console.log(kd)
// 👉 Output: "Hitesh Choudhary"


// JSON → JavaScript Object Notation
// Valid JSON format:
/*
{
  "name": "kedar",
  "courseName": "learn dsa",
  "price": "free"
}
*/

// 👉 JSON me key hamesha string hoti hai (double quotes ""), value mostly string, number, boolean

// JSON array of objects example:
/*
[
  { "id": 1, "name": "user1" },
  { "id": 2, "name": "user2" },
  { "id": 3, "name": "user3" }
]
*/
// Object.freeze() → object lock (modification nahi hota)
// Object.seal() → update ho sakta hai, par add/remove nahi
// Object.hasOwnProperty() → inherited keys ko ignore karta hai

// JSON.parse() → JSON string ko JS object me convert karta hai
const jsonString = '{"name":"kedar", "age":19}'
const jsObj = JSON.parse(jsonString)
console.log(jsObj.name) // 👉 "kedar"

// JSON.stringify() → JS object ko JSON string me convert karta hai
const str = JSON.stringify(jsObj)
console.log(str) // 👉 '{"name":"kedar","age":19}'
