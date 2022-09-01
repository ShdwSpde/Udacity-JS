// You can store and manipulate data types as variables

let greeting = "Hello"

console.log(greeting + " World!")

// Variables can be reassigned using an "="

greeting = "Hola"
console.log(greeting + " World!")

// you can camelCase for variables with multiple words

/*
 * Programming Quiz: Converting Tempatures (2-2)
 *
 * The Celsius-to-Fahrenheit formula:
 *
 *    F = C x 1.8 + 32
 *
 * 1. Set the fahrenheit variable to the correct value using the celsius variable and the forumla above
 * 2. Log the fahrenheit variable to the console
 *
 */
 
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `celsius`
 * 2. You code should have a variable `fahrenheit`
 * 3. Your variable `celsius` should equal `12`
 * 4. Your variable `fahrenheit` should produce the output equal `53.6`
 * 5. Your variable `fahrenheit` declaration should use the `celsius` variable
 * 6. Your variable `fahrenheit` should have the correct formula
 * 7. Your code should log the `fahrenheit` variable
 * 8. Your code should not be empty
 */
 

let celsius = 12
let fahrenheit = celsius * 1.8 + 32

console.log(fahrenheit);

/* To access an individual character, you can use the character's location in the string, called its index. Just put the index of the character inside square brackets (starting with [0] as the first character) immediately after the string. */

let name = "James"
console.log(name[0])

/*

Another way to work with strings is by comparing them. You've seen the comparison operators == and != when you compared numbers for equality. You can also use them with strings! 

*/

console.log("Yes" == "yes")

// Pick a string. Your string can have any number of characters.
let my_string = "a";

// Calculate the ASCII value of the first character, i.e. the character at the position 0. 
let ASCII_value = my_string.charCodeAt(0);

// Let us print
console.log(ASCII_value);

/*
 * Programming Quiz: All Tied Up (2-5)
 
 * Quiz Requirements
 * 1. Your code should have a variable joke
 * 2. Your joke should use only one string
 * 3. Your joke should match the expected format
*/
let joke = "Why couldn't the shoes go out and play? \nThey were all \"tied\" up\!"
console.log(joke);


let haiku ="Blowing from the west"+"\nFallen leaves gather"+"\nIn the east."
console.log(haiku);
