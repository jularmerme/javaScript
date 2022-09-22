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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
    return function (target, propertyKey, descriptor) {
        return {
            value: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                console.log("Arguments: ", args.join(", "));
                var result = descriptor.value.apply(target, args);
                console.log("Total payable amount is: ", result);
                return result;
            },
        };
    };
}
var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.calculateAmountPayable = function (price, quantity) {
        return price * quantity;
    };
    __decorate([
        logMethod()
    ], Product.prototype, "calculateAmountPayable", null);
    return Product;
}());
var p = new Product();
p.calculateAmountPayable(220, 3);
