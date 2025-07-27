const coding = ["js", "ruby", "java", "python", "cpp"]

// callback functions don't have their name

coding.forEach( function (val){
    console.log(val);
    // Output: js, ruby, java, python, cpp
} )

coding.forEach( (item) => {
    console.log(item);
    // Output: js, ruby, java, python, cpp
} )
 
function printMe(item){
    console.log(item);
    // Output: js, ruby, java, python, cpp
}

coding.forEach(printMe)

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
    // item -> current value
    // index -> current index
    // arr -> full array
    // Output example: js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    // Output: javascript, java, python
} )
// forEach loop return nahi karta — undefined hi deta hai
const result = coding.forEach((item) => item)
console.log(result); // undefined

// forEach sirf value access karne ke liye use hota hai
// agar transformation chahiye ho toh map(), filter(), reduce() use karo
