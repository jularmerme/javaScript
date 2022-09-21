// Problems with 'var' declaration
for (var count = 1; count <= 5; count++) {
    console.log("Inside the loop ".concat(count));
}
console.log("Variable count value outside the loop: ".concat(count));
// Declaring variables using 'let':
for (var letCount = 1; letCount <= 5; letCount++) {
    console.log("Variable count value inside the loop ".concat(letCount));
}
// letCount variable is not accessible outside for loop
console.log("Variable count value outside the loop ".concat(letCount));
var _loop_1 = function (iLet) {
    setTimeout(function () {
        console.log(iLet);
        document.getElementById("seconds").innerHTML = "".concat(iLet);
    }, 100 * iLet);
};
// Capturing Variable in the loop
// for (var i = 0; i < 60; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000 * i);
// }
for (var iLet = 0; iLet < 10; iLet++) {
    _loop_1(iLet);
}
// redeclaring block-scoped variable using 'var' keyword
var number;
var number;
// Redeclaring block-scoped variable using 'let' keyword
var productName;
var productName;
// Reclaring block-spaced variable using 'const' keyword
var productId = 100;
var productId = 19;
var products = ["Gadget", "Furniture", "Accessories"];
for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
    var product = products_1[_i];
    console.log(product);
}
products[3] = "books";
for (var _a = 0, products_2 = products; _a < products_2.length; _a++) {
    var product = products_2[_a];
    console.log(product);
}
products = ["cloths", "BedSheets"];
// Type Annotation
var productPrice = 499;
productPrice = "Mobile"; // We will get compilation error saying Type string is not assignable to type
// number
// Function is defined with parameter of number type and string as return type
function getProductDetails(productId) {
    return "Product ID" + productId;
}
getProductDetails("Mobile"); // Invoking function using string parameter type, throws compiltation error saying "Argument of type 'string' is not assignable to parameter of type 'number'"
