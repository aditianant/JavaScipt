// ******** Immediately Invoked Function Expressions (IIFE) ***********
// We make a total different socpe so that it does not get polluted/ mixed with Global scope
// IIFE is to immediately execute the function
// Syntax : ()() ; () --> reference/ function definition ; () --> call/ function execution

// Named IIFE ;
(function fun() {
  console.log("Database Connected by IIFE");
})(); // Here, semicolon is important to end the first function

// Unnamed IIFE ;
// IIFE by using Arrow function
(() => {
  console.log("Database Connected by IIFE using Arrow function");
})();

// IIFE by using Arrow function -- passing arguments and parameters
((name) => {
  console.log(`Database Connected by IIFE using Arrow function by ${name}`);
})("Aditi");
