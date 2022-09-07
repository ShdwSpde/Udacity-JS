/*

The for loop explicitly forces you to define the start point, stop point, and each step of the loop. In fact, you'll get an Uncaught SyntaxError: Unexpected token ) if you leave out any of the three required pieces.

for ( start; stop; step ) {
  // do this thing
}

*/

for (var i = 0; i < 6; i = i + 1) {
  console.log("Printing out i = " + i);
}

// Nested Loops

// for (var x = 0; x < 5; x = x + 1) {
  // for (var y = 0; y < 3; y = y + 1) {
    // console.log(x + "," + y);
  // }
// }


/*
 * Programming Quiz: Find my Seat (4-8)
 * 
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0 
 * The last row-seat combination will be 25-99
 * 
 * Things to note: 
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should use a nested `for` loop'
 * - Your code should produce the expected output, as explained above
 */
 
// Write your code here
for(var row = 0; row <= 25; row++){
    for(var seat = 0; seat < 100; seat++){
        console.log(row + '-' + seat)
    }
}


/*

These will produce the same output when not commented out! Notice the differences and similarities

var x = 9;
while (x >= 1) {
    console.log("hello " + x);
    x = x - 1;
}

for(var x=9;x>=1;x--){
    console.log("hello " + x);
}

*/
let solution = 1
for(var x = 12; x>=1;x--) {
    solution *= x;
}

console.log(solution)
