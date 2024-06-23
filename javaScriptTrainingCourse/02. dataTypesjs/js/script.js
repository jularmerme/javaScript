// 1. Declare some variables of each type

var num = 10;
var str = "10 is my favorite number";
var bool = false;
var nullData = null;
var undefinedData = "";

/* Symbols allos us to create "hidden properties of an object, that no other part of code can 
      accidentally access or overwrite". */

var id = Symbol("id");
var Person = {
  firstName: "John",
  lastName: "Smith",
  toDo: ["eat", "sleep", "work", "exercise"];
  sayHi: () => {
    return `Hello ${firstName}!`;
  },
  [id]: 12345
};

// 2. Display each within their labelled spans

let numEx = document.querySelector("#num-ex");
let strEx = document.querySelector("#nstr-ex");
let boolEx = document.querySelector("#bool-ex");
let nullEx = document.querySelector("#null-ex");
let undEx = document.querySelector("#und-ex");
let objEx = document.querySelector("#obj-ex");
let symEx = document.querySelector("#sym-ex");

numEx.innerHTML = num;
strEX.innerHTML = str;

if(bool) {
  boolEx.innerHTML = "I'm true";
} else {
  boolEx.innerHTML = "I'm false";
}

if(!nullData) {
  nullEx.innterHTML = "no value is home for this variable";
}

if(!undData) {
  undEx.innerHTML = "Sorry, I was declare but not defined";
}

objEx.innerHTML = `${JSON.stringify(Person)}, sayHi(): ${Person.firstName}`;

// Within symbols you have to use [] to access the hidden keys in JS Objects
symEx.innerHTML = Person[id];