interface Product {
  productId: number;
  productName: string;
}

function getProductDetails(productobj: Product): string {
  return "The product name is : " + productobj.productName;
}

// Correct way of using the interface type
const productObj = { productName: "Mobile", productId: 1001 };

// Incorrect way of using the interface type
// let productobj = { productCategory: "Gadget", productName: "Mobile" };

// declaring variable and invoking Product details function
const productDetails: string = getProductDetails(productObj);

// line to populate the created product on console
console.log(productDetails);
