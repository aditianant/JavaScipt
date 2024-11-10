// Function declaration
function Func() {
  console.log("H");
  console.log("I");
  console.log("E");
}
Func(); // Func --> reference (just storing the value); () --> execution (value is called and executed)

// Function call
function addNumbers(num1, num2) {
  // Here, num1 and num2 are parameters
  console.log(num1 + num2);
}
addNumbers(12, 18); // Here, 12 and 18 are arguments

// Function returning
function addNumbersbyReturning(num1, num2) {
  // let result = num1 + num2
  // return result
  return num1 + num2; // Shortcut Way
  console.log(
    "This line will never be printed since after returning no line gets executed"
  );
}
const result = addNumbersbyReturning(12, 18);
console.log(`Result is ${result}`);

// Shopping Card function
// ... --> This is both a spread and a rest operator; just differnetiated by its use
// Rest operator(...) --> makes all the values in a bundle
function calculateCartPrice(val1, val2, ...num) {
  return num;
}
console.log(calculateCartPrice(200, 500, 800, 600, 300));

// Passing an object in a function
const obj = {
  // Object Creation (not compulsory)
  username: "Aditi",
  id: 112233,
  email: "aditi@gmail.com",
};
function passingObject(anyObject) {
  // Passing the Object
  console.log(
    `The username is ${anyObject.username} with its id ${anyObject.id} and the email is ${anyObject.email}`
  );
}
passingObject(obj); // Calling the function with giving the object as argument
/*
passingObject({             // Can pass the object value without creating an object
  username: "Aditi",
  id: 112233,
  email: "aditi@gmail.com",
});
*/

// Passing an array in a function
const arr = [100, 200, 300, 400, 500];
function passingArray(anyArr) {
  return anyArr[1];
}
console.log(`The second element of the array is ${passingArray(arr)}.`); // Calling the function
// console.log(`The second element of the array is ${passingArray([100, 200, 300, 400, 500])}.`) // Can pass an array without creating an array
