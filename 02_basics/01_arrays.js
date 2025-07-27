//array
const arr=[0,1,2,3,4]
/*
in js,array are ,resizable,can contain different data types and 0-based indexing
*/

const heroes=["spider man","iron man","thor","black widow","batman"]

console.log(arr[2])

const arr2=new Array(1,2,3,4,5)

//Array methods

arr.push(6) //adds elements at end of an array
arr.pop() //delete elements at end
arr.unshift(9) // adds element at start of index
arr.shift()// removes/delete start element

console.log(arr.includes(3)) //returns boolean on the base existence of element in array
console.log(arr.indexOf("kedar")) //returns index of given element in array,if not present returns -1
console.log(arr)

const newArr=arr.join()
console.log(newArr)
console.log(typeof newArr)

const arrn1=arr.slice(1,3) //last index kabhi bhi include nahi hota he
console.log("A",arr)
console.log(arrn1)

const arrn2=arr.splice(1,3) //manipulates original array,deletes 3 elements from index 1 in original array here we are storing them in new array
console.log("B",arr)
console.log(arrn2)
