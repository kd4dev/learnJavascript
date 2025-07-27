// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values); // undefined (forEach kuch return nahi karta)

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )
// console.log(newNums) // [5,6,7,8,9,10]

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )
// console.log(newNums); // [5,6,7,8,9,10]

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// Filter all books with genre 'History'
let userBooks = books.filter( (bk) => bk.genre === 'History')
// Output: Book Three, Book Seven

// Now filter with publish >= 1995 and genre 'History'
userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks);
// Output: [{ title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 }]
// filter() → returns a **new array** with elements that pass the test
// Always returns something, unlike forEach which returns undefined

// forEach vs filter:
const arr = [1, 2, 3, 4, 5]

const a = arr.forEach((num) => {
  return num > 2
})
console.log(a) // undefined

const b = arr.filter((num) => {
  return num > 2
})
console.log(b) // [3,4,5]

// Good rule: filter = jab result chahiye; forEach = jab sirf loop chahiye
