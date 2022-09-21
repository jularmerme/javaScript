// Array Declarations
// 1. Using datatype[] declaration
var dataType = ["Samsung", "Apple", "Sony"];
// 2. Using Array<type> declaration
var arrayType = ["Samsung", "Apple", "Sony"];
// 3. Using any[] declaration
var anyType = ["Samsung", "Apple", "Sony"];
// Modify an existing Array
/**
 * 1. Using push function
 * Adding data using push function. Make sure that the type pushed data is same as array type,
 * or it will generate compilation error.
 */
var products = ["Mobiles", "Tablets"];
products.push("Television");
products.push("Air Conditioners");
/**
 * 2. Using index reference
 */
products[4] = "Sound System";
products[5] = "Microwave";
for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
    var product = products_1[_i];
    console.log("".concat(product));
}
// Removing elements from an Array
/**
 * 1. Using pop() function: this will remove the element in the last position
 */
products.pop();
console.log("Removing element from array using the pop() function");
for (var _a = 0, products_2 = products; _a < products_2.length; _a++) {
    var product = products_2[_a];
    console.log("".concat(product));
}
/**
 * 2. Using splice() function: This will remove theitem from a specific position
 */
products.splice(1, 2);
console.log("Removing element from array using the splice() function");
for (var _b = 0, products_3 = products; _b < products_3.length; _b++) {
    var product = products_3[_b];
    console.log("".concat(product));
}
// TRYOUT
// Declaring an array of any datatype
var manufacturers = [
    {
        id: "Samsung",
        checked: false
    },
    {
        id: "Motorola",
        checked: false
    },
    {
        id: "Apple",
        checked: false
    },
    {
        id: "Sony",
        checked: false
    },
];
console.log("Available Products are: ");
// logic to populate the above declared array's id value
for (var _c = 0, manufacturers_1 = manufacturers; _c < manufacturers_1.length; _c++) {
    var item = manufacturers_1[_c];
    console.log(item.id);
}
/**
 * Exercise: Arrays
 */
var mobiles = [
    {
        productName: "Samsung Galaxy Note 7",
        productPrice: 699,
        productAvailable: true
    },
    {
        productName: "Samsung Galaxy S6 Edge",
        productPrice: 630,
        productAvailable: true
    },
    {
        productName: "Nokia Lumia 640XL",
        productPrice: 224,
        productAvailable: false
    },
];
var counter = 0;
for (var _d = 0, mobiles_1 = mobiles; _d < mobiles_1.length; _d++) {
    var mobile = mobiles_1[_d];
    document.getElementById("pName".concat(counter)).innerHTML = "".concat(mobile.productName);
    document.getElementById("pPrice".concat(counter)).innerHTML = "".concat(mobile.productPrice);
    if (mobile.productAvailable)
        document.getElementById("pAvailable".concat(counter)).innerHTML = " Available";
    else
        document.getElementById("pAvailable".concat(counter)).innerHTML = " Out of Stock";
    counter++;
}
