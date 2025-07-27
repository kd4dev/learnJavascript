const accountId = 24456; //not allowed to change
let accountEmail = "hitesh@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

//accountId=2 -->not allowed to change

accountEmail = "kedar@google.com";
accountPassword = "9999";
accountCity = "nanded";

console.log(accountId);

console.table([accountEmail, accountPassword, accountCity, accountState]);

/*
prefer not  to use var beacuase
 of issue in block and functional scope
*/
