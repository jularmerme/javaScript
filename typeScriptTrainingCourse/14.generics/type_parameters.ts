/**
 * what are type parameters?
 *
 * type parameters are used to specify the type, a generic will work over
 *
 * They are listed using an angle bracket <>
 *
 * The actual type will be provided while invoking function or instance creation
 *
 * Consider a generic function given below
 *
 * function printData<T>(data:T):T {
 *   return data;
 * }
 *
 * To access this function with different types you will use the below code:
 *
 */

/**
 * Invoking function using type parameter by passing type
 * inside the <> bracket. In this case, type of parameter and
 * function return type will be dependent on type parameter
 */
let data = printData<string>("Hello Generics");
console.log(data);

/**
 * Invoking generic function without type parameter
 * Here type is decided depending on parameter type
 */
let data = printData("Hello Generics");
console.log(data);

/**
 * Invoking generic function with number type parameter
 */
let data1 = printData(123);
console.log(data1);
