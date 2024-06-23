// Declaring a function
function createCustomerId(name, id) {
    return "The customer name is " + name + " and the id is " + id;
}
// creating reference variable of above declared interface
var idGenerator;
// assignement of function to interface reference variable
idGenerator = createCustomerId;
// Declaring a string paramenter to hold return value of function type interface
var customerId = idGenerator("Mr. Tom", 101);
var id2 = idGenerator("Mr. Sam", 102);
// line to populate the customer details
console.log(customerId);
console.log(id2);
