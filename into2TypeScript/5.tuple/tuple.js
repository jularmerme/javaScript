// customerCreditInfo type with 3 different types of data
// var customerCreditInfo: [string, Customer, number];
// customerCreditInfo = ["I342", new customerCreditInfo("I342"), 3000];
var productAvailable;
productAvailable = ["Samsung Galaxy J7", true];
// productAvailable = ["Samsung Galaxy J7", false, "Samsung Galaxy J7", false];
productAvailable.push("Samsung Galaxy J5", false);
productAvailable.push(false, "Samsung Galaxy J8");
productAvailable.push(false, "Samsung Galaxy J8", false, "Samsung Galaxy J8");
console.log(productAvailable);
/**
 * TRYOUT
 */
// Declaring a Tuple
var productAvailableTryout;
var productName;
var availability;
// Assigning value to Tuple
productAvailableTryout = ["Samsung Galaxy J7", true];
// Adding new value to Tuple
productAvailableTryout.push("Samsung Galaxy J5", false);
// Logic to check product availability based on datatype of declared Tuple variable
for (var _i = 0, productAvailableTryout_1 = productAvailableTryout; _i < productAvailableTryout_1.length; _i++) {
    var item = productAvailableTryout_1[_i];
    if (typeof item === "string") {
        productName = item;
    }
    else if (typeof item === "boolean") {
        availability = item;
        if (availability === true) {
            console.log("The product ".concat(productName, " is available"));
        }
        else if (availability === false) {
            console.log("The product ".concat(productName, " is not available"));
        }
    }
}
