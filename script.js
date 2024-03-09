/**
 * Variable Declaration
 */
let userName = "EuphyDev"; // string variable
let isProgrammer = true; // boolean variable
let userAge = 100; // number/integer variable
let userRating = 4.7; // float variable

/**
 * Operators Showcase
 */

// Declare and initialize numerical variables.
let num1 = 25;
let num2 = 5;

// Perform basic arithmetic operations.
let addition = num1 + num2; // Example: 25 + 5 = 30
let subtraction = num1 - num2; // Example: 25 - 5 = 20
let multiplication = num1 * num2; // Example: 25 * 5 = 125
let division = num1 / num2; // Example: 25 / 5 = 5
let modulus = num1 % num2; // Example: 25 % 5 = 0

// Increment and decrement operations.
let incrementedNum1 = ++num1; // Example: Incrementing 25 results in 26
let decrementedNum2 = --num2; // Example: Decrementing 5 results in 4

// Conditional check.
let isNum1GreaterThanNum2 = num1 > num2; // Example: 26 > 4 is true


/**
 * Control Structures Overview
 * IF statements, For Loops, and While Loops
 */
let x = 1;

// If Statement
if (x > 5) {
//   console.log('x is greater than 5');
} else {// false
//   console.log('x is not greater than 5');
}

// For Loop 
for (let i = 0; 5 < 5; i++) {
    // console.log('Iteration:', i);
  }
//   console.log("done")


// While Loop
let i = 0;
while (i < 3) { // false
//   console.log('While Loop Iteration:', i);
  i++; 
}
// console.log("i'm outside the loop");

/**
 * Object Basics
 */
let person = {
    name: 'Euphy',
    age: 100,
    isProgrammer: true
  };

  
//   console.log(person.name, person.age, person.isProgrammer);




/**
 * Arrays Unleashed
 */
 //               0        1        2          3
let fruits = ['apple', 'mango', 'orange'];

fruits.push('grape');

let secondFruit = fruits[1];
// console.log(secondFruit);



/**
 * Functions in Action
 */

// Function Declaration
function greet(name) {
    return 'Hello, ' + name + '!';
  }
  
  // Using the Function
  let message1 = greet('Euphy');

//   console.log(message1);




  // Function Expression
  let farewell = function(name) {
    return 'Goodbye, ' + name + '!';
  };
  
  // Using the Function
  let message2 = farewell('Euphy'); //Goodbye, Euphy!
  
//   console.log(message2);



/**
 * Understanding Scope
 */

let globalVar = 'I am outside';

function exampleScope() {
  let localVar = 'I am inside';
//   console.log(globalVar);
//   console.log(localVar);
// console.log(localVar);
}

exampleScope();


/**
 * DOM Manipulation
 */
let age = 100;

let replaceText = 'HELLO EUPHY you are: ' + age + ' years old';
document.getElementById('sampleText').innerHTML = replaceText;


















/**
 * Asynchronous JavaScript
 */

//declare the function
function simulateAsyncAPI(callback) {
    setTimeout(callback, 5000);
  }
  
//   console.log('Start');
  
  //use the function
  simulateAsyncAPI(() => {
    // console.log('Async Callback');
  });
  
//   console.log('End');


  /**
   *  Error Handling Express
   */


try {
    let asd = 10
    let result = asd / 2;
    console.log(result);
  } catch (error) {
    console.error('An error occurred:', error.message);
  } finally {
    console.log('This will always execute');
  }