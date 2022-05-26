/**
 * Spread & Rest Operators in JS
 *
 * - These two operators share the same syntax (...), but they behave differently depending on how they are used
 */

// Spread operator: allows iterables like arrays or objects literal properties to be expanded/added into
// single elements

let array = [1, 2, 3, 4, 26, 78];
let array2 = [-1, 0, ...array];

console.log(array2);

/**
 *
 *  REST
 *
 * Collect all remaining elements into an array of arguments for any given function
 *
 */

console.log("2. REST");

function foo(...args) {
  console.log(args);
}

foo(1, "fish", [2, 6, 9, 0]);

// We can use spread/rest operators to make our JS code more flexible and readaable for any
// incoming changes that our application requires as it gets bigger
