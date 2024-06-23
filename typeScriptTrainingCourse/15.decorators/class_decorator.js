var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function invoke(constructor) {
    // the new constructor behavior
    var newconstructor = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.productId = 908;
        this.productName = "Tablet";
    };
    //return newconstructor will override the original constructor
    return newconstructor;
}
var Product = /** @class */ (function () {
    function Product(productId, productName) {
        this.productId = productId;
        this.productName = productName;
    }
    Product = __decorate([
        invoke
    ], Product);
    return Product;
}());
var p = new Product(326, "Mobile");
console.log("Product id is: ".concat(p.productId));
console.log("Product name is: ".concat(p.productName));
