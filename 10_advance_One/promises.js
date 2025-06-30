const promiseOne = new Promise(function (resolve, reject) {
  //Do asynch task
  //DB calls,cryptography,network
  setTimeout(function () {
    console.log("asynch task is completed");
    resolve(); //ye nahi likha hota toh promises consumed kabhi nahi chalta,ye likhne se ye then ke sath connect hoga
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("asynch task2 is completed");
    resolve();
  }, 1000);
}).then(function () {
  console.log("promse 2 is consumed");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "chai", email: "chai@example.com" }); //resolve ke andar ka parameter apne ap then ke pass chala jayega
  }, 1000);
});

promiseThree.then(function (user) {
  //ye  resolve ne bheja hua data he,yahi print hoga terminal me
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "kedar", password: "pass@123" });
    }
     else {
      reject("ERROR:Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(()=>console.log("The promise is either resolved or rejected"))


  const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "Javascript", password: "pass@123" });
        }
        else {
            reject("ERROR:JS went wrong");
        }
  }, 1000);
  })

  async function consumePromiseFive(){

    try {
        const response=await promiseFive
        console.log(response)        
    }
     catch (error) {
        console.log(error)
    }
  }
  consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         const data=await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log(`kuch toh gadbad he re${error}`)
//     }
// }

//getAllUsers()

// fetch('https://jsonplaceholder.typicode.com/users') ///isme await ye sab krne ki jarurat nahi he dusra then tabhi run hota he jab pehla khatam hota he
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((error) => console.log(error))

fetch('https://api.github.com/users/kd4dev') ///isme await ye sab krne ki jarurat nahi he dusra then tabhi run hota he jab pehla khatam hota he
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error) => console.log(error))


