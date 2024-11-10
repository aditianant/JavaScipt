// {} --> Scope (everything in particular should be included in a scope)

let a = 100; // Global scope --> access anywhere

// Local Scope --> access only inside that specific block
if (true) {
  let a = 10;
  const b = 20;
  var c = 30; // var is not good --> since it goes out of scope
  console.log("Inner Block Value: ", a); // Only printed of inside the block (Local scope)
}
// console.log(a)      // it will throw an error
// console.log(b)      // it will throw an error
console.log(c); // it will not throw an error --> not good since coming out of scope

console.log("Outer Block Value: ", a); // Printed of global scope

// **************** Scope and Mini Hoisting *****************
// DOM : Document Object Mode --> how to manipulate HTML Webpage through Javascript

// Nested Scopes
function outer() {
  // Second
  const name = "Aditi"; // Third
  function inner() {
    // Fifth
    const email = "aditi@google.com"; // Sixth
    console.log(name); // Seventh
  }
  // console.log(email)     // This will throw an error because it is out of inner scope
  inner(); // Fourth
}
outer(); // First line to be executed

// General function declaration
function addOne(num) {
  return num + 1;
}
console.log(addOne(5));

// Function declaration as expression
const addTwo = function (num) {
  return num + 2;
};
console.log(addTwo(5));
