function logClass(constructor: Function) {
  const newconstructor: any = function (...args) {
    this.personName = "Bart";
    this.personSurname = "Simpson";
  };
  return newconstructor;
}

@logClass
class Person {
  public personName;
  public personSurname;
  constructor(personName: string, personSurname: string) {
    this.personName = personName;
    this.personSurname = personSurname;
  }
}

const p = new Person("John", "Smith");
console.log(`The client name is: ${p.personName}`);
console.log(`The cliente surname is: ${p.personSurname}`);
