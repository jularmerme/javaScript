/**
 *
 * Type Aliases
 *
 * Type Aliases is a custom or hand-written name provided to an existing data type of Typescript. The alias names can be used for
 * several types including simple, tuple, or other existing primitive types. This feature makes the declararion clear and easy.
 *
 * Let us learn type aliases in detail.
 *
 * The developer would have declared some variable using simple, union, or intersectin data types which are no longer available in
 * the current Typescript definition. Due to this issue developer needs to modify the previously declared definition at respective
 * places to dyanmaically check the type of data to that variable
 *
 * Let us consider the developer need to declare a variable named pCount(productCount) of a Product object. This variable should have
 * the feasibilitiy to hold a number, a string, or an undefined data type based on the requirement
 *
 * To achieve this requirement union types can be used while declaring this variable as shown below
 *
 * let pCount: number | string | undefined = 10;
 *
 * In the above example, union types hve been used to define a pCount variable which can hold three different data
 * types(number/string/undefined)
 * When you use this data in many places of our code, to enforce type chekcing repeating this long definition may affect the
 * readability and maintainability
 *
 * function getProductDetail(pName: string, pCount: number | string | undefined) {
 *    console.log(`Name: ${pName}; Count: ${pCount}`);
 * }
 *
 * let pName: string = "Samsung Galaxy J7"
 * let pCount: number | string | undefined = 10;
 * getProductDetail(pName, pCount);
 *
 * A developer can simplify this definition by adding a type that gives the same exact definition with a customized name and
 * skims the code using type in Typescript/
 *
 * Let us understand about type
 *
 * Type aliases help us to have meaninful name for existing datatypes aligned with the purpose of the variable. It confirms the new
 * name interprets the same declaration.
 *
 * Syntax
 *
 * 1. type Meaningfulname = < an existing Typescript type>
 *
 * Let us try to create a type to define the pCount parameter of getProductDetail function
 *
 * type ProdCountType = number | string | undefined;
 *
 * function getProductDetail(pName: string, pCount: ProdCountType) {
 *    console.log(`Name: ${pName}; Count: ${pCount}`)
 * }
 *
 * getProductDetail("Samsung Galaxy 10", 2);
 * getProductDetail("Lenovo Note 3", "No Stock!");
 * getProductDetail("Redmi 5", undefined);
 *
 *
 * Thus, type adds a custom name according to the usage of data type for a specific variable. You can make use of types for simple,
 * union, function, arrays, and objects types of data
 */

/* Let us explore more in detail.
 *
 * How to create Type Alias? Simple & Union Types
 *
 * Let us explore how to create type aliases for different constructs.
 /

 /**
 *
 * Simple Types:
 *
 * The Developer can add a custom name for the simple data type
 *
 * In the below code the ProductIdNum variable can accept only a number data type. The type has been used to add a custom name
 *
 */

type ProductIdNum = number;

function getProduct(id: ProductIdNum) {
  console.log(`Product found for id ${id}`);
}

getProduct(1002);
getProduct(null); // Error: argument type is not a number

/**
 *
 * Union Types:
 *
 * If the developer needs to hold more than one data type, then union types can be used for this requirement
 * In the below code, the ProdCountType can hold a number, string, or undefined values
 *
 */

type ProdCountType = number | string | undefined;

function getProductDetail(pName: string, pCount: ProdCountType) {
  console.log(`Name: ${pName} ; Count: ${pCount}`);
}

getProductDetail("Samsung Galaxy 10", 2);
getProductDetail("Lenovo Note 3", "No Stock!");
getProductDetail("Redmi 5", undefined);

/**
 *
 * Function Types
 *
 * If the developer needs to define a name of a function definition, then Function types can be used.
 * In the below code a function (PromoCodeGenerator) is defined with a set of parameters and return type to specify a type
 *
 */

type PromoCodeGenerator = (pName: string, pId: number) => string;

let generator: PromoCodeGenerator = function (
  pName: string,
  pId: number
): string {
  return pName.substr(0, 4).toLocaleUpperCase() + pId;
};

let offer = generator("Lenovo 3", 1002);
console.log(`Please use the Promocode: ${offer}`);

/**
 *
 * Object Types
 * Object types help the developer to enforce Type Checking on the object without interfaces. This feature benefits developers in
 * writing interface independent object type
 *
 */

type ProductStatusObject = { pId: string; availability: boolean };

function checkProductAvailability(product: ProductStatusObject) {
  if (product.availability == true) {
    console.log(`${product.pId} is available`);
  } else {
    console.log(`${product.pId} is not available`);
  }
}

let product1: ProductStatusObject = { pId: "LENOVO9098", availability: true };
checkProductAvailability(product1);
let product2: ProductStatusObject = { availability: false, pId: "SAMSUNG9911" };
checkProductAvailability(product2);

/**
 *
 * Array Types
 *
 * It helps developers to create an array of dissimilar records
 * In the below code an array(AvailabilityArray) is created for checking the availability of the product
 *
 */

type ProductStatusObject = { pId: string; availability: boolean };

type AvailabilityArray = [ProductStatusObject];

let product1: ProductStatusObject = { pId: "LENOVO9912", availability: true };
let product2: ProductStatusObject = { pId: "REDMI8878", availability: false };
let product3: ProductStatusObject = { pId: "SAMSU5633", availability: false };
let product4: ProductStatusObject = { pId: "OPPO1128", availability: true };

let products: AvailabilityArray = [product1];
products.push(product2, product3, product4);

let availableProducts = products.filter((product) => product.availability);
console.log(availableProducts);

/**
 *
 * Generic Types
 *
 * The developer can also work with generic types that have type alias name
 *
 * In the below example ProductCatelog is created to work with different types of product category code
 *
 */

type ProductCatelog<T> = { pCategoryCode: T; availableProducts: Array<T> };

function availableProducts<T>(pCatelog: ProductCatelog<T>) {
  console.log(
    `Products on category code ${pCatelog.pCategoryCode}: ${pCatelog.availableProducts}`
  );
}

// ProductCatelog by code number
let productByCodeNumber: ProductCatelog<number>;
productByCodeNumber = {
  pCategoryCode: 12321,
  availableProducts: [23432, 12342, 12342],
};
availableProducts(productByCodeNumber);

// ProductCatelog by code string
let productByCodeString: ProductCatelog<string>;
productByCodeString = {
  pCategoryCode: "PCC2022",
  availableProducts: ["Pr4566", "Pr7788", "Pr9090"],
};
availableProducts(productByCodeString);

/**
 *
 * Type Literals
 *
 * Literals help a developer to create possible static values as the data to a variable
 *
 * In the below example rating variable is defined with possible union types
 *
 */

type ratings = "Good" | "Average" | "Excellent" | 0;

let customerFeedback1: ratings = "Good";
let customerFeedback2: ratings = 0;
let customerFeedback3: ratings = "Not bad"; // Error: could not find literal value match

/**
 *
 * Interfaces
 *
 * * In Typescript, interfaces focues on the Type Checking feature. It defines and shapes a construct
 * * It allows optional, readOnly properties
 * * It allows callable and static properties
 * * Interfaces can be extended by other Interfaces and Type Aliases
 *   Ex: interface Result extends score, Grade {}
 * * It can be implemented by a class
 * * Interface addresses declaration merging
 *
 * Type Aliases
 *
 * * Type aliases is a custom or hand-written name provided to an existing data type of Typescript
 * * It allows optional, readOnly properties
 * * It allows callable and static properties
 * * Type aliases cannot be extended by other interfaces and Type Aliases
 *   Intersections will help in Type Aliases to do extending
 *   Ex: type Result = Score & Grade
 * * It can be implemented by a class and extended by an interface
 * * Type Aliases do not address declaration merging
 *
 *
 */
