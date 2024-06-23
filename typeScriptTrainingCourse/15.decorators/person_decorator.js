var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logIn(constructor) {
    var newconstructor = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.personName = "Bart";
        this.personSurname = "Simpson";
    };
    return newconstructor;
}
var Person = /** @class */ (function () {
    function Person(personName, personSurname) {
        this.personName = personName;
        this.personSurname = personSurname;
    }
    Person = __decorate([
        logIn
    ], Person);
    return Person;
}());
var p = new Person("John", "Smith");
console.log("The client name is: ".concat(p.personName));
console.log("The cliente surname is: ".concat(p.personSurname));
