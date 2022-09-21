// 1. Boolean
let showImage: boolean = true;
if (showImage) console.log(`Show Image is activated`);
else console.log(`Show Image is deactivated`);

// 2. Numeric
let productId: number = 499;
console.log(`${productId}`);

// 3. String
let productNameExample: string = "Samsung Galaxy J7";
console.log(`${productNameExample}`);

// 4. Any
let screenSize: any;
screenSize = 13.97;
console.log(`${screenSize}`);
screenSize = "5.5-inches";
console.log(`${screenSize}`);

// 5. Void
let product: void = undefined;
console.log(product);

function displayProductDetails(): void {
  console.log("Product category is Gadget");
}

displayProductDetails();

// Declaring variables with basi types using let
let productSerial: number = 9807999; // Declaring a numeric variable

let productDescription: string = "15GB, Gold"; // Declaring a string variable
let productName0 = "Samsung Galaxy J7";

let productAvailable: boolean = true; // Declaring a boolean variable

console.log("The type of productAvailable is " + typeof productSerial);
console.log("The type of productAvailable is " + typeof productAvailable);
console.log("The type of productName0 " + typeof productName0);

// Declaring variables using const
const discountPercentage: number = 15;
console.log("Discount percentage is: " + discountPercentage);

/**
 * Exercise: Basic Types
 */

let productName: string = "Samsung Galaxy Note 7";
let productPrice: number = 499;
let productStatus: boolean = true;

document.getElementById("pName").innerHTML = `${productName}`;
document.getElementById("pPrice").innerHTML = `${productPrice}`;

if (productStatus)
  document.getElementById("pAvailable").innerHTML = " Available";
else document.getElementById("pAvailable").innerHTML = " Out of Stock";
