const arr = [0, 1, 2, 3, 4, "Me", false]; // JS array can has values with mixed data types since the return data type is const
console.log(arr[5]);

const anyArr = new Array(1, 2, 3, 4); // should be enclosed in just parenthesis; and not in big brackets

arr.push(true); // adds 1 more value at the end of the array
arr.pop(); // removes the last value from the array

arr.unshift(12); // adds 1 more value at the start of the array
arr.shift(); // removes the first value from the array

console.log(arr);

console.log(arr.includes(5)); // return type is boolean
console.log(arr.indexOf(5)); // return type is integer

const newArr = arr.join();
console.log(newArr); // binds and converts the array into string type

// Difference between slice and splice commands in an array
// Slice --> the upper limit is excluded; and original array is not modified
// Splice --> the upper limit is included; and original array is modified (the spliced elements is excluded)

const myArr = [0, 1, 2, 3, 4, 5];
console.log(`The original array is ${myArr}.`);

const sliceArr = myArr.slice(1, 4);
console.log(`The sliced elements are ${sliceArr}.`);
console.log(`The array after slicing is ${myArr}.`);

const spliceArr = myArr.splice(1, 4);
console.log(`The spliced elements are ${spliceArr}.`);
console.log(`The array after splicing is ${myArr}.`);

// Array Merging
const marvelHeros = ["IronMan", "Thor", "Hulk"];
const dcHeros = ["SuperMan", "BatMan", "Flash"];
// marvelHeros.push(dcHeros); // Not a prefered way since an array is coming inside an array
// console.log(marvelHeros);

const allHeros = marvelHeros.concat(dcHeros); // Another way to merge arrays
console.log(allHeros);

const againHeros = [...marvelHeros, ...dcHeros]; // Merging arrays through spreading
console.log(againHeros); // ... makes all the elements in the array as individual elements

const arrInArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5, 6]]];
const openedArr = arrInArr.flat(Infinity); // to make the individual elements come in order in an array
console.log(arrInArr);
console.log(openedArr);

// Coversion into an Array
console.log(Array.isArray("protagonist")); // to check if it an array or not
console.log(Array.from("protagonist")); // to convert it into an array
console.log(Array.from({ name: "Aditi" })); // returns an empty array because what to convert is not specified

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
