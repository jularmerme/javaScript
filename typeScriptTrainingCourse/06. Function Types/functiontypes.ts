function getProductDetails(productName: string): string {
  return "Product: " + productName;
}

// Correct way of assigning
let productName: string = getProductDetails("Mobile");
console.log(productName);

// Incorrect way of assigning
let productName: number = getProductDetails("Mobile");
console.log(productName);
