function invoke(constructor: Function) {
  // the new constructor behavior
  const newconstructor: any = function (...args) {
    this.productId = 908;
    this.productName = "Tablet";
  };
  //return newconstructor will override the original constructor
  return newconstructor;
}

@invoke
class Product {
  public productId: number;
  public productName: string;
  constructor(productId: number, productName: string) {
    this.productId = productId;
    this.productName = productName;
  }
}

const p = new Product(326, "Mobile");
console.log(`Product id is: ${p.productId}`);
console.log(`Product name is: ${p.productName}`);
