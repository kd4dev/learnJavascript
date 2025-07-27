// PROMISE BASICS
const promiseOne = new Promise(function (resolve, reject) {
  // Simulate async task
  setTimeout(function () {
    console.log("asynch task is completed");
    resolve(); // Without this, .then() won't run
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise consumed"); // Triggered after resolve()
});

// Inline promise without variable
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("asynch task2 is completed");
    resolve(); // Will be consumed below
  }, 1000);
}).then(function () {
  console.log("promse 2 is consumed");
});


// PROMISE THAT RETURNS DATA
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "chai", email: "chai@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user); // Output: { username: "chai", email: "chai@example.com" }
});


// PROMISE WITH CONDITION + CHAINING
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "kedar", password: "pass@123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user); // First then
    return user.username;
  })
  .then((username) => {
    console.log(username); // Second then
  })
  .catch(function (error) {
    console.log(error); // Only if reject is called
  })
  .finally(() => console.log("The promise is either resolved or rejected"));


// ASYNC/AWAIT WITH TRY-CATCH
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Javascript", password: "pass@123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error); // Handles error like .catch()
  }
}
consumePromiseFive();


// FETCH USING ASYNC/AWAIT
async function getAllUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json(); // Convert stream to object
    console.log(data);
  } catch (error) {
    console.log(`kuch toh gadbad he re ${error}`);
  }
}
// getAllUsers(); // Uncomment to call


// FETCH USING THEN-CHAINING
fetch('https://api.github.com/users/kd4dev')
  .then((response) => {
    return response.json(); // Converts response to usable object
  })
  .then((data) => {
    console.log(data); // Final data from API
  })
  .catch((error) => console.log(error));
new Promise((resolve, reject) => {
  resolve("Step 1 done");
})
.then((res) => {
  console.log(res); // Step 1 done
  return "Step 2 done";
})
.then((res) => {
  console.log(res); // Step 2 done
  return "Step 3 done";
})
.then((res) => {
  console.log(res); // Step 3 done
});
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(1000)
  .then(() => {
    console.log("1 second passed");
    return delay(2000);
  })
  .then(() => {
    console.log("2 more seconds passed");
  });
async function loadUser() {
  try {
    const response = await fetch("https://api.github.com/users/octocat");
    if (!response.ok) throw new Error("Network response failed");
    
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error("API call failed:", err.message);
  }
}
loadUser();
const fetchGitUser = () =>
  fetch("https://api.github.com/users/kd4dev")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error("Something went wrong:", err));

fetchGitUser();
Promise.resolve("Hello")
  .then((res) => {
    console.log(res); // Hello
    return 42; // Still works even if it's not a promise
  })
  .then((num) => {
    console.log(num); // 42
    return new Promise((res) => setTimeout(() => res("Waited!"), 1000));
  })
  .then((msg) => console.log(msg)); // Waited!
