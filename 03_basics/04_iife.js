//imediately invoked function expression(IIFE)

(function one() {
  console.log("DB connected");
})();

//used for -->global variables ke pollution se bachane ke liye use hota he
// imediately execute ho jata he
//()-->banane ke liye
//()-->call ke liye

(
  () => {
    console.log("DB connected");
  }) ();


  //kabhi kabhi ; lagake dekho code me error ata he toh
