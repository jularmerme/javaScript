// logic to display the Product details with interface object as parameter
// tslint:disable-next-line:adjacent-overload-signatures
function getProductDetails(productobj) {
    return "the product name is : " + productobj.productName;
}
// Incorrect way of using the interface duck type
// let prodObject = { productName: "Mobile", productCategory: "Gadget" };
// declaring a variable along with interface properties
// Correct way of using the interface duck type
var prodObject = {
    productId: 1001,
    productName: "Mobile",
    productCategory: "Gadget"
};
// Declaring variable and invoking Product details function
var productDetails = getProductDetails(prodObject);
// line to populate the created product variable on console
console.log(productDetails);
