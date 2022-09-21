var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Abstract class Product declaration
var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.getFeatures = function () {
        return;
    };
    return Product;
}());
// Declaring Gadget class extending abstract class Product
var Gadget = /** @class */ (function (_super) {
    __extends(Gadget, _super);
    function Gadget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gadget.prototype.getProductName = function () {
        return "Product name is Mobile";
    };
    Gadget.prototype.getFeatures = function () {
        return "This product has camera feature";
    };
    return Gadget;
}(Product));
// Declaring Clothing class extending abstract class Product
var Clothing = /** @class */ (function (_super) {
    __extends(Clothing, _super);
    function Clothing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Clothing.prototype.getProductName = function () {
        return "Product name is Shirt";
    };
    return Clothing;
}(Product));
// Gadget class object creation
var g = new Gadget();
// Line to invoke getProductName() through Gadget object
console.log(g.getProductName());
console.log(g.getFeatures());
// Clothing class object creation
var c = new Clothing();
// Line to invoke getProductName() through Clothing object
console.log(c.getProductName());
