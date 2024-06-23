// Class definition
class Product {
  static productPrice: string;

  // Declaring productId property using public keyword
  public productId: number;

  // Constructor declaration
  constructor(productId: number) {
    this.productId = productId;
  }

  getProductId(): string {
    return "Product id is : " + this.productId;
  }
}

// Creation of Product class object
var product: Product = new Product(1223);

// line to populate the product id details
// Accessing productId outside class since it is declared using public keyword
console.log(product.getProductId());

class Product0 {
  //Declariong productId properlty using private keyword
  private productId: number;

  constructor(productId: number) {
    this.productId = productId;
  }
}

var product0: Product0 = new Product0(100);

console.log(product0.productId); // Error

// Protected access modifier
class Product1 {
  protected productId: number;

  constructor(productId: number) {
    this.productId = productId;
  }
}

class Gadget extends Product1 {
  getProduct(): void {
    console.log(`ProductId: ${this.productId}`);
  }
}

var g: Gadget = new Gadget(900);
g.getProduct();

/**
 * Static Access Modifier
 */

class Product2 {
  static productName: string = "Mobile";

  static getProductDetails(): string {
    return `Product Name is : ${Product2.productName}`;
  }

  getProduct(): string {
    return `Product Name is : ${Product2.productName}`;
  }
}

Product2.productName = "Tablet";
console.log(Product2.productName);
console.log(Product2.getProductDetails());

/**
 * TRYOUT
 */

// Declaring a Product class with access modifiers
class Product3 {
  static productPrice = 150;
  private productId: number;
  public productName: string;
  protected productCategory: string;

  // Declaration of constructor with 3 parameters
  constructor(productId: number, productName, productCategory) {
    this.productId = productId;
    this.productName = productName;
    this.productCategory = productCategory;
  }

  // Method to display product id details
  getProductId() {
    console.log("The Product id is: " + this.productId);
  }
}

// Declaring a Gadget class extending the properties from Product class
class Gadget0 extends Product3 {
  // method to display productCategory property
  getProduct(): void {
    console.log(`Product category is : ` + this.productCategory);
  }
}

// Gadget Calls object creation
const m: Gadget0 = new Gadget0(120, "Mobile", "Smartphone");

// Invoking getProduct method wih the help of Gadget object
m.getProduct();

// Invoking getProductId method with the help of Gadget object
m.getProductId();

// line to populate product name property with Gadget object
console.log("Product name is : " + m.productName);

// line to populate static property product price directly with Product class name
console.log("Product price is : " + Product3.productPrice);
