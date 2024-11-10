// ******************* For loop ***************

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) console.log("5 will be printed");
  console.log(element);
}

// Nested for loops
for (let i = 0; i <= 2; i++) {
  for (let j = 0; j <= 2; j++) {
    console.log(`Nested for loop : outer- ${i} and inner- ${j}`);
  }
}

// For loop in an array
let heroesArr = ["Dad", "Brother", "Me"];
for (let i = 0; i < heroesArr.length; i++) {
  console.log(heroesArr[i]);
}

// Break and Continue Statements
// Break --> terminate the loop as the desired gets executed
// Continue --> exclude that part of loop and continue the loop as the desired gets executed
for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    console.log("5 is detected so terminating the loop using Break.");
    break;
  }
  console.log(`The value of i is ${i}.`);
}

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    console.log("5 is detected so leaving 5 using Continue.");
    continue; // generally used in case of foul or mistake
  }
  console.log(`The value of i is ${i}.`);
}

// ********* While Loop **********
/*
while (condition) {
    
}
*/

// ********* Do-while loop **********
/*
do {
    
} while (condition);
*/
