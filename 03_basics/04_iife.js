// Immediately Invoked Function Expression (IIFE)

(function one() {
  console.log("DB connected");  // 👉 Output: DB connected
})();

// IIFE is used to avoid polluting the global scope
// It gets executed immediately after creation
// First () → defines the function
// Second () → calls it

(
  () => {
    console.log("DB connected");  // 👉 Output: DB connected
  }
)();

// ⚠️ Note: If you don’t put a semicolon (;) before an IIFE, and the line above ends in a function or object expression,
// it can cause unexpected behavior or syntax error — because JS might try to merge lines.

// Named IIFE
(function printName() {
  console.log("My name is Kedar");
})(); // 👉 My name is Kedar

// Unnamed IIFE (anonymous)
(() => {
  console.log("This runs instantly");
})(); // 👉 This runs instantly

// IIFE with parameters
((name) => {
  console.log(`Welcome, ${name}`); 
})("Kedar"); // 👉 Welcome, Kedar

// Why IIFE?
// ✅ Prevent variable leakage in global scope
// ✅ Useful in module patterns before ES6 introduced import/export

// Example: Variable isolation
(function(){
  var temp = "secret";
  console.log("Inside IIFE:", temp); // 👉 Inside IIFE: secret
})();
// console.log(temp); // ❌ ReferenceError: temp is not defined
