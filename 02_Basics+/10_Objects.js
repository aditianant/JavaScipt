// Literal Objects, Constant Objects, and Singleton Objects (when made through Constructors)
// Singleton Objects are not made through literals; only through constructors

// Object.create(); // Creation of an object (comes under singleton)

// Declaration of an object through literals --> Always key : value pairs
const mySym = Symbol("key"); // Initialising the symbol since symbols should always be declared beforehand
const user = {
  name: "Aditi",
  fullname: "Aditi Anant",
  [mySym]: "myKey", // It should be enclosed in big brackets; else treated as string
  age: 21,
  email: "aditi@google.com",
  isLoggedIn: false,
  lastLogin: ["Saturday", "Wednesday"],
};

console.log(user.name); // Not for every key : value pair
console.log(user["name"]);
console.log(user["fullname"]);
console.log(user[mySym]);

user.email = "aditi@microsoft.com"; // The email is modified of that obejct
console.log(user);

// Object.freeze(user); // No more modifications will be allowed in that object
// user.email = "aditi@edge.com"; // No error but no change also
// console.log(user);

// Creating a function inside the object
user.greeting = function () {
  console.log("Greeting from the User!");
};
user.greeting();

// This keyword is used to call any object which is present in the code --> here 'user' object
user.SecondGreeting = function () {
  console.log(
    `Greeting from the User, ${this.name} whose email id is ${this.email}`
  );
};
user.SecondGreeting();

const instaUser = new Object(); // Singleton Object
// const instaUser={}      // Non-Singleton Object

instaUser.name = "Aditi";
instaUser.id = "adiitiianant";
instaUser.isLoggedIn = false;
console.log(instaUser);

// Important attributes --> used most widely
console.log(Object.keys(instaUser)); // for making an array of all the keys
console.log(Object.values(instaUser)); // for making an array of all the values
console.log(Object.entries(instaUser)); // for making an array of all the entries (array in an array)

console.log(instaUser.hasOwnProperty("isLoggedIn")); // checks if the mentioned property is present or not

// Objects inside an object
const regularUser = {
  email: "someone@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Antony",
      lastname: "Karashe",
    },
  },
};
console.log(regularUser.fullname.userfullname);

// Merging of objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };
// const obj4={obj1, obj2}    // Not prefered
// const obj4=Object.assign ({}, obj1, obj2, obj3) // {} --> target ; rest --> sources ; hence in the target/empty object all the merged will be stored
const obj4 = { ...obj1, ...obj2, ...obj3 }; // Most prefered way --> Spreading (as in arrays)
console.log(obj4);

// In the database, an "array of objects" are there. Example --> const users[{},{}]

// Destructuring of objects
const course={
  subject:"Javascript",
  price:0,
  instructor:"Coder"
}
// console.log(course.instructor) // Repeated and Lengthy Way
const {instructor: ins}= course // Destructuring
console.log(ins)

//JSON API --> how the backend data come and is treated
/*
{
  "name":"Aditi Anant",
  "id": "1122aa",               
  "subject":"JavaScript"
}
or an array of objects without a variable name is also treated as JSON API
[
  {},{},{}
]
  */