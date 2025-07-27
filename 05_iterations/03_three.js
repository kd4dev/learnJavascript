// for of

// ["", "", ""] --> Array of strings
// [{}, {}, {}] --> Array of objects

const arr = [1, 2, 3, 4, 5]

for (const i of arr) {
    // console.log(i); // --> 1 2 3 4 5
}

// --------------------------------------

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`); 
    // Output: H, e, l, l, o,  , w, o, r, l, d, !
}

// --------------------------------------

// Maps (stores key-value pairs, preserves order, no duplicate keys)

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // Duplicate key, won't be added again

// console.log(map);
// Output:
// Map(3) {
//   'IN' => 'India',
//   'USA' => 'United States of America',
//   'Fr' => 'France'
// }

for (const [key, value] of map) {
    // console.log(key, ':-', value);
    // Output:
    // IN :- India
    // USA :- United States of America
    // Fr :- France
}

// --------------------------------------

// ❌ This will throw error:
// Objects are not iterable with for...of directly
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value); 
// } 
// ❌ TypeError: myObject is not iterable
// ✅ If you want to loop over objects, use for...in or Object.entries()

for (const key in myObject) {
    console.log(`${key} :- ${myObject[key]}`);
}
// Output:
// game1 :- NFS
// game2 :- Spiderman

// ✅ Alternative using Object.entries
Object.entries(myObject).forEach(([key, value]) => {
    console.log(`${key} :- ${value}`);
});
