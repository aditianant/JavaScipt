console.log("2" > 1); // true --> since JS automatically changes the datatype from string to integer
// typescript doesn't allow this

// These below commands (of null and undefined) are not preferable
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true --> since null is treated as any number from 0 to above

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

// "===" --> They are strict checks -- compares both the value and the datatype
console.log("2" === 2); // false -- bcz of data type

// "==" --> They are just checks -- converts the data type according to the value

// ************************** Memory ****************************
// Stack --> on Primitive Data Types -- variable makes a copy of itself
// Heap --> on Non-Primitive Data Types -- variable makes a reference (change in original value)

// Stack Memory --> on primitives
let name1 = "khush";
let name2 = name1;
name2 = "Aditi";

console.log(name1); // Here, the copy of name1 is created; that's why it's not changed after storing in name2
console.log(name2);

// Heap Memory --> on objects
let user1 = {
  email: "khush@google.com",
  upi: "khush@ybl",
};
let user2 = user1;
user2.email = "aditi@google.com";

console.log(user1.email); // Here, the same refernce is taken; that's why its changed after storing in user2
console.log(user2.email);
