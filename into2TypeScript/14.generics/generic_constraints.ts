/**
 * Generic Constraints
 *
 * Generic constraints are used to add constraints to the generic type
 *
 * Generic constraints are added using the 'extends' keyword
 *
 * Syntax: class className<T extends constraint type> {
 *    functionName(arg T): T;
 *    variableName: T;
 * }
 *
 * Consider the below code:
 *
 * Here you are trying to access the length property of the function type parameter
 * Since the parameter type will get resolved only at run time, this line will throw compilation
 *
 * Example:
 * // Creating generic function and accessing length property of parameter
 * function orderDetails<T>(arg:T): T {
 *    // Since parameter type will get resolved only at run time, this line throws compilation error "Property
 * length does not exist on type T"
 *    console.log(arg.length);
 *    return arg;
 * }
 *
 * To resolve this, you can add a constraint with the type parameter
 *
 * if you need to access a property on the type parameter, add those properties in an interface or class and extend the type parameter from the declared interface or class
 *
 * Let us rewrite the previous code:
 *
 * interface AddLength {
 *    length: number;
 * }
 *
 * function orderDetails<T extends AddLength>(arg: T): T {
 *    console.log(arg.length);
 *    return arg;
 * }
 *
 * To invoke this generic function, you can pass any parameter which has a length property
 *
 * // Implementing interface in class and passing class instance as function
 * // parameter. Since class has length property it executes successfully
 * class Product implements AddLength {
 *    length:number = 10;
 * }
 *
 * let product:Product = new Product();
 * let product1 = orderDetails(product);
 *
 * // Passing an array as parameter. Since array has length property by default this code works fine
 * let ordername:Array<string> = ['footwear', 'dress', 'cds', 'toys'];
 * let nameList = orderDetails(ordername);
 *
 */

// Declaring AddLength interface
interface AddLength {
  length: number;
}

// Declaring orderLength method with Generic constraints
function orderLength<T extends AddLength>(arg: T): T {
  const lengthValue = arg.length;
  console.log("Length is " + lengthValue);
  return arg;
}

// declaring a class Product implementing AddLength interface
class Product implements AddLength {
  length = 10;
}

// variable of Product class
const product: Product = new Product();

// creation of variable which holds the return value of orderLength method
const product1 = orderLength(product);

// line to populate the length of Product class on console
console.log(`Product Length ${product1.length}`);
