// Problems with 'var' declaration
for (var count = 1; count <= 5; count++) {
  console.log(`Inside the loop ${count}`);
}

console.log(`Variable count value outside the loop: ${count}`);

// Declaring variables using 'let':
for (let letCount = 1; letCount <= 5; letCount++) {
  console.log(`Variable count value inside the loop ${letCount}`);
}

// letCount variable is not accessible outside for loop
console.log(`Variable count value outside the loop ${letCount}`);

// Capturing Variable in the loop
// for (var i = 0; i < 60; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000 * i);
// }

for (let iLet = 0; iLet < 10; iLet++) {
  setTimeout(function () {
    console.log(iLet);
    document.getElementById("seconds").innerHTML = `${iLet}`;
  }, 100 * iLet);
}

// redeclaring block-scoped variable using 'var' keyword
var number;
var number;

// Redeclaring block-scoped variable using 'let' keyword
let productName;
let productName;

// Reclaring block-spaced variable using 'const' keyword
let productId = 100;
let productId = 19;

const products: string[] = ["Gadget", "Furniture", "Accessories"];
for (let product of products) {
  console.log(product);
}
products[3] = "books";
for (let product of products) {
  console.log(product);
}
products = ["cloths", "BedSheets"];

// Type Annotation
let productPrice: number = 499;
productPrice = "Mobile"; // We will get compilation error saying Type string is not assignable to type
// number

// Function is defined with parameter of number type and string as return type
function getProductDetails(productId: number): string {
  return "Product ID" + productId;
}

getProductDetails("Mobile"); // Invoking function using string parameter type, throws compiltation error saying "Argument of type 'string' is not assignable to parameter of type 'number'"
