// Normal way to define properties in a class
class Product {
  private productId: number;

  // Passing parameter to constructor and setting private property with
  // value passed to constructor
  constructor(productId: number) {
    this.productId = productId;
  }
}

// Can be reduced to the following structure
class Product1 {
  // Initial line of declaration and setting of value inside constructor is removed and
  // parameter is declared with private keyword. The same is applicable for public or protected
  // keywords as well.
  constructor(private productId: number) {}
}

// Setters and Getters
class Product0 {
  productName: string;
}

let product = new Product0();

/**
 * Setting value of productName property outside class. This allows modifying
 * the productName property outside the class. However, if the productName
 * property is declared as private, then it cannot be accessed outside the class
 */
product.productName = "Fridge";

if (product.productName) {
  console.log(product.productName);
}

// Using setters and getters
class Product3 {
  private _productName: string;

  /**
   * Adding getter and setter using get and set keyword before the function name.
   * From the get function we are returning the _productName private property.
   * Inside the set function we are setting the value of _productName
   */
  get productName(): string {
    return this._productName;
  }
  set productName(newName: string) {
    this._productName = newName;
  }
}

/**
 * set function will get executed automatically whenever we try to
 * assign new value to property with same as set function name.
 */
let newProduct = new Product3();

newProduct.productName = "Fridge";

if (product.productName) {
  /**
   * get function will get executed automatically whenever we try
   * to access property with same name as get function name
   */
  console.log(product.productName);
}

/**
 * Demo
 */

let passcode = "secret passcode";

class Registration {
  private _productName: string;

  get productName(): string {
    return this._productName;
  }

  set productName(newName: string) {
    if (passcode && passcode == "secret passcode") {
      this._productName = newName;
    } else {
      console.log("Error: Unauthorized update of employee!");
    }
  }
}

let registration: Registration = new Registration();

registration.productName = "Fridge";

if (registration.productName) {
  console.log(registration.productName);
}
