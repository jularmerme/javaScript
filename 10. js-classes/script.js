class ClassMates {
  /**  JS classes give us the ability to implement OOP in JS
   * were introduced in ES6
   *  so we can make constructors and functions that can be used in other parts of our JS code
   **/

  constructor(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
  }

  displayInfo() {
    return `${this.name} ${this.age} years old and is studying ${this.course}`;
  }
}

let classmate = new ClassMates("bart", 8, "history");

console.log(classmate.displayInfo());

/**
 *
 * Why use JS classes?
 *
 * - They offer an improved means for creating object templates
 * - replace the previous means of using constructor functions for objects
 * - Make our code more manageble and reusable in other parts of our JS code
 *
 * How to convert our class data into JSON and back
 * JSON object in JS gives us acces to two methods
 * 1. stringify() => Will convert any JS Object into JSON string
 * 2. parse() => Will turn any JSON string into a JS object
 *
 */

console.log(person);
