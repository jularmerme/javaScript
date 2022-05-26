// In 2017, ES8 was released asn with it came the async and await keywords
// we use the async keyword to define functions that handle asynchronous operations

// Make a async function, we would use the following syntax:
async function sayHi() {
  return "Hi";
}

// How to invoke a async function
sayHi().then(console.log);

// Naturally, async functions execute asynchronously the event loop that is ocurring in the JS engine
// More async Function
async function sayHi2() {
  return Promise.resolve("Hi too");
}

let sayHi3 = async function () {
  return "Hello";
};

// Arrow notation async function
let sayHi4 = async () => {
  return "Hiya";
};

async function display() {
  try {
    // we can execute another async function using the 'await' keyword
    // the 'await' keyword can ONLY be used within an async function
    //let result = await sayHi2();
    //let result = await sayHi3();
    let result = await sayHi4();
    console.log(result);
  } catch (error) {
    //this block of code will execute if the promise state was rejected
    console.log(error);
  }
}

display();
// async/await gives us more control over our code execution
