/**
 * What is a Module?
 *
 * Modules help us in grouping aset of functionalities under a common name. the content of moudles cannot be
 * accessible outside unless exported
 *
 * Preced export keyword to the function, class, interface, etc. which you need to export from a module
 *
 */

/**
 *
 * Syntax: modulename.ts
 *
 * export function functionName{}
 * export class className{}
 * export interface interfaceName{}
 * export const constName:type = value;
 *
 */

/**
 *
 * Creating and using Modules
 *
 * The constructs of a module can be exported by one of the below approaches
 *
 * 1. Adding an export keyword in front of a function or a class or an interface
 *
 * 2. Adding an export keyword to a block of statements
 *
 */

export function MaxDiscountAllowed(noOfProduct: number): number {}

class Utility {
  CalculateAmount(price: number, quantity: number): number {}
}

// Exporting an interface
export interface Category {}

// Exporting a const
export const productName: string = "";

// Exporting class using export block. We can export all constructs together using export block
// instead of adding export keyword individually
export { Utility };

/**
 *
 * Using the import keyword, you can import a module within another module or another Typescript file. Provide the
 * file name as the module name while importing
 *
 * Once the module is imported, make use of the classes and the other constructs exported from the module
 *
 */

import {
  Utility,
  Category,
  productName,
  MaxDiscountAllowed,
} from "./module_demo";

let util = new Utility();
let price = util.CalculateAmount(1300, 4);

let discount = MaxDiscountAllowed(2);

console.log(`ProductName is : ${productName}`);

/**
 *
 * Also, alias names can be used while importing/exporting a module
 *
 * Using alis name for class while exporting
 * export { Utility as mainUtility };
 *
 * Importing exported alias class name
 * import { mainUtility } from "./module_demo";
 *
 * Giving alias name while importing
 * import { Utility as mainutil } from "./module_demo";
 *
 * Using * to assign it to an alias name to import all the constructs of a module
 * import * as mainutil from "./module_demo";
 *
 */

/**
 *
 * To compile the modules and the file which is using the module, compile them together using the tsc command.
 *
 * Syntax: tsc modulefile1.ts modulefile2.ts moduleusingfile.ts
 *
 */

/**
 *
 * Module Formats and Loaders
 *
 * Module format is the syntax that is used to defin a module in Javascript
 *
 * Modules in Typescript can be compiled to one of the module formats given below
 *
 * Supported Formats: AMD - Asynchronous Module Definition
 *                    CommonJS
 *                    ES2015 - EcmaScript 2015
 *                    System
 *                    UMD - Universal Module Definition
 *
 * Commonly we compile the modular code in Typescript to ES2015 format by using the --module ES2015 keyword
 * while performing the compilation
 *
 *        Syntax: tsc filename.ts --module ES2015
 *
 * If none of the formats are mentioned in the compiler option, by default CommonJS module format will be the one
 * that gets generated while compiling modules in Typescript
 *
 * A module loader interprets and loads a module written in a certain module format as well as helps in importing all
 * the dependent modules into developer working environment. At the runtime, they play a very vital role in loading
 * and configuring all needed dependencies modules before executing any linked module.
 *
 * The most commonly used module loaders in JavaScript are:
 *
 * SystemJs module loader for modules in AMD, CommonJS, UMD, or System.register format
 *
 * Require.js module loader for modules in AMD format
 *
 * On-demand functionalities can be loaded by modules, which is known as lazy loading. By using this feature while
 * executing our application all the declared modules are not loaded at the moment, it only loads needed modules
 * that are needed by the user to render the initial look of the application on the first load. Due to this
 * concept performance of the application can be enhanced as the initial startup time of the application
 * automatically decreases.
 *
 */
