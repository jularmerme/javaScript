// Arrays in Typescript
// using datatype[] declaration
// 1. String array is created using String[] declaration
var manufacturers = ["samsung", "Apple", "Sony"];
// Using Array<type> declaration
// 2. String array is created using Array<type> declaration
var manufacturers2 = ["Samsung", "Apple", "Sony"];
// Using any declaration
// 3. It accepts any type of data
var products = ["Mobile", 12500, true];
// Add values to an Array
// Adding data using push function.
var products2 = ["Mobiles", "Tablets"];
console.log("Initial Array");
for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
    var product = products_1[_i];
    console.log(product);
}
products.push("Television");
products.push("Air Conditioners");
console.log("After adding new elements to the Array");
for (var _a = 0, products_2 = products; _a < products_2.length; _a++) {
    var product = products_2[_a];
    console.log(product);
}
// Adding data using index reference
var products3 = ["Mobiles", "Tablets"];
products3[2] = "Television";
products3[3] = "Air Conditioners";
// Removing elements from an Array
// using pop() function
var products4 = ["Mobiles", "Tablet", "Television"];
console.log("Initial Array");
for (var _b = 0, products4_1 = products4; _b < products4_1.length; _b++) {
    var product = products4_1[_b];
    console.log(product);
}
products4.pop();
console.log("Final Array");
for (var _c = 0, products4_2 = products4; _c < products4_2.length; _c++) {
    var product = products4_2[_c];
    console.log(product);
}
// Using the splice() function: remove the item from a specific index position
var products5 = ["Mobiles", "Tablets", "Television"];
products4.splice(1, 2);
for (var _d = 0, products4_3 = products4; _d < products4_3.length; _d++) {
    var product = products4_3[_d];
    console.log(product);
}
// declaring an array of any datatype
var manufacturers3 = [
    { id: "Samsung", checked: false },
    { id: "Apple", checked: false },
    { id: "Sony", checked: false },
];
console.log("Available products are: ");
for (var _e = 0, manufacturers3_1 = manufacturers3; _e < manufacturers3_1.length; _e++) {
    var item = manufacturers3_1[_e];
    console.log(item.id);
}
