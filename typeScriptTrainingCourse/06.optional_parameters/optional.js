// The optional parameter is used to make a paramenter optional in a function while invoking the function
function getProductDetails(productName, productId) {
    return "Product: " + productName + " " + productId;
}
var productName = getProductDetails("Mobile");
console.log(productName);
// Default paramenter is used to assign the default value to a function parameter
function getProductDetails0(productName, productId) {
    if (productName === void 0) { productName = "Clothing"; }
    return "Product: " + productName + " " + productId;
}
var productName = getProductDetails0(101);
console.log(productName);
var productName = getProductDetails0(undefined, 101);
console.log(productName);
/**
 * TRYOUT
 */
// Declaring a function with optional parameter
function getMobileByManufacturer(manufacturer, id) {
    var mobileList;
    //logic to be evaluated if id parameter while invoking above declared function
    if (id) {
        if (id === 101) {
            mobileList = ["Moto G Play, 4th Gen", "Moto Z Play with Syle Mod"];
            return mobileList;
        }
    }
    // logic to return mobileList based on manufacturer category
    if (manufacturer === "Samsung") {
        mobileList = [
            " Samsung Galaxy S6 Edge",
            " Samsung Galaxy Note 7",
            "Samsung Galaxy J7 SM-J700F",
        ];
        return mobileList;
    }
    else if (manufacturer === "Apple") {
        mobileList = [" Apple iPhone 5s", " Apple iPhone 6s", " Apple iPhone 7"];
        return mobileList;
    }
    else {
        mobileList = [" Nokia 105", " Nokia 230 Dial Sim"];
        return mobileList;
    }
}
// statement to invoke function with optional parameter
console.log("The available mobile list : " + getMobileByManufacturer("Apple"));
// statement to invoke function with default parameter
console.log("The available mobile list: " + getMobileByManufacturer(undefined, 101));
