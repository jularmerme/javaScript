// Declaring a Product interface
interface Product {
  displayProductName: (productId: number) => string;
  getProductDetails(): string[];
}

// Declaring Gadget class which implements Product interface
class Gadget implements Product {
  getProductDetails(): string[] {
    return ["Samsung", "LG", "Moto"];
  }
  displayProductName(productId: number): string {
    if (productId === 101) {
      return "Product Name is Mobile";
    } else if (productId === 201) {
      return "Product Name is Tablet";
    }
  }
  getGadget(): string[] {
    return ["Mobile", "Tablet", "iPad", "iPod"];
  }
}

// Creating instance of class of interface type
const gadget: Product = new Gadget();

// Creating variable to hold return value of displayProductName function
const productName: string = gadget.displayProductName(201);

// Line to populate Product name on console
console.log(productName);
