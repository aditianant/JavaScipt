const name = "Aditi";
const surname = "Anant";

console.log(name + surname); // Not preferable

// *****Preferable Way --> String interpolation
console.log(`Hello my name is ${name} and my surname is ${surname}`);

// Declaring a string
const gameName = new String("Adiitii-Annannt");

console.log(gameName[0]);
console.log(gameName.__proto__); // Object prototype
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(1)); // to find the letter at that index
console.log(gameName.indexOf("d")); // to find the index of that letter

const newGameName = gameName.substring(0, 4); // it does not obey negative values
console.log(newGameName); // between 0 included to 4 excluded

const anotherString = gameName.slice(-7, 5); // if negative value -- then it starts from reverse
console.log(anotherString);

const newString = "    Welcome    ";
console.log(newString);
console.log(newString.trim()); // trims the leading and trailing spaces

const url = "https://google.com/aditi%20anant";
console.log(url.replace("%20", "-"));
console.log(url.includes("aditi"));

console.log(gameName.split("-")); // to make the strings into an array using split command
