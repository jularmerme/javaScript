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
// Class definition
var Product = /** @class */ (function () {
    // Constructor declaration
    function Product(productId) {
        this.productId = productId;
    }
    Product.prototype.getProductId = function () {
        return "Product id is : " + this.productId;
    };
    return Product;
}());
// Creation of Product class object
var product = new Product(1223);
// line to populate the product id details
// Accessing productId outside class since it is declared using public keyword
console.log(product.getProductId());
var Product0 = /** @class */ (function () {
    function Product0(productId) {
        this.productId = productId;
    }
    return Product0;
}());
var product0 = new Product0(100);
console.log(product0.productId); // Error
// Protected access modifier
var Product1 = /** @class */ (function () {
    function Product1(productId) {
        this.productId = productId;
    }
    return Product1;
}());
var Gadget = /** @class */ (function (_super) {
    __extends(Gadget, _super);
    function Gadget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gadget.prototype.getProduct = function () {
        console.log("ProductId: ".concat(this.productId));
    };
    return Gadget;
}(Product1));
var g = new Gadget(900);
g.getProduct();
/**
 * Static Access Modifier
 */
var Product2 = /** @class */ (function () {
    function Product2() {
    }
    Product2.getProductDetails = function () {
        return "Product Name is : ".concat(Product2.productName);
    };
    Product2.prototype.getProduct = function () {
        return "Product Name is : ".concat(Product2.productName);
    };
    Product2.productName = "Mobile";
    return Product2;
}());
Product2.productName = "Tablet";
console.log(Product2.productName);
console.log(Product2.getProductDetails());
/**
 * TRYOUT
 */
// Declaring a Product class with access modifiers
var Product3 = /** @class */ (function () {
    // Declaration of constructor with 3 parameters
    function Product3(productId, productName, productCategory) {
        this.productId = productId;
        this.productName = productName;
        this.productCategory = productCategory;
    }
    // Method to display product id details
    Product3.prototype.getProductId = function () {
        console.log("The Product id is: " + this.productId);
    };
    Product3.productPrice = 150;
    return Product3;
}());
// Declaring a Gadget class extending the properties from Product class
var Gadget0 = /** @class */ (function (_super) {
    __extends(Gadget0, _super);
    function Gadget0() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // method to display productCategory property
    Gadget0.prototype.getProduct = function () {
        console.log("Product category is : " + this.productCategory);
    };
    return Gadget0;
}(Product3));
// Gadget Calls object creation
var m = new Gadget0(120, "Mobile", "Smartphone");
// Invoking getProduct method wih the help of Gadget object
m.getProduct();
// Invoking getProductId method with the help of Gadget object
m.getProductId();
// line to populate product name property with Gadget object
console.log("Product name is : " + m.productName);
// line to populate static property product price directly with Product class name
console.log("Product price is : " + Product3.productPrice);
