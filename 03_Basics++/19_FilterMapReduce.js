// Filter, Map and Reduce all returns the value.
// These 3 methods are used to minimize the work as compared to foreach loop.

// ***************** Filters ****************
// Filter uses call back function followed by "A CONDITION"; executes if true else don't

// () is used for non returning value; and {} for returning value
// This above line comes under Implicit and Explicit Return

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsFilter = numbers.filter((num) => num > 4); // or ((num) => {return num > 4}) --> Explicitly
console.log(numsFilter);

// ***************** Map ******************
// Maps are NOT followed by a condition
const numsMap = numbers.map((num) => num + 10); // or ((num) => {return num + 10}) --> Explicitly
console.log(numsMap);

// Chaning of Methods --> one method simultaneously followed by another
const numsChain = numbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);
console.log(numsChain);

// ***************** Reduce ****************
// It is used to reduce the value of an arithmetic operation
// Mainly used for calculating Shopping Cart values and all
// Example: [1, 2, 3] --> Reduced Value is = 1+2+3 = 6

const numbersArr = [1, 2, 3];
const numsReduce = numbersArr.reduce((acc, currentVal) => {
  console.log(
    `The accumulator value is ${acc} and the current value is ${currentVal}` // Just for seeing the values ; can comment
  );
  return acc + currentVal;
}, 0); // Initial Value to be given to the accumulator is 0
console.log(`The reduced value is ${numsReduce}.`);

// Shopping Cart Example
const shoppingCart = [
  {
    course: "Javascript",
    price: 2999,
  },
  {
    course: "CSS",
    price: 1999,
  },
  {
    course: "HTML",
    price: 999,
  },
  {
    course: "Java",
    price: 2499,
  },
  {
    course: "Python",
    price: 499,
  },
];
const reducedValue = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(`The total payment for Shopping Cart is ${reducedValue}.`);
