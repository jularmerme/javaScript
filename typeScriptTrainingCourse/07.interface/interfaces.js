function getProductDetails(productobj) {
    return "The product name is : " + productobj.productName;
}
// Correct way of using the interface type
var productObj = { productName: "Mobile", productId: 1001 };
// Incorrect way of using the interface type
// let productobj = { productCategory: "Gadget", productName: "Mobile" };
// declaring variable and invoking Product details function
var productDetails = getProductDetails(productObj);
// line to populate the created product on console
console.log(productDetails);
