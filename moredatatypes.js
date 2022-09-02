/*

A boolean variable can take either of two values - true or false
A boolean variable is mainly essential in evaluating the outcome of conditionals (comparisons). The result of a comparison is always a boolean variable. 

*/

let studentName = "Spade"
let haveEnrolledInCourse = true
let haveCompletedTheCourse = false

if (haveEnrolledInCourse){ 
    console.log("Welcome "+studentName+" to Udacity!"); // Will run only if haveEnrolledInCourse is true
}

/*

When you use the == or != operators, JavaScript first converts each value to the same type (if they’re not already the same type); this is why it's called "type coercion"! This is often not the behavior you want, and it’s actually considered bad practice to use the == and != operators when comparing values for equality.

*/

console.log("1" == true)

/* 
  
Instead, in JavaScript it’s better to use strict equality to see if numbers, strings, or booleans, etc. are identical in type and value without doing the type conversion first. To perform a strict comparison, simply add an additional equals sign = to the end of the == and != operators.

  */

console.log("1" === 1)

//This returns false because the string "1" is not the same type and value as the number 1.

console.log(0 === false)


/*
 * Programming Quiz: Out to Dinner (2-10)
 */
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables - `bill`, `tip`, and `total`
 * 2. Your variables - `bill`, `tip`, and `total` should be declared using the `var` keyword
 * 3. Your variable `bill` should be a number, having a value equal to the result of `10.25 + 3.99 + 7.15`
 * 4. Your variable `tip` should be a number, having a value equal to 15% of the `bill`
 * 5. Your variabe `total` should be a number, having a value equal to the `bill` and `tip` added together
 * 6. Your code should print the total to the console
 */
 var bill = 10.25 + 3.99 + 7.15
 var tip = bill * .15
 var total = bill + tip
 console.log(total)

/*
 * Programming Quiz: MadLibs (2-11)
 * 
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables - `adjective1`, `adjective2`, `adjective3`, and `madLib`.
 *
 * 2. Use the adjective1, adjective2, and adjective3 variables to set the madLib variable to the message:
 * 'The Intro to JavaScript course is amazing. James and Julia are so fun. I cannot wait to work through the rest of this entertaining content!'
 *
 * 3. Your madLib should match the given string
 * 4. The madLib variable should be printed to the console
 */

var adjective1 = "amazing";
var adjective2 = "fun";
var adjective3 = "entertaining"
var madLib = 'The Intro to JavaScript course is ' + adjective1 +'. James and Julia are so ' + adjective2 + '. I cannot wait to work through the rest of this ' + adjective3 + ' content!'
console.log(madLib)

 let firstName = "Sisquo";
 let interest = "the way you move that thang.";
 let hobby = "flip on the beach.";
 let awesomeMessage = "Hi, my name is " + firstName + ". I love " + interest + " In my spare time, I like to " + hobby;
 console.log(awesomeMessage)
