//const user=new Object() -->empty object but singleton

const user={} // -->empty object but non singleton

user.id="123abc"
user.name="kedar"
user.isLoggedIn="false"


console.log(user)

const regularUser={
    email :"kedasia@gmail.com",
    fullname:{
        userfullname:{
            firstName: "soham",
            lastName: "pawade" 
        }
    }
}

console.log(regularUser.fullname.userfullname.lastName)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

const obj3={obj1,obj2} //it will not merge it,-->{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
console.log(obj3)

const obj4=Object.assign({},obj1,obj2)   // {target,source} ab empty target me dono object ke ayenge as keys not as object
console.log(obj4) //-->{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }  obj4 aur {} --> '=== itne equal he

const obj5={...obj1,...obj2} //kardo spread,lelo glasss aur krdo break-->mostly used

console.log(obj5) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

console.log(Object.keys(user)) //typeof array of keys of given object--[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(user)) //typeof array of values of corresponding keys of given object-->[ '123abc', 'kedar', 'false' ]
console.log(Object.entries(user))//typeof array of key-value pair as element-->[ [ 'id', '123abc' ], [ 'name', 'kedar' ], [ 'isLoggedIn', 'false' ] ]
console.log(Object.hasOwnProperty('isLoggedIn'));// returns boolean based on is this key avialable in your object

const course={
    coursName:"learn javascript",
    price:"free",
    courseInstructor:"Hitesh Choudhary"
}

const{courseInstructor:kd}=course//sntatical sugar-->course.courseInstructor ye har bar likhna nahi padega aaab
//it is called as object de-structure

//console.log(courseInstructor) //Hitesh Choudhary :kd nahi kiya toh ye nahi chalega,agar :kd nahi use kiya toh har bar bina object ke use kar skte he par
//aur chote syntax me kr skte he toh kyu na kare
console.log(kd)//Hitesh Choudhary


//pehle api se data xml format me ata tha,ab json me ata he
//************json**************** */
// {
//     "name":"kedar",
//     "courseName":"learn dsa",
//     "price": "free",
// }

//generally object jaise hi hota he par name nahi hota object ka aur keys bhi strings me hi hoti he,values me numbers and booleans nahi ate string me
//kabhi kabhi object ke array bhu ate he

// [
//     {},
//     {},
//     {}
// ]