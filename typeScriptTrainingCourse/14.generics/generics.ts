/**
 *
 * why Generics?
 *
 * Generics helps us to avoid writing the same code again for different data types.
 *
 * In Typescript, generics are used along:
 *
 * 1. with function to invoke the same array declaration with a different set of typed values
 *
 * 2. with Array to access the same array declaration with a different set of typed values
 *
 * 3. with Inte3rface toi mplemnet the same interface declaration by different classes with different types
 *
 * 4. with a class to access the same class with different types while instantiating it
 *
 */

/**
 *
 * What is Generics?
 *
 * Generics is a concept using which we can make the same code work for multiple types.
 *
 * It accepts type paramenters for each invocation of a function or a class or an interface so that the same code can be used for multiple types.
 *
 * Consider the below code where you implemnt a similiar function for two different types of data
 *
 */

function printString(stringData: string): string {
  return stringData;
}

function printNumber(numberData: number): number {
  return numberData;
}

/**
 * Avoid writing the same code again for different types using generics. Let us rewrite the above code using generics
 */

function printData<T>(data: T): T {
  return data;
}

/**
 *
 * <T> represents type parameter
 *
 * It generalizing type of parameter
 * and function return type
 *
 * Same code works for number or
 * string or any other type of parameter
 *
 */
