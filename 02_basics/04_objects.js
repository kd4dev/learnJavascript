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