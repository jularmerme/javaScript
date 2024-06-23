// 1. Boolean
var showImage = true;
if (showImage)
    console.log("Show Image is activated");
else
    console.log("Show Image is deactivated");
// 2. Numeric
var productId = 499;
console.log("".concat(productId));
// 3. String
var productNameExample = "Samsung Galaxy J7";
console.log("".concat(productNameExample));
// 4. Any
var screenSize;
screenSize = 13.97;
console.log("".concat(screenSize));
screenSize = "5.5-inches";
console.log("".concat(screenSize));
// 5. Void
var product = undefined;
console.log(product);
function displayProductDetails() {
    console.log("Product category is Gadget");
}
displayProductDetails();
// Declaring variables with basi types using let
var productSerial = 9807999; // Declaring a numeric variable
var productDescription = "15GB, Gold"; // Declaring a string variable
var productName0 = "Samsung Galaxy J7";
var productAvailable = true; // Declaring a boolean variable
console.log("The type of productAvailable is " + typeof productSerial);
console.log("The type of productAvailable is " + typeof productAvailable);
console.log("The type of productName0 " + typeof productName0);
// Declaring variables using const
var discountPercentage = 15;
console.log("Discount percentage is: " + discountPercentage);
/**
 * Exercise: Basic Types
 */
var productName = "Samsung Galaxy Note 7";
var productPrice = 499;
var productStatus = true;
document.getElementById("pName").innerHTML = "".concat(productName);
document.getElementById("pPrice").innerHTML = "".concat(productPrice);
if (productStatus)
    document.getElementById("pAvailable").innerHTML = " Available";
else
    document.getElementById("pAvailable").innerHTML = " Out of Stock";
