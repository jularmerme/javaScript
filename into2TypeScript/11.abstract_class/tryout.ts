// Abstract class Product declaration
abstract class Product {
  getFeatures(): string {
    return;
  }
  abstract getProductName(): string;
}

// Declaring Gadget class extending abstract class Product
class Gadget extends Product {
  getProductName(): string {
    return `Product name is Mobile`;
  }
  getFeatures(): string {
    return `This product has camera feature`;
  }
}

// Declaring Clothing class extending abstract class Product
class Clothing extends Product {
  getProductName(): string {
    return `Product name is Shirt`;
  }
}

// Gadget class object creation
const g = new Gadget();

// Line to invoke getProductName() through Gadget object
console.log(g.getProductName());
console.log(g.getFeatures());

// Clothing class object creation
const c = new Clothing();

// Line to invoke getProductName() through Clothing object
console.log(c.getProductName());
