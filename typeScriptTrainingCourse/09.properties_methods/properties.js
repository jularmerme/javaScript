// Normal way to define properties in a class
var Product = /** @class */ (function () {
    // Passing parameter to constructor and setting private property with
    // value passed to constructor
    function Product(productId) {
        this.productId = productId;
    }
    return Product;
}());
// Can be reduced to the following structure
var Product1 = /** @class */ (function () {
    // Initial line of declaration and setting of value inside constructor is removed and
    // parameter is declared with private keyword. The same is applicable for public or protected
    // keywords as well.
    function Product1(productId) {
        this.productId = productId;
    }
    return Product1;
}());
// Setters and Getters
var Product0 = /** @class */ (function () {
    function Product0() {
    }
    return Product0;
}());
var product = new Product0();
/**
 * Setting value of productName property outside class. This allows modifying
 * the productName property outside the class. However, if the productName
 * property is declared as private, then it cannot be accessed outside the class
 */
product.productName = "Fridge";
if (product.productName) {
    console.log(product.productName);
}
// Using setters and getters
var Product3 = /** @class */ (function () {
    function Product3() {
    }
    Object.defineProperty(Product3.prototype, "productName", {
        /**
         * Adding getter and setter using get and set keyword before the function name.
         * From the get function we are returning the _productName private property.
         * Inside the set function we are setting the value of _productName
         */
        get: function () {
            return this._productName;
        },
        set: function (newName) {
            this._productName = newName;
        },
        enumerable: false,
        configurable: true
    });
    return Product3;
}());
/**
 * set function will get executed automatically whenever we try to
 * assign new value to property with same as set function name.
 */
var newProduct = new Product3();
newProduct.productName = "Fridge";
if (product.productName) {
    /**
     * get function will get executed automatically whenever we try
     * to access property with same name as get function name
     */
    console.log(product.productName);
}
/**
 * Demo
 */
var passcode = "secret passcode";
var Registration = /** @class */ (function () {
    function Registration() {
    }
    Object.defineProperty(Registration.prototype, "productName", {
        get: function () {
            return this._productName;
        },
        set: function (newName) {
            if (passcode && passcode == "secret passcode") {
                this._productName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Registration;
}());
var registration = new Registration();
registration.productName = "Fridge";
if (registration.productName) {
    console.log(registration.productName);
}
