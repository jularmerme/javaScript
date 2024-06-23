// CustomerCreditInfo tuple with 3 different type of data
// var CustomerCreditInfo: [string, Customer, number];
// CustomerCreditInfo = ["I342", new Customer("I342"), 3000];

let productAvailable: [string, boolean];

// productAvailable = ["Samsung Galaxy J7", true];
// productAvailable = ["Samsung Galaxy J7", false, "Samsung Galaxy J7", false];
// productAvailable.push("Samsung Galaxy J5", false);
// productAvailable.push(false, "Samsung Galaxy J8");
// productAvailable.push(false, "Samsung Galaxy J8", false, "Samsung Galaxy J8");

let productName;
let availability;

// assign value to Tuple
productAvailable = ["Samsung Galaxy J5", false];

// Adding new value to Tuple
productAvailable.push("Samsun Galaxy J5", false);

// logic to check product availability based on datatype of declared Tuple variable
for (const item of productAvailable) {
  if (typeof item === "string") {
    productName = item;
  } else if (typeof item === "boolean") {
    availability = item;
    if (availability === true) {
      console.log(`The product ${productName} is available`);
    } else {
      console.log(`The product ${productName} is not available`);
    }
  }
}
