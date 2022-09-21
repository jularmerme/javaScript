// Declaring Gadget class which implements Product interface
var Gadget = /** @class */ (function () {
    function Gadget() {
    }
    Gadget.prototype.getProductDetails = function () {
        return ["Samsung", "LG", "Moto"];
    };
    Gadget.prototype.displayProductName = function (productId) {
        if (productId === 101) {
            return "Product Name is Mobile";
        }
        else if (productId === 201) {
            return "Product Name is Tablet";
        }
    };
    Gadget.prototype.getGadget = function () {
        return ["Mobile", "Tablet", "iPad", "iPod"];
    };
    return Gadget;
}());
// Creating instance of class of interface type
var gadget = new Gadget();
// Creating variable to hold return value of displayProductName function
var productName = gadget.displayProductName(201);
// Line to populate Product name on console
console.log(productName);
