/**
 *
 * Type Definition Files
 *
 * Why Type Definition File?
 *
 * 1. Type definition files are mainly used as Typescript wrapper for any JavaScript libraries to be used within the Typescript code
 * 2. They are used for compile-time type checking while accessing external JavaScript code within the Typescript code
 * 3. They provide type checking, auto-completion, and member documentation for the JavaScript code which is accessed within Typescript
 *
 *
 * What is the Type Definition File?
 *
 * 1. Type definition files are the files that contain type information for a JavaScript file or JavaScript library to be used within
 *    typesscript code
 * 2. They do not have any definition
 * 3. Type definition files will have the extension .d.ts
 * 4. They would have the declaration of functions, classes, modules, etc which is defined in that JavaScript file and which can be
 *    used within that Typescript code
 *
 */

/**
 *
 * Ambient Declarations
 *
 * 1. The ambient declarations are used to create type definition files for a specific JavaScript library or a JavaScript file
 * 2. The ambien declaration is basically used to tell Typescript what we are trying to describe a code that exists elsewhere and gets
 *    resolved at runtime
 * 3. They are a kind of contract we make with the compiler. If these do not exist at runtime and we try to use them then the execution
 *    breaks down.
 *
 * To create an ambient declaration, you can use a declare keyword. You can create an ambient module or class or interface or variable
 *
 * Syntax: //Declaring an ambient module
 *
 * declare module "modulename" {
 *    export function declaration;
 * }
 *
 * // Declaring an ambient class
 * declare class classname {
 *    function declaration;
 * }
 *
 * // Declaring an ambient interface
 * declare interface interfacename {
 *    function declaration;
 * }
 *
 * To use an ambient declaration we can use a triple slach reference
 *
 * Example: jquery.d.ts
 *
 * // Declaring class jQuery and $ function returning jQuery class inside file jquery.d.ts
 * declare class jQuery {
 *    html(html: string): void;
 * }
 *
 * test_ambient.ts
 *
 * Loading jquery.d.ts file using triple slash reference and accessing $ function and html function declared.
 * This will get resolved at runtime, upon adding jquery.js library file along with transpiled JavaScript file
 *
 * /// <reference path="jquery.d.ts" />
 * $("#id").html("");
 *
 */
