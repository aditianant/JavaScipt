"use strict";               //treat all JS code as newer version of JS

// alert(3+3)                  //it will be executed while running JS in browser; not while using NodeJS

// Code Readability is also important as execution and simulation
// ECMA (tc39.es) is the basic standard for JS ; not MDN----well its good but not standard

console.log(3+3)
console.log("Helloo Mee!!")


// Primitive DataTypes ---->
// Numbers (integer type) => ranges is upto 2^53 --> also includes decimal values
// bigint => for bigger numbers
// string => " "
// boolean => true or false
// null --> it is a standalone value (no value) -- (it's data type is object)
// undefined --> value is not assigned yet
// symbol => to find uniqueness among elements

// const is used to constantize a value --> which cannot be changed

// Non-primitive (Reference) DataTypes--> (it's data type is object)
// objects --> important
// arrays
// functions

console.log(typeof "Hello Meee")     //it's type is string
console.log(typeof null)            //it's type is object
console.log(typeof undefined)       //it's type is undefined only

// Symbol has symbol return value
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)           // false since the return values are different


// Arrays --> included in big brackets
const heroes = ["Shaktiman", "Krrish", "Myself"];

// Objects --> included in curly parenthesis
let myObj = {
    name:"Khush",
    age:21,
}

// Function
const myFunction = function(){
    console.log("This is a function ");
}

// typeof --> to find the data type of the variables