// ************************* Number *******************************
const score = 400;
console.log(score); // it just specifies the value

const balance = new Number(100); // since it's an object -- it also specifies the data type
console.log(balance);
console.log(balance.toString().length); // converts the number into string and find its length directly
console.log(balance.toFixed(2)); // converts the number in decimal form upto 2 precisions

const newNumber = 23.899;
console.log(newNumber.toPrecision(3)); // turns it into precise value starting from the start

const valueInZeros = 1000000;
console.log(valueInZeros.toLocaleString("en-IN")); // increasing the readability by placing the commas in Indian Standad

// *************************** Maths *******************************
console.log(Math); // it is an object

// Math function --> abs, ceil, floor, min, max, round, random, and many more...

console.log(Math.random()); // gives random values each time ranging from 0 to 1
console.log(Math.random() * 10 + 1); // gives random value ranging from 1 to 10
console.log(Math.floor(Math.random() * 10 + 1)); // gives random value ranging from 1 to 10 in a round off manner

// Formula for calculating random value in a certain range
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
