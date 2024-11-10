// **************** For of loop *******************
// No initialization of initial value
// For of loops works for arrays and maps
const arr = ["A", "B", "C", "D"];
for (const i of arr) {
  console.log(`The value of i is ${i}`);
}
const greetings = "Hello Guys!";
for (const greet of greetings) {
  console.log(`Each character is ${greet}`);
}

// ********************* Maps *****************
// It is an object which holds key-value pairs.
// It is known for only unique values; and not duplicate values
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India"); // It won't be repeated since Map is used.
console.log(map);

// Running Map in a forof loop
for (const [key, value] of map) {
  console.log(key, ":-", value);
}

// Running object in a forof loop --> "Not possible"
/*
const myObject={
    'game1':'NFS',
    'game2':'Purble Palace'
}
for (const [key, value] of myObject) {
    console.log(key, ':-', value)
}
*/

// ******************** For in loop *********************
// For in loops works for objects --> it gives both key and value
const shortcutObj = {
  js: "Javascript",
  css: "Cascading Style Sheet",
  html: "Hyper TExt MArkup Language",
  cpp: "C++",
};
for (const key in shortcutObj) {
  console.log(`${shortcutObj[key]} shortcut is ${key}.`);
}

// forin loop also works for arrays (for only value) --> it gives only value
const progLangArr = ["JS", "CSS", "HTML", "CPP", "JAVA"];
for (const key in progLangArr) {
  console.log(`The programming language is ${progLangArr[key]}.`);
}

// Higher Order Loop --> foreach loop

// ******************** For each loop *********************
// Call back function does not have a name.
// Foreach loop mainly works for arrays.

const progArr = ["Java", "C", "C++", "Python", "Ruby"];
progArr.forEach(function (name) {
  // Here, the function is a call back function with no name.
  console.log(name);
});

// Using arrow function
progArr.forEach((item) => {
  console.log(item);
});

// Passing the function using foreach loop
function printing(value) {
  console.log(value);
}
progArr.forEach(printing); // Not executing the function (since not using()), just referencing it

// Accessing the whole array in foreach loop
progArr.forEach((item, index, progArr) => {
  console.log(item, index, progArr);
});

// Accesing the array of objects using foreach loop
// Mainly used in Database Management
const arrOfObjects = [
  {
    langName: "Javascript",
    extensionName: "js",
  },
  {
    langName: "Cascading Style Sheet",
    extensionName: "css",
  },
  {
    langName: "Hyper Text Markup Language",
    extensionName: "html",
  },
];
arrOfObjects.forEach((value) => {
  console.log(
    `The extension name for ${value.langName} is ${value.extensionName}.`
  );
});

// For each loop does not return any value; it is mainly useful for printing the content
