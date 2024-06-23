// Arrays in Typescript

// using datatype[] declaration
// 1. String array is created using String[] declaration
let manufacturers: string[] = ["samsung", "Apple", "Sony"];

// Using Array<type> declaration
// 2. String array is created using Array<type> declaration
let manufacturers2: Array<string> = ["Samsung", "Apple", "Sony"];

// Using any declaration
// 3. It accepts any type of data
let products: any[] = ["Mobile", 12500, true];

// Add values to an Array
// Adding data using push function.
let products2: string[] = ["Mobiles", "Tablets"];

console.log("Initial Array");
for (let product of products) {
  console.log(product);
}

products.push("Television");
products.push("Air Conditioners");

console.log("After adding new elements to the Array");
for (let product of products) {
  console.log(product);
}

// Adding data using index reference
let products3: string[] = ["Mobiles", "Tablets"];
products3[2] = "Television";
products3[3] = "Air Conditioners";

// Removing elements from an Array
// using pop() function
let products4: string[] = ["Mobiles", "Tablet", "Television"];
console.log("Initial Array");
for (let product of products4) {
  console.log(product);
}
products4.pop();

console.log("Final Array");
for (let product of products4) {
  console.log(product);
}

// Using the splice() function: remove the item from a specific index position
let products5: string[] = ["Mobiles", "Tablets", "Television"];
products4.splice(1, 2);
for (let product of products4) {
  console.log(product);
}

// declaring an array of any datatype
const manufacturers3: any[] = [
  { id: "Samsung", checked: false },
  { id: "Apple", checked: false },
  { id: "Sony", checked: false },
];

console.log("Available products are: ");
for (const item of manufacturers3) {
  console.log(item.id);
}
