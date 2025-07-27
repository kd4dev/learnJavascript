const marvelHeroes=["spider man","iron man","thor"]
const dcHeroes=["batman","superman","flash"]

marvelHeroes.push(dcHeroes)
console.log(marvelHeroes) // as last element push hogaya par add nah hue
console.log(marvelHeroes[3]) //["batman","superman","flash"]
console.log(marvelHeroes[3][1]) //"superman"
marvelHeroes.pop()

// const all=marvelHeroes.concat(dcHeroes)
// console.log(all)
const all=[...marvelHeroes,...dcHeroes] // [ 'spider man', 'iron man', 'thor', 'batman', 'superman', 'flash' ]
console.log(all)

const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realAnotherArray=anotherArray.flat(Infinity)
console.log(realAnotherArray) //[1, 2, 3, 4, 5,  6, 7, 6, 7, 4,  5]

console.log(Array.isArray("kedar")) //checks if given element is an array
console.log(Array.from("kedar")) //converts given element into an array-->[ 'k', 'e', 'd', 'a', 'r' ]

console.log(Array.from({name:"kedar"})) //interesting-->return empty array
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3)) //Returns a new array from a set of elements.



