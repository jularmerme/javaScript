// Declaration for my target HTML element
var parentDiv = document.getElementById("example");

// Make an array
const dbzCharacters = ["Goku", "Vegeta", "Piccolo", "Krillan", "Yamcha"];
let element = document.createElement("h3");
element.innerHTML = `Accessing an element from array: ${dbzCharacters[1]}`;

parentDiv.append(element);

let horLine = document.createElement("hr");
parentDiv.append(horLine);

let header = document.createElement("h2");
header.innerHTML = "Full DBZ character List";
parentDiv.append(header);

/* for (let i = 0; i <= dbzCharacters; i++) {
  const character = dbzCharacters(index);
  var placeholder = document.createElement("p");
  placeholder.innertHTML = character;
  container.append(placeholder);
} */

dbzCharacters.forEach((element) => {
  let placeholder = document.createElement("span");
  placeholder.innerHTML = "element";
  container.append(placeholder);
});

for (const char in dbzCharacters) {
  if (Object.hasOwnProperty.call(dbzCharacters, char)) {
    const person = dbzCharacters[char];
    let placeholder = document.createElement("h5");
  }
}
