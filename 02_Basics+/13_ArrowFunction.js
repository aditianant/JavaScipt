// *************************** This Keyword *************************
// This keyword is used for current context
const user = {
  username: "adiitii",
  email: "aditi@gmail.com",
  welcomeMessage: function () {
    console.log(`${this.username}, Welcome to the Website!`);
    console.log(this); // Here, this comes in the context of user object
  },
};
user.welcomeMessage();
console.log(this); // Here, this comes in the context of empty object

// In windows inspect console; this comes in the context of Window object (since JS is attached with Windows)

// This keyword cannot be called inside a function; only in an object
function func() {
  let username = "adiitii";
  console.log(this.username); // Output as undefined
}
func();
// OR
const fun = function () {
  let username = "adiitii";
  console.log(this.username);
};
fun();

// ************************* Arrow Function ********************
// Syntax : () => {}
//          const varName = () => {}
//          const varName = (num1, num2) => {}
const arrow = () => {
  let username = "adiitii";
  console.log(this.username); // Output is undefined
  console.log(this); // Output is empty obejct, i.e., {}
};
arrow();

// Implicit Return of Arrow Function --> assumption, in same line, and NO use of return statement
// While using {} use return statement ; and without return statement use ()
const addNumImplicitly = (num1, num2) => num1 + num2;
console.log(addNumImplicitly(12, 18));

const objectImplicitly = () => ({ username: "adiitii" });
console.log(objectImplicitly());

// Explicit Return of Arrow Function --> use of return statement
const addNumExplicitly = (num1, num2) => {
  return num1 + num2;
};
console.log(addNumExplicitly(12, 18));
