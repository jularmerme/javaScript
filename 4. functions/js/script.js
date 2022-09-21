// Declaration of Variables
var num1 = 5;
var num2 = "45";

// Functions allow us to have reusable code in JS
// There are several ways to make a function

// 1. Function

function add(n1, n2) {
  var sum;
  // Check the dataType of a variable
  // console.log("Number one is a number: " + Number.isInteger(n1));
  // console.log("Number two is a number: " + Number.isInteger(n2));

  // type coercion
  // == Vs ===
  // == :  compare if value is equal
  // ==== : compare value and data Type
  if (Number.isInteger(n1) === Number.isInteger(n2)) {
    sum = n1 + n2;
  } else {
    sum = parseInt(n1) + parseInt(n2);
  }
  return sum;
}

var results = add(num1, num2);

document.getElementById(
  "example1"
).innerHTML = `Regular Function Call : ${results}`;

// 2. named function

var multiplicity = function (n1, n2) {
  return parseInt(n1) * parseInt(n2);
};

document.getElementById(
  "example2"
).innerHTML = `Anonymous Function Call : ${multiplicity(5, 4)}`;

// 3. Arrow Function
var square = (n) => {
  return n * n;
};

document.getElementById("example3").innerHTML = `Arrow Function : ${square(3)}`;

/* 
4. CallBack Functions
 * 
 * A callback function is a function passed into another function as an argument, which is then
 * invoked inside of the outer function to complete some kind of action aka a method call
 * within a method
 */

// 1. Create the inner function
function alertFunc(n) {
  alert(`Your answer is : ${n * 2}`);
}

// 2. Make oir outer function
function callbackFunc(number, callback) {
  callback(number);
  return number;
}

// 3. Invoke our outer function
document.getElementById(
  "example4"
).innerHTML = `Callback function call : ${callbackFunc(7, alertFunc)}`;

/****
 * 5. Closures
 *
 * Closures give you access to an outer function's scope from use of an inner function
 *
 * **/
function complexCalcFunc(n) {
  var secretNumber = n + 9;

  // Make a clousure here
  function crazyMath() {
    console.log("Your secret number " + secretNumber);
    console.log(
      "Your secret math solution is: " +
        (secretNumber * secretNumber - 1 + 14 / 8)
    );
  }
  return crazyMath;
}

let chemicalX = 24;
let myMath = complexCalcFunc(chemicalX);
myMath();
document.getElementById(
  "example5"
).innerHTML = `Closure function call : ${myMath()}`;
