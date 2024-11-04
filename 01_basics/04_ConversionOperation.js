// ******************************* Conversion of datatypes ***************************************************
let score="33"
console.log(typeof score)

let scoreInNumber=Number(score)         //The "Number" keyword confirms that the value comes in number (type conversion)
console.log(typeof scoreInNumber)       //If there are any letters present in the string still the type will be converted

let value="33abc"
console.log(typeof value)

let valueInNumber=Number(value)
console.log(typeof valueInNumber)       //Here, the type is converted but the number comes as NaN
console.log(valueInNumber)

// If the value is digits+letters or undefined then the answer comes as NaN
// If the value is null or false then the answer comes as 0
/* Examples : "33" => 33
 "33abc" => NaN
 undefined => NaN
 null => 0
 false => 0
 true => 1 
 "" => false
 "anything" => true */



 // *************************************** Operations ****************************
 console.log ("1" + 2)          // 12
 console.log (1 + "2")          // 12
 console.log ("1" + 2 + 2)      // 122
 console.log (1 + 2 + "2")      // 32
 