/**
 * Inheritance is the proces of extending a class from an already exisiting class and reuse the functions and
 * properties of the inherited class in the subclass
 *
 * Typescript supports inheritance with class, wherein the superclass functionalities can be reused within the subclass
 *
 * The subclass constructor function definition should invoke the superclass constructor using the super function
 *
 */

class Product0 {
  protected productId: number;

  constructor(productId: number) {
    // Class Gadget is extended from the class Product using extends keyword
    this.productId = productId;
  }

  getProduct(): void {}
}

class Gadget extends Product0 {
  constructor(public productName: string, productId: number) {
    /**
     * super function is used to invoke superclass constructor inside the subclass constructor. If the subclass
     * has a constructor defined, then it is mandatory to invoke the super class constructor using the super function
     *  */
    super(productId);
  }
  getProduct(): void {
    // Using super keyword to access the superclass getProduct function inside the subclass overriden function
    super.getProduct();
  }
}

/**
 * TRYOUT
 */

// Declaring Product Class
class Product {
  protected productId: number;
  constructor(productId: number) {
    this.productId = productId;
  }
  getProduct(): void {
    console.log(`Product id is : ${this.productId}`);
  }
}

// Declaring Gadget class which extends properties from Product class
class Gadget0 extends Product {
  constructor(public productName: string, productId: number) {
    super(productId);
  }
  getProduct(): void {
    super.getProduct();
    console.log(
      `Product id is : ${this.productId}, product name is : ${this.productName}.`
    );
  }
}

// Gadget class object creation
const g = new Gadget0("Tablet", 10);

// Line to invoke getProduct method with the help of Gadget object
g.getProduct();
