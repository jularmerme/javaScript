/**
 * Inheritance is the proces of extending a class from an already exisiting class and reuse the functions and
 * properties of the inherited class in the subclass
 *
 * Typescript supports inheritance with class, wherein the superclass functionalities can be reused within the subclass
 *
 * The subclass constructor function definition should invoke the superclass constructor using the super function
 *
 */
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
var Product0 = /** @class */ (function () {
    function Product0(productId) {
        // Class Gadget is extended from the class Product using extends keyword
        this.productId = productId;
    }
    Product0.prototype.getProduct = function () { };
    return Product0;
}());
var Gadget = /** @class */ (function (_super) {
    __extends(Gadget, _super);
    function Gadget(productName, productId) {
        var _this = 
        /**
         * super function is used to invoke superclass constructor inside the subclass constructor. If the subclass
         * has a constructor defined, then it is mandatory to invoke the super class constructor using the super function
         *  */
        _super.call(this, productId) || this;
        _this.productName = productName;
        return _this;
    }
    Gadget.prototype.getProduct = function () {
        // Using super keyword to access the superclass getProduct function inside the subclass overriden function
        _super.prototype.getProduct.call(this);
    };
    return Gadget;
}(Product0));
/**
 * TRYOUT
 */
// Declaring Product Class
var Product = /** @class */ (function () {
    function Product(productId) {
        this.productId = productId;
    }
    Product.prototype.getProduct = function () {
        console.log("Product id is : ".concat(this.productId));
    };
    return Product;
}());
// Declaring Gadget class which extends properties from Product class
var Gadget0 = /** @class */ (function (_super) {
    __extends(Gadget0, _super);
    function Gadget0(productName, productId) {
        var _this = _super.call(this, productId) || this;
        _this.productName = productName;
        return _this;
    }
    Gadget0.prototype.getProduct = function () {
        _super.prototype.getProduct.call(this);
        console.log("Product id is : ".concat(this.productId, ", product name is : ").concat(this.productName, "."));
    };
    return Gadget0;
}(Product));
// Gadget class object creation
var g = new Gadget0("Tablet", 10);
// Line to invoke getProduct method with the help of Gadget object
g.getProduct();
