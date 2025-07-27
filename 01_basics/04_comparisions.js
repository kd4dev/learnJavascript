console.log(2 > 1)       // 👉 true
console.log(2 >= 1)      // 👉 true
console.log(2 < 1)       // 👉 false
console.log(2 == 1)      // 👉 false
console.log(2 != 1)      // 👉 true
console.log(123)         // 👉 123

// when you compare make sure both have same data types
// sometimes javascript behave differently

console.log(null > 0)    // 👉 false
console.log(null == 0)   // 👉 false
console.log(null >= 0)   // 👉 true
// Explanation:
// null >= 0 --> true because null gets converted to 0
// but null > 0 is false, weird JS behavior due to abstract comparison

console.log(undefined > 0)    // 👉 false
console.log(undefined == 0)   // 👉 false
console.log(undefined >= 0)   // 👉 false
// Explanation:
// undefined when compared numerically results in false
// and it's not equal to 0

// === --> strict check, check data type and value also
// == --> only value (type coercion may happen)
console.log("2" == 2)     // 👉 true  (type conversion: "2" → 2)
console.log("2" === 2)    // 👉 false (different types: string !== number)

// 🔥 Extra Points:

// true and false comparisons
console.log(true == 1);   // 👉 true
console.log(false == 0);  // 👉 true
console.log(true === 1);  // 👉 false

// NaN is never equal to anything, even itself
console.log(NaN == NaN);  // 👉 false
console.log(isNaN(NaN));  // 👉 true

// Comparing objects always checks reference
console.log({} == {});    // 👉 false
console.log([] == []);    // 👉 false

// Weird but true:
console.log(" " == 0);    // 👉 true (empty space string becomes 0)
