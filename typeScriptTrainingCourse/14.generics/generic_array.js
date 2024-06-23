/**
 * Generic Array
 *
 * Array<T> provides us the option to use the same array declaration for different types of data when used along with a function
 *
 * <T> here represents the type parameter
 *
 * Syntax: function functionName<T>(arg: Array<T>): Array<T> {}
 *
 * Creating generic function to accept any type of array as parameter and return type
 *
 * function orderDetails<T>(arg: Array<T>): Array<T> {
 * }
 *
 * Declaring an array with type restriction as number and
 * passing the same as parameter to the generic function
 * let orderid:Array<number> = [102,103,104,105,106];
 * let idList = orderDetails(orderid);
 *
 * Declaring a string type array and passing the
 * same as parameter to the generic function
 * let ordername:Array<string> = ['footwear', 'dress', 'cds','toys'];
 * let nameList = orderDetails(ordername);
 *
 */
// Declaring a Generic Array named orderDetails
function orderDetails(arg) {
    console.log(arg.length);
    return arg;
}
// Creating a variable to hold a number array
var orderid = [101, 102, 103, 104];
// Creating a variable to hold a string array
var ordername = ["footwear", "dress", "cds", "toys"];
// Creating a variable to hold boolean array
var orderBoolean = [true, false, false];
// creating a variable to hold result of orderDetails function with a number array as parameter
var idList = orderDetails(orderid);
// Line to populate the result of line no 14
console.log(idList);
// Creating a variable to hold result of orderDetails function with a string array as parameter
var nameList = orderDetails(ordername);
// Line to populate the result of line no 20
console.log(nameList);
// Creating a variable to hold result of orderDetails function with boolean array as parameter
var booleanList = orderDetails(orderBoolean);
// Line to populate the result of line no
console.log(booleanList);
