// Declaring a Category interface
interface Category {
  categoryName: string;
}

// Declaring a Product interface
interface Product {
  productName: string;
  productId: number;
}

// Declaring a ProductList interface which is extends from Category and Product interfaces
interface ProductList extends Category, Product {
  list: Array<string>;
}

// Declaring a variable which is type of ProductList interface
const productDetails: ProductList = {
  categoryName: "Gadget",
  productName: "Mobile",
  productId: 1234,
  list: ["Samsung", "Motorola", "LG"],
};

// Assigning list value of productDetails variable into another variable
const listProduct = productDetails.list;

// Assignig productName value of productDetails variable into another variable
const pname: string = productDetails.productName;

// line to populate Product name
console.log("Product Name is " + pname);

// line to populate Product list
console.log("Product List is " + listProduct);
