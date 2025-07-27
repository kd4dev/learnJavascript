// switch (key) {
//     case value:
        // code block
//         break;
//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;
    default:
        console.log("default case match");
        break;
}

// 👉 Output: march
// Explanation:
// The value of `month` is "march", so that case runs, and the `break` prevents fall-through.
// If no case matches, `default` block runs.

// ----------------------------------------
// 🔁 Without break, it will fall through:
const fruit = "apple"

switch (fruit) {
    case "apple":
        console.log("This is apple"); // 👉 Runs
    case "banana":
        console.log("This is banana"); // 👉 Also runs (fall-through)
    default:
        console.log("Unknown fruit"); // 👉 Also runs
}
// Output:
// This is apple
// This is banana
// Unknown fruit

// ----------------------------------------
// ✅ Fixed version with break:
switch (fruit) {
    case "apple":
        console.log("This is apple"); // 👉 Runs
        break;
    case "banana":
        console.log("This is banana");
        break;
    default:
        console.log("Unknown fruit");
        break;
}
// Output:
// This is apple

// switch is good when you have multiple fixed values to check.

// Always use break to prevent fall-through (unless intentionally done).

// Works well with string and number (not boolean or object).

// default is like else — catches unmatched cases.