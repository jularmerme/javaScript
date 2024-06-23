/**
 *
 * A method decorator are declared before needed method declaration
 *
 * 1. They are used to modify, observe, or replace a method definition
 *
 * 2. The decorator logic is applied to the Property Descriptor attribute of the respective method
 *
 * The method decorator function will be invoked at runtime with the below three arguments
 *
 * target - Either the constructor function of the class for a static  member or the prototype of the class for an instance member
 *
 * Key - name of the decorated method
 *
 * descriptor - Property descriptor value of the method
 *
 */

/* Syntax: function methoddecoratorname() {
  // Method decorator function with target, decorated methodname and PropertyDescriptor as parameters
  return function(target, propertyKey: string, descriptor: PropertyDescriptor) {
    ...
  }
}

class Product {
  // Applying method decorator on top of method
  @methoddecoratorname()
  functionname(arg:type) {
    ...
  }
} */

function logMethod() {
  return (target, propertyKey: string, descriptor: PropertyDescriptor) => {
    return {
      value: (...args: any[]) => {
        console.log("Arguments: ", args.join(", "));
        const result = descriptor.value.apply(target, args);
        console.log("Total payable amount is: ", result);
        return result;
      },
    };
  };
}

class Product {
  @logMethod()
  calculateAmountPayable(price: number, quantity: number) {
    return price * quantity;
  }
}

const p: Product = new Product();
p.calculateAmountPayable(220, 3);
