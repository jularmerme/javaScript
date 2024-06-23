// Array Declarations

// 1. Using datatype[] declaration
let dataType: string[] = ["Samsung", "Apple", "Sony"];

// 2. Using Array<type> declaration
let arrayType: Array<string> = ["Samsung", "Apple", "Sony"];

// 3. Using any[] declaration
let anyType: any[] = ["Samsung", "Apple", "Sony"];

// Modify an existing Array

/**
 * 1. Using push function
 * Adding data using push function. Make sure that the type pushed data is same as array type,
 * or it will generate compilation error.
 */
let products: string[] = ["Mobiles", "Tablets"];
products.push("Television");
products.push("Air Conditioners");

/**
 * 2. Using index reference
 */
products[4] = "Sound System";
products[5] = "Microwave";

for (let product of products) {
  console.log(`${product}`);
}

// Removing elements from an Array

/**
 * 1. Using pop() function: this will remove the element in the last position
 */
products.pop();
console.log("Removing element from array using the pop() function");
for (let product of products) {
  console.log(`${product}`);
}

/**
 * 2. Using splice() function: This will remove theitem from a specific position
 */
products.splice(1, 2);
console.log("Removing element from array using the splice() function");
for (let product of products) {
  console.log(`${product}`);
}

// TRYOUT
// Declaring an array of any datatype
const manufacturers: any[] = [
  {
    id: "Samsung",
    checked: false,
  },
  {
    id: "Motorola",
    checked: false,
  },
  {
    id: "Apple",
    checked: false,
  },
  {
    id: "Sony",
    checked: false,
  },
];

console.log("Available Products are: ");

// logic to populate the above declared array's id value
for (const item of manufacturers) {
  console.log(item.id);
}

/**
 * Exercise: Arrays
 */

const mobiles: any[] = [
  {
    productName: "Samsung Galaxy Note 7",
    productPrice: 699,
    productAvailable: true,
  },
  {
    productName: "Samsung Galaxy S6 Edge",
    productPrice: 630,
    productAvailable: true,
  },
  {
    productName: "Nokia Lumia 640XL",
    productPrice: 224,
    productAvailable: false,
  },
];

var counter: number = 0;

for (let mobile of mobiles) {
  document.getElementById(
    `pName${counter}`
  ).innerHTML = `${mobile.productName}`;
  document.getElementById(
    `pPrice${counter}`
  ).innerHTML = `${mobile.productPrice}`;
  if (mobile.productAvailable)
    document.getElementById(`pAvailable${counter}`).innerHTML = ` Available`;
  else
    document.getElementById(`pAvailable${counter}`).innerHTML = ` Out of Stock`;
  counter++;
}
