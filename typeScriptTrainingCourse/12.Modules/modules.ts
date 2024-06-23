/**
 * 1. Modules and Namespaces are useful in grouping functionalities under a common name.
 *
 * 2. the main is reusability
 *
 * 3. Code can be reused by importing modules or namespaces in other files
 *
 * 4. Namespaces are used for namespace reolution and are suitable for the development of a smaller application
 *
 * 5. In larger-scale applications, they can be used to achieve modularity
 *
 * Typescript provide native support in terms of moudle loaders using modules concept which takes care of all the
 * concerns with respect to modularity
 *
 * In the MobileCart application, create a product utiliy namespace or module and place the code related to the
 * product in it. Reuse the code related to the product by importing it into other files.
 *
 * Let us discuss more on Namespace and Module in Typescript
 *
 */

/**
 * What is Namespace?
 *
 * A Namespace is used to group functions, classes or interfaces under a common name
 *
 * 1. The content of namespaces is hidden by default unless they are exported
 *
 * 2. Use nested namespaces if required
 *
 * 3. The function or any construct which is not exported cannot be accessible outside the namespace
 *
 * Syntax: namespace namespacename {
 *  // We can have a namespace nested within another namespace and export
 *  // the inner namespace if required
 *   export namespace namespacename {
 *     export namespace function functionname {
 *     }
 *   }
 *
 *   // Precede the function or interface or class which you need to export
 *   // with an export keyword
 *   export function functionname {
 *   }
 *
 * }
 *
 */

/**
 * In the below example, create a namespace called Utility and group a function MaxDiscountAllowed and a nested
 * namespace called payment inside it
 *
 * namespace Utility {
 *   // Nested namespace
 *   export namespace Payment {
 *     export function CalculateAmount(price: number, quantity:number): number {
 *     }
 *   }
 *
 *   export function MaxDiscountAllowed(noOfProduct: number): number {
 *   }
 *
 *   // Private function which is not been exported
 *   function privateFunc():void {}
 *
 * }
 *
 */

/**
 *
 * To import the namespace and use it, make use of the triple slash reference tag
 *
 * ///<reference path="./namespacefilename.ts" />
 *
 * // importing nested namespace
 * import util = Utility.Payment;
 *
 * // invoking exported namespace function
 * let paymentAmount = util.CalculateAmount(1200, 6);
 * console.log(`Amount to be paid: ${paymentAmount}`);
 *
 * let discount = Utility.MaxDiscountAllowed(6);
 * console.log(`Maximum discount allowed is ${discount}`);
 *
 * // invoking non-exported function will throw compilation error
 * Utility.privateFunc(); => Error
 *
 */
