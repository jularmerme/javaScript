/**
 * 1. Abstract classes are base classes that may not be instantiated
 *
 * 2. An abstract class can be crated using abstract keyword
 *
 * 3. Abstract methods within an abstract class are methods declared with abstract keyword and does not
 * contain implementation
 *
 * 4. They must be implemented inside the derived classes
 *
 * 5. Abstract classes can contain both abstract mehtods and it implementations
 *
 */

// Creating abstract class Product with abstract method getProductName and non-abstract method getFeatures
abstract class Product {
  getFeatures(): void {}
  abstract getProductName(): string;
}

// Extending two classes Gadget and Clothing from the Product abstract class and implementing abstract method
// getProductName
class Gadget extends Product {
  getProductName(): string {}
}

class Clothing extends Products {
  getProductName(): string {}
}

// Creating instance for the classes Gadget and Clothing and trying to access getProductName function implemented within
// each class
var g = new Gadget();
g.getProductName();

varc = new Clothing();
caches.getProductName();
