/**
 * Generic Class
 *
 * Generic class is a class that works with multiple types
 *
 * Syntax: class className<T> {
 *    functionname(arg T): T;
 *    variablename: T;
 * }
 *
 * Example:
 *
 * class Gadget <T> {
 *    productList:Array<T>;
 *    addItems(newItemList: Array<T>): void {
 *      this.productList = newItemList;
 *      console.log("Item added")
 *    }
 *    getProductList(): Array<T> {
 *      return this.productList;
 *    }
 * }
 *
 * Consider the generic class given below:
 *
 * Example:
 *
 * let product = new Gadget<string>();
 * let productList:Array<string>=["Mobile","Tablet","Ipod"];
 * product.addItems(productList);
 * let allProducts:Array<string> = product.getProductList();
 * console.log(allProducts);
 *
 * let product2 = new Gadget<number>();
 * let shippingList:Array<number>=[123, 124, 125];
 * product2.addItems(shippingList);
 * console.log(allItems);
 *
 * The same class instance can be instatiated and invoked with different type parameters
 *
 */
// declaring a generic class gadget
var Gadget = /** @class */ (function () {
    function Gadget() {
    }
    Gadget.prototype.addItems = function (newItemsList) {
        this.productList = newItemsList;
        console.log("Item added");
    };
    Gadget.prototype.getProductList = function () {
        return this.productList;
    };
    return Gadget;
}());
// creation of reference variable of Gadget class with String array parameter
var product = new Gadget();
// Creation of reference variable of string array type
var productList = ["Mobile", "Table", "Ipod"];
// logic to add product list value to product object
product.addItems(productList);
// Creation of reference variable of String array to hold the return value of getProductList method
var allProducts = product.getProductList();
// line to populate the details of above declared reference variable
console.log("The availabe products are " + allProducts);
