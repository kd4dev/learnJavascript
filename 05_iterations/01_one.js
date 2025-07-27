const arr = [1, 2, 3, 24, 43534, 12]

for(let i = 0; i < 6; i++){
    console.log(arr[i]) 
    // ✅ Output:
    // 1
    // 2
    // 3
    // 24
    // 43534
    // 12
}

// ----------------------------------------

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number"); // uncomment to print
    }
    // console.log(element); // prints numbers 0 to 10
}

// console.log(element); ❌ Error: element is not defined (because it's block scoped)

// ----------------------------------------

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and outer loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i * j);
        // ✅ Output: multiplication table
    }
}

// ----------------------------------------

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length); // ✅ Output: 3

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element); // ✅ Output: flash, batman, superman
}

// ----------------------------------------

// break example: stops when 5 is found
/*
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
    console.log(`Value of i is ${index}`);
}
// ✅ Output:
1
2
3
4
Detected 5
*/

// continue example: skips when 5 is found

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${index}`);
}
/*
✅ Output:
Value of i is 1
Value of i is 2
Value of i is 3
Value of i is 4
Detected 5
Value of i is 6
...
Value of i is 20
*/
// for...of loop (array specific)
for (let item of myArray) {
    console.log(item)
}
// ✅ Output: flash batman superman

// for...in loop (for objects or array index keys)
for (let index in myArray) {
    console.log(index, myArray[index])
}
// ✅ Output:
// 0 flash
// 1 batman
// 2 superman

// Infinite loop warning (never run this)
// for(;;){ console.log("infinite") }

