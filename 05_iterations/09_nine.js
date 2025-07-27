const myNums = [1, 2, 3]

// Normal reduce:
const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)
console.log(myTotal) // Output: 6

// Shopping cart reduce:
const shoppingCart = [
    { itemName: "js course", price: 2999 },
    { itemName: "py course", price: 999 },
    { itemName: "mobile dev course", price: 5999 },
    { itemName: "data science course", price: 12999 }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay) // Output: 22996
// reduce(accumulator, currentValue, initialValue)

// 1️⃣ `acc` → previous value ya result
// 2️⃣ `curr` → current array element
// 3️⃣ `0` → initial value of acc (important!)

// BONUS: Get list of expensive courses
const expensiveCourses = shoppingCart.filter(item => item.price > 5000)
console.log(expensiveCourses)

// BONUS 2: Breakdown with log
shoppingCart.reduce((acc, item) => {
    console.log(`Adding ${item.itemName}: ₹${item.price}`)
    return acc + item.price
}, 0)
