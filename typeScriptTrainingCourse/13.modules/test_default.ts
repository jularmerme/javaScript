import Product, { Utility } from "./default_export";

const product = new Product();
const details = product.getProductDetails(1001);
console.log(details);

const util = new Utility();
const price = util.CalculateAmount(1300, 4);
console.log(`the price is ${price}`);
