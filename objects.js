/*
 * Programming Quiz: Umbrella (7-1)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `umbrella`
 * - The variable `umbrella` should be an object
 * - Your `umbrella` object should have the `color` and `isOpen` property
 * - Your `umbrella` object should have an `open()` method that toggles the value of `isOpen` property
 * - Your `umbrella` object should have an `close()` method that toggles the value of `isOpen`
 */

var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    close: function(){
        if (umbrella.isOpen === true) {
            umbrella.isOpen = false
            return "Julia closes the umbrella";
        } else {
            return "The umbrella is already open";
        }
    }
};
console.log(umbrella.close())
console.log(umbrella.isOpen)

var Spade = {
  name: "Mike",
  race: "black",
  age: 33,
  isEmployed: false,
  parents: ["Stayce", "Bernard"]
}

// Object-literal notation
var sister = {
  name: "Sarah", 
  age: 23,
  parents: [ "alice", "andy" ],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true
};

/*
The syntax you see above is called object-literal notation. There are some important things you need to remember when you're structuring an object literal:

The "key" (representing a property or method name) and its "value" are separated from each other by a colon
The key: value pairs are separated from each other by commas
The entire object is wrapped inside curly braces { }.
And, kind of like how you can look up a word in the dictionary to find its definition, the key in a key:value pair allows you to look up a piece of information about an object. Here's are a couple examples of how you can retrieve information about my sister's parents using the object you created.
*/


// two equivalent ways to use the key to return its value
sister["parents"] // returns [ "alice", "andy" ]
sister.parents // also returns ["alice", "andy"]

/*
Using sister["parents"] is called bracket notation (because of the brackets!) and using sister.parents is called dot notation (because of the dot!).
  */

/*
 * Programming Quiz: Menu Items (7-2)
 * Create an object named `breakfast`. 
 * The object should contain properties for the `name`, `price`, and `ingredients`.
 * Print the entire object on the console
 */
var breakfast = {
    name: "The Lumberjack",
    price: "$9.95",
    ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
}

console.log(breakfast)


/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `savingsAccount` 
 * - Your `savingsAccount` object should have the `balance` and `interestRatePercent` property
 * - Your `savingsAccount` object should have a `printAccountSummary()` method
 * - Your `printAccountSummary()` method should return the EXACT expected message
 * - BE CAREFUL ABOUT THE PUNCTUATION, SPACES, AND EXACT WORDS TO BE PRINTED.
 */


var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary: function() {
        return "Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%."
    }
};

console.log(savingsAccount.printAccountSummary());

/*
 * Programming Quiz: Facebook Friends (7-5)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */


// TIP - 
// In an array, 
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method

// your code goes here

let facebookProfile = {
    name: "Mike Spade",
    friends: 32,
    messages: ["happy birthday", "you old now", "welcome to the darkside"],
    addFriend: function(){
        facebookProfile.friends += 1
        return 'New friend made! You now have ' + facebookProfile.friends + ' total facebook friends.'
    },
    removeFriend: function(){
        facebookProfile.friends -= 1
        return 'New friend made! You now have ' + facebookProfile.friends + ' total facebook friends.'
    },
    postMessage: function(message) {
        facebookProfile.messages.push(message)
        return "New Post Created!"
        return facebookProfile.messages
    },
    deleteMessage: function(index) {
        facebookProfile.messages.splice(index,1)
        return "Message Deleted"
        return facebookProfiles.messages
    }
}

console.log(facebookProfile.addFriend())
console.log(facebookProfile.removeFriend())
console.log(facebookProfile.messages)
console.log(facebookProfile.postMessage("Ay Caramba"))
console.log(facebookProfile.deleteMessage(2))
console.log(facebookProfile.messages)

/*
 * Programming Quiz: Donuts Revisited (7-6)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code sshould have an array named `donuts`
 * - Your `donuts` array should call the `forEach()` method
 * - Your `forEach()` loop should output the donut summaries
 * - BE CAREFUL ABOUT THE PUNCTUATION, SPACES, AND EXACT WORDS TO BE PRINTED.
 */

// This is an array of objects. 
var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

// your code goes here
donuts.forEach(function(donut){
    // donut represents a single element of donuts array
    // donut is an object, therefore you can access its properties using a dot notation
    console.log(donut.type+" donuts cost $"+donut.cost+" each");
});
