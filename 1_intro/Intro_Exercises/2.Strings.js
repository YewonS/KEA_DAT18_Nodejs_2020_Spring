// --------------------------------------
// Exercise 3 - Add numbers from string to float

var numberOne = "1.10";
var numberTwo = "2.30";

// add those two numbers and show the result
var result3 = +(numberOne) + +(numberTwo);
console.log(result3);
// you cannot touch line 1 neither line 2

// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

var numberOne = "1.10";
var numberTwo = "2.30";

var result4 = (+(numberOne) + +(numberTwo)).toFixed(2);
console.log(result4);

// --------------------------------------
// Exercise 5 - Decimals and average

var one = 10;
var two = 45;
var three = 98;

// Show in the console the avg. with 5 decimals
var result5 = ((one + two + three) / 3).toFixed(5);
console.log(result5);
// --------------------------------------

// --------------------------------------
// Exercise 6 - Get the character by index

var letters = "abc";
// Get me the character "c"

console.log(letters.substring(2));

// other solutions
// console.log(letter[2]);
// console.log(letter.charAt(2));

// --------------------------------------
// Exercise 7 - Replace

var fact = "You are learning javascript!";

// capitalize the J in Javascript

console.log(fact.replace("j", "J"));

//other solutions
//console.log(fact.indexOf("j")); and then split before, add J, and add the rest
// --------------------------------------
