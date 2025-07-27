function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
    console.log(this) //createUser { username: 'chai' }
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);

/*
    Custom Notes (Easy Language):

    - SetUsername ek function hai jo username property set karta hai.
    - createUser ek constructor function hai, jo naya user object banata hai.
    - createUser ke andar SetUsername ko .call(this, username) se bulaya gaya hai,
      taki SetUsername ka 'this' wahi ho jo createUser ka 'this' hai (yaani naya object).
    - Jab bhi new createUser(...) likhte hain, ek naya object banta hai aur usme username, email, password set ho jate hain.
    - .call() ka use tab hota hai jab kisi function ko kisi specific context (this) ke saath chalana ho.
    - Is tarike se aap ek function ki properties ya logic dusre constructor me reuse kar sakte ho.
*/

// .call() kisi function ko specific 'this' value ke saath chalata hai.
// Yani, aap decide kar sakte ho ki function ke andar 'this' kis object ko point kare.

//***** * Iska use tab hota hai 
// jab aap chahte ho ki ek function kisi
//  dusre object  ke context me chale.******************//

// Example:
// SetUsername.call(this, username)
// Yaha SetUsername function ko current object (jo new createUser se bana hai) ke context me chalaya gaya hai.
// Isse SetUsername ke andar 'this.username' wahi object me set ho jata hai jo createUser bana