// If - elseif - else conditions

// Relational operators : > , < , >= , <= , == , != , ===

// Logical Operators : && , ||

// Switch - Case statements :
/* Syntax -->
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

// Falsy values --> always given false return value
// Examples: false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Surprising Truthy Values : "0", 'false', " ", [], {}, function(){}

// How to check if an object is empty
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is Empty");
}

// **************** Nullish Coalescing Operator (??) ***********************
// The above operator is used for null and undefined (not good for the code).
// It is basically used to check and give whether the value is null, undefined or a particular value.

let value;
// value = 5 ?? 10             // Output is first out of two, i.e., 5
// value = null ?? 10       // Output is 10 (in case null is given)
// value = undefined ?? 10  // Output is 10 (in case undefined is given)
value = null ?? undefined; // Output is undefined (in case both null and undefined is given)

console.log(value);

// ************************* Ternary Operator ****************************
// Short hand of if-else operator
// Syntax : condition ? true : false
const price = 80;
price >= 100
  ? console.log("Price is more than 100")
  : console.log("Price is less than 100");
