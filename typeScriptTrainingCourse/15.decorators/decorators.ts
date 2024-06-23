/**
 *
 * 1. Decorator is used for providing metadata and they are used to specify extra behavior of a class, method of a class
 *
 * 2. Decoratos are used for declarative programming
 *
 * 3. Decorators are used for implementing cross-cutting concerns
 *
 * 4. Angular2 makes use of decorators
 *
 * 5. @component, @inject, @service, @pipe are some of the built-in decorators used in Angular2 to apply metadata on classes to implement different concepts of Angular2
 *
 */

/**
 * 
 * A decorator is a kind of declaration that can modify or provide metadata for a property, method, or method parameter as well as for classes.
 * 
 * Decorators use @expression form, where expression can represent a business logic which would be called at runtime with needed information respectively
 * 
 * The developer needs to enable decorator through experimentalDecorators compiler option, either or two below mentioned ways can be used for the same
 * 
 * 
 * 1. throuhg the command line interface
 * 
 * 2. tsconfig.json
 * 
 * Using command line: tsc --target ES5 --experimentalDecorators
 * 
 * Using tsconfig.json
 * 
 *{
  "CompilerOptions": {
    "target": "ES5",
    "experimentalDecorators": true
  }
 }
 * 
 */

/**
 *
 * A class decorator is used just before a class declaration
 *
 * 1. It cvan be used to modifyu, observe or replace any class definition
 * 2. The class decorator can be applied to constructor of user defined class
 * 3. The class decorator at runtime overrides the original constructor logic with a new one, returns the only argument
 * 4. You can log, modify, or replace the original constructor within the class decorator function
 *
 * Defining decorator function with the constructor of the decorated function as the parameter
 * Syntax: function decoratorname(constructor: Function) {
 * . . .
 * }
 *
 * Applying decorator using @decoratorname
 * @decoratorname
 * class classname{}
 *
 */

function logClass(constructor: Function) {
  var newconstructor: any = function (...args) {
    this.productId = 890;
    this.productName = "Tablet";
  };
  return newconstructor;
}

@logClass
class Product {
  public productId: number;
  public productName: string;
  constructor(productId: number, productName: string) {
    this.productId = productId;
    this.productName = productName;
  }
}
