/***
 *
 * Scopes in JS
 *
 * What is Scope?
 * Scopes determine the accessibility/visibility of a variable in our code
 *
 * In JS, there are three scopes:
 *    1. Global scope : Visible anywhere
 *    2. Function Scope : Accessible within the function
 *    3. Block Scope : Accessible within a conditional statement or express
 *        - Block also has a special subscope known as lexical scope
 *        - In this scope, a variable is defined outside of a function and can be available for
 *          use inside of another function despite being declared before the function was created
 *  With 2 and 3, they are collectively known as local scope levels.
 *
 */

// Global Scope Variable
// use the var keyword

var name1 = "Bob";
console.log(name1 + " is everywhere!");

// Lexical scope example
// Use the let keyword
// let name2 = "John"

sayHi();

function sayHi() {
  /***
   * Hoisting is when the variable/function is being used before it's even declared
   * The JS interpreter will hoist - or move - to the top fo the scope in which the variable
   * is declared
   */

  name3 = "Sammie";
  // Without this line being here, name3 would only exist within the if-else block
  if (name3 === "Sammie") {
    // const variables must have ainitialization at the pont of declaration, otherwise you get a
    // reference error
    // const name3 = "Samuel";
    var name3 = "Samuel";
    console.log("Hi, " + name3);
  } else {
    console.log(`Hello, ${name3}`);
  }
}

// Lexical Vs Function
function eatLunch() {
  var name2 = "Joe";
  console.log(`${name2} is eating a sandwich`);
}

// The below code got an error bc name2 doesn't exist outside of the function
// console.log(name2);

eatLunch();
// Key Takeawaay:
// Lexical has the flexibility to go in and out of function scope
// while function scope is restricted to remain within the scope that it was declared/initialized
