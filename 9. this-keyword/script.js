/**
 *
 * What is 'THIS' ?
 *
 * In JS  the 'this' keyword referes to the object that it belongs to
 *
 * - By itself, this refers to the global objec
 * - In a function, this still referes the global object
 * - In a method (in JS, a method is a function tha belongs to an object),
 *
 */

"use strict";

function foo() {
  console.log(this); //return undefined in strict mode - not strict mode will return the global object (window)
}

// NOTE : declaring a vairable like this is equivalent to declaring it with var in non-strict mode
//foo();

//x = "hi";

//in strict mode, this will return an eror because it's bad practice to declare your variable like the way we did x
//console.log(x);

// Make an object literal
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 124,
  fullName: function () {
    // This is a method because it's a function tha is set a as a property of an object
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.fullName);
