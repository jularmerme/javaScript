// Declaring a variable which is type of ProductList interface
var productDetails = {
    categoryName: "Gadget",
    productName: "Mobile",
    productId: 1234,
    list: ["Samsung", "Motorola", "LG"]
};
// Assigning list value of productDetails variable into another variable
var listProduct = productDetails.list;
// Assignig productName value of productDetails variable into another variable
var pname = productDetails.productName;
// line to populate Product name
console.log("Product Name is " + pname);
// line to populate Product list
console.log("Product List is " + listProduct);
