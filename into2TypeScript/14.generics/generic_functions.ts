/**
 * Generic Functions
 *
 * Generic functions are functions declared with generic types
 *
 * Declaring feneric function is done unsing the type parameter and using the same type variable for the parameter
 * and the return type
 *
 * Syntax: function functionName<T>(arg:T): T
 *
 * Example:
 *
 * function printData<T>(data:T):T {
 *   return data;
 * }
 *
 * Invoking generic function using string type or any other primitive type
 * let data:string = printdata<string>('Hello Generics');
 *
 * class Product {
 *   productName:string;
 * }
 *
 * Invoking generic gunction using user defined object
 * let productData:Product = { productName: 'Tablet' };
 * let data2:Product = printData<Product>(productData);
 *
 */

// Declaring generic function named printData
function printData<T>(data: T) {
  return data;
}

// variable declaration to access generic function
const stringData: string = printData<string>("Hello Generics");

// line to populate the result of Generic function on console
console.log("String data " + stringData);
