// Declaring a function
function createCustomerId(name: string, id: number): string {
  return "The customer name is " + name + " and the id is " + id;
}

// Declaring a interface with function type
interface StringGenerator {
  (chars: string, nums: number): string;
}

// creating reference variable of above declared interface
let idGenerator: StringGenerator;

// assignement of function to interface reference variable
idGenerator = createCustomerId;

// Declaring a string paramenter to hold return value of function type interface
const customerId: string = idGenerator("Mr. Tom", 101);
let id2: string = idGenerator("Mr. Sam", 102);

// line to populate the customer details
console.log(customerId);
console.log(id2);
