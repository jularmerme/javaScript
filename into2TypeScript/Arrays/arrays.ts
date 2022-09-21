const models: any[] = [
  {
    productName: "Samsung Galaxy Note 7",
    productPrice: 699,
    productAvailable: true,
  },
  {
    productName: "Samsung Galaxy S6 Edge",
    productPrice: 630,
    productAvailable: true,
  },
  {
    productName: "Nokia Lumia 640XL",
    productPrice: 224,
    productAvailable: false,
  },
];

let counter: number = 0;

for (let model of models) {
  document.getElementById("pName" + counter).innerHTML = model.productName;
  document.getElementById("pPrice" + counter).innerHTML = model.productPrice;
  if (model.productAvailable) {
    document.getElementById("pAvailable" + counter).innerHTML = "Available";
  } else {
    document.getElementById("pAvailable" + counter).innerHTML = "Out of Stock";
  }

  counter++;
}
