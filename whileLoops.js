/* 

While Loops

There are many different kinds of loops, but they all essentially do the same thing: they repeat an action some number of times.

Three main pieces of information that any loop should have are:

When to start: The code that sets up the loop — defining the starting value of a variable for instance.
When to stop: The logical condition to test whether the loop should continue.
How to get to the next item: The incrementing or decrementing step — for example, x = x * 3 or x = x - 1
Here's a basic while loop example that includes all three parts.

*/

var start = 0; // when to start
while (start < 10) { // when to stop
  console.log(start);
  start = start + 2; // how to get to the next item
}

/*
 * Programming Quiz: JuliaJames (4-1)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `x` with a starting value of `1`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should use a conditional statement
 * - Your code should increment `x` by `1` each time the loop executes
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
 
var x = 1;

while (x <= 20) {
   if (( x % 3 === 0)  && (x % 5 === 0)) {
       console.log("JuliaJames");
   } else if (x % 3 === 0) {
       console.log("Julia");
   } else if (x % 5 === 0) {
       console.log("James");
   } else {
       console.log(x)
   }
   x++;
    // print Julia, James, or JuliaJames

}


/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `num` with a starting value of `99`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


var num = 99;

while (num >= 1) {
    if(num === 1) {
        console.log(num + " bottle of juice on the wall! "
                    + num + " bottle of juice! Take one down, pass it around... "
                    + (num-1) + " bottles of juice on the wall!");
    } 
    
    else if (num === 2) {
        console.log(num + " bottles of juice on the wall! "
                    + num + " bottles of juice! Take one down, pass it around... "
                    + (num-1) + " bottle of juice on the wall!");
    }
    else {
        console.log(num + " bottles of juice on the wall! "
                    + num + " bottles of juice! Take one down, pass it around... "
                    + (num-1) + " bottles of juice on the wall!");
    }
    num=num-1;
}

/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


// your code goes here

let t = 60;
while(t >= 0 ) {
    if(t === 0) {
        console.log("Solid rocket booster ignition and liftoff!");
    } else if(t === 6) {
        console.log("Main engine start");
    } else if(t === 10) {
        console.log("Activate main engine hydrogen burnoff system");
    } else if(t === 16) {
        console.log("Activate launch pad sound suppression system");
    } else if(t === 31) {
        console.log("Ground launch sequencer is go for auto sequence start");
    } else if(t === 50) {
        console.log("Orbiter transfers from ground to internal power");
    } else {
        console.log("T-" + t + " seconds");
    }
    t=t-1;
}
