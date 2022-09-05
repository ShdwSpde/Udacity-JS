// If...else statements allow you to execute certain pieces of code based on a condition, or set of conditions, being met
var a = 1;
var b = 2;

if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than or equal to b");
}

// In JavaScript, you can represent a secondary check by using an extra if statement called an else if statement

let weather = "sunny";

if (weather === "snow") {
  console.log("Bring a coat.");
} else if (weather === "rain") {
  console.log("Bring a rain jacket.");
} else {
  console.log("Wear what you have on.");
}

let runner = "Jaden";
let position = 6;
let medal;

if(position === 1) {
  medal = "gold medal";
} else if(position === 2) {
  medal = "silver medal";
} else if(position === 3) {
  medal = "bronze medal";
} else {
  medal = "participation trophy";
}

console.log(runner + " received a " + medal)/*
 * Programming Quiz: Even or Odd (3-2)
 *
 * Write an if...else statement that prints `even` if the 
 * number is even and prints `odd` if the number is odd.
 *
 * Note - make sure to print only the string "even" or the string "odd"
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `number`, and include an `if...else` statement
 * 2. Your conditional should use a strict comparison (`===` or `!==`), and use the modulo ( `%` ) operator
 * 3. Your code should produce the expected output - "even" or "odd" using console.log() method
 */
 
 
// change the value of `number` to test your if...else statement
let number = 2;

if (number % 2 === 0) {
    console.log('even')
} else {
 console.log('odd')
}

let musicians = 20;

if (musicians <= 0) {
    console.log('not a group')
} else if (musicians === 1) {
    console.log('solo')
} else if (musicians === 2) {
    console.log('duet')
} else if (musicians === 3) {
    console.log('trio')
} else if (musicians === 4) {
    console.log('quartet')
} else {
    console.log('this is a large group')
}

// The && symbol is the logical AND operator, and it is used to combine two logical expressions into one larger logical expression. If both smaller expressions are true, then the entire expression evaluates to true. If either one of the smaller expressions is false, then the whole logical expression is false.

var colt = "not busy";
var weather2 = "nice";

if (colt === "not busy" && weather2 === "nice") {
  console.log("go to the park");
}


/*
 * Programming Quiz: Murder Mystery (3-4)
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variables - `room`, `suspect`, `weapon`, and `solved`
 * 2. Your code should include a conditional statement
 * 3. The variable `suspect` should use one of the provided values
 * 4. The variable `weapon` should be based on the `room`
 * 5. Your code should produce the expected output: __________ did it in the __________ with the __________!
 * Example: Mr. Parkes did it in the dining room with the knife!
 *
 * 6. For unmatching combination of the suspect and the room, print nothing on the console
 */

/* ****************************************** */
/* TESTING LOGIC */ 
// Change the value of `room` and `suspect` to test your code

// A room can be either of - dining room, gallery, ballroom, or billiards room
var room = "billiards room";

// A suspect can be either of - Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, or Mr. Kalehoff
// Test your code by giving matching as well as unmatching names of the suspect
var suspect = "Mrs. Sparr"; 

/* ****************************************** */

/* IMPLEMENTATION LOGIC*/

// Initial values
var weapon = "";
var solved = false;

/*
* To help solve this mystery, write a combination of conditional statements that:
* 1. sets the value of weapon based on the room and
* 2. sets the value of solved to true if the value of room matches the suspect's room
*/
if (room === 'gallery' && suspect === 'Ms. Van Cleve') {
    weapon = 'trophy'
    solved = true
} else if (room === 'dining room' && suspect === 'Mr. Parkes') {
    weapon = 'knife'
    solved =  true
} else if (room === 'ballroom' && suspect === 'Mr. Kalehoff'){
    weapon = 'poison'
    solved = true
} else if (room === 'billiards room' && suspect == 'Mrs. Sparr') {
    weapon = 'pool stick'
    solved = true
} else {
    solved = false
    console.log('The mystery remains unsolved..')
}
/* ****************************************** */
// The code below will run only when `solved` is true
if (solved) {
	console.log(suspect + ' did it in the ' + room + ' with the ' + weapon);
}
/* ****************************************** */

/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `balance`, `checkBalance`, `isActive`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should produce the expected output
 * 4. Your code should not be empty
 * 5. BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED. 
 */
 
// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = -325.00;
var checkBalance = true;
var isActive = true;

if (checkBalance === true && isActive === true && balance > 0) {
  console.log('Your balance is ' + balance)
} else if (checkBalance === true && isActive === false) {
    console.log('Your account is no longer active') 
} else if (checkBalance === true && isActive === true && balance == 0) {
    console.log('This account is empty unfortunately')
} else if (checkBalance === true && isActive === true && balance < 0) {
    console.log('Negative balance. Please contact your bank.')
} else {
    console.log('Thank you. Have a nice day!')
}



/*
 * Programming Quiz: Ice Cream (3-6)
 *
 * Write a single if statement that logs out the message:
 * 
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 * 
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators. 
 * It's okay if the output string doesn't match exactly.
 */

var flavor = "strawberry";
var vessel = "cone";
var toppings = "cookies";

if ((flavor === "vanilla" || flavor === "chocolate") && (vessel === "cone" || vessel === "bowl") && (toppings === "sprinkles" || toppings === "peanuts")) {
    console.log("I'd like two scoops " + flavor + " ice cream in a " + vessel + " with" + toppings)
} else console.log("Mi nuh have dat!")

// Truthy/ Falsy

/*

Every value in JavaScript has an inherent boolean value. When that value is evaluated in the context of a boolean expression, the value will be transformed into that inherent boolean value.

The paragraph above is pretty dense with information. You should probably re-read it again! ☝️

Falsy values
A value is falsy if it converts to false when evaluated in a boolean context. For example, an empty String "" is falsy because, "" evaluates to false.

Here’s the list of all of the falsy values:
the Boolean value false
the null type
the undefined type
the number 0
the empty string ""
the odd value NaN (stands for "not a number", check out the NaN MDN article)

A value is truthy if it converts to true when evaluated in a boolean context.

Essentially, if it's not in the list of falsy values, then it's truthy!

*/

if(< Write your condition here >)
    console.log("This text will be printed if the condition above evaluates to true");
