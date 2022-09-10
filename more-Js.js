/* For...of loop
The for...of loop is used to loop over any type of data that is iterable.

You write a for...of loop almost exactly like you would write a for...in loop, except you swap out in with of and you can drop the index.
*/

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  console.log(digit);
}

// You can stop or break a for...of loop at anytime.

const digitz = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit1 of digitz) {
  if (digit1 % 2 === 0) {
    continue;
  }
  console.log(digit1);
}


/*
 * Programming Quiz: Writing a For...of Loop (1-4)

Directions:
Write a for...of loop that:

loops through each day in the days array
capitalizes the first letter of the day
and prints the day out to the console
 */

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// your code goes here
for (const day of days){
    let upperDay = day.charAt(0).toUpperCase() + day.slice(1)
    console.log(upperDay)
}

/* 
Spread operator
The spread operator, written with three consecutive dots ( ... ), is new in ES6 and gives you the ability to expand, or spread, iterable objects into multiple elements.
*/

const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
console.log(...books);

const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
console.log(...primes);

/*
 * Instructions: Use the spread operator to combine the `fruits` and `vegetables` arrays into the `produce` array.
 */

const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];

const produce = [...fruits,...vegetables];

console.log(produce);

/*
Rest parameter
The rest parameter, also written with three consecutive dots ( ... ), allows you to represent an indefinite number of elements as an array. This can be helpful in a couple of different situations.

One situation is when assigning the values of an array to variables. For example,
*/

const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items);

// Using the rest parameter
// Fortunately, with the addition of the rest parameter, you can rewrite the sum() function to read more clearly.

/*
 * Programming Quiz: Using the Rest Parameter (1-5)
 */

// your code goes here

function average(...nums) {
    let total = 0
    for(num of nums){
        total += num
    } 
    return total/(nums.length)
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
