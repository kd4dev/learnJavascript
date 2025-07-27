const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    // Output:
    // js shortcut is for javascript
    // cpp shortcut is for C++
    // rb shortcut is for ruby
    // swift shortcut is for swift by apple
}

// -----------------------------------------------------

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
    // key = 0,1,2,3,4 (indexes)
    // Output:
    // js
    // rb
    // py
    // java
    // cpp
}

// -----------------------------------------------------

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // duplicate key ignored

for (const key in map) {
    console.log(key);
    // ❌ No output — Map is not iterable with for...in
}
// ✅ for...in works only on objects and arrays
// ❌ for...in doesn't work on Map (it’s not enumerable like objects)

map.forEach((value, key) => {
    console.log(`${key} :- ${value}`);
});
// Output:
// IN :- India
// USA :- United States of America
// Fr :- France
