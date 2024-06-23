/**
 * Generic Interface
 *
 * Generic interface is an interface that works with multiple types
 *
 * Syntax: interface InterfaceName<T> {
 *   function(arg T): T;
 *   variablename: T;
 * }
 *
 * Example:
 *      interface Inventory<T> {
 *        addItem: (newItem: T) => void;
 *        getProductList: () => Array<T>;
 *      }
 *
 * This interface can be implemented by different classes with their own types
 *
 * class Gadget implements Inventory<string> {
 *    addItem(newItem:string): void {
 *      console.log("Item added");
 *    }
 *    productList:Array<string>=["Mobile", "Tablet", "Ipod"];
 *    getProductList():Array<string> {
 *      return this.productList;
 *    }
 * }
 * let productInventory: Inventory<string> = new Gadget();
 * let allProducts:Array<string> = productInventory.getProductList();
 *
 * class Shipping implements Inventory<number> {
 *    addItem(newItem:number):void {
 *      console.log("Item added");
 *    }
 *    shippingId:Array<number> = [123, 234, 543];
 *    getProductList():Array<number> {
 *      return this.shippingID;
 *    }
 * }
 *
 * let shippingInventory:Inventory<number> = new Shipping();
 * let shippingIDs:Array<number> = shippingInventory.getProductList();
 *
 *
 */
// declaring gadget class implementing generic interface inventory of string type
var Gadget = /** @class */ (function () {
    function Gadget() {
        // assigning string array value to variable
        this.productList = ["Mobile", "Tablet", "Ipod"];
    }
    Gadget.prototype.addItem = function (newItem) {
        console.log("Item added");
    };
    // method to populate the product list
    Gadget.prototype.getProductList = function () {
        return this.productList;
    };
    return Gadget;
}());
// creating the reference variable of string type Inventory interface holdin Gadget class object
var productInventory = new Gadget();
// loginc to store the product list information into a variable
var allProducts = productInventory.getProductList();
// line to populate the products details on console
console.log("The available products are : " + allProducts);
