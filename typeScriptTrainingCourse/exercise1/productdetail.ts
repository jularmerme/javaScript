let Item = JSON.parse(localStorage.getItem("Product"));

document.getElementById("pName").innerHTML = Item.productName;
document.getElementById("pPrice").innerHTML = Item.productPrice;

if (Item.productAvailable) {
  document.getElementById("pAvailable").innerHTML = "Available";
} else {
  document.getElementById("pAvailable").innerHTML = "Out of Stock";
}

document.getElementById("pDiscount").innerHTML = `${Item.productDiscount}%`;

enum MobilePrice {
  GoldPlatinum = 699,
  PinkGold = 650,
  SilverTitanium = 712,
}

document.getElementById("gold").innerHTML = `${MobilePrice.GoldPlatinum}`;
document.getElementById("pinkgold").innerHTML = `${MobilePrice.PinkGold}`;
document.getElementById("silver").innerHTML = `${MobilePrice.SilverTitanium}`;

// const models: any[] = [
//   {
//     productName: "Samsung Galaxy Note 7",
//     productPrice: 699,
//     productAvailable: true,
//     productId: 150,
//     productDiscount: 5,
//   },
//   {
//     productName: "Samsung Galaxy S6 Edge",
//     productPrice: 650,
//     productAvailable: true,
//     productId: 231,
//     productDiscount: 10,
//   },
//   {
//     productName: "Nokia Lumia 640XL",
//     productPrice: 712,
//     productAvailable: false,
//     productId: 875,
//     productDiscount: 15,
//   },
// ];

function getMobileByColor(color: string): void {
  let discount: number;
  let totalAmount: number;

  if (color === "gold") {
    document.getElementById("pPrice").innerHTML = `${MobilePrice.GoldPlatinum}`;

    document.getElementById("pDiscount").innerHTML = `${Item.productDiscount}%`;
  } else if (color === "pink") {
    document.getElementById("pPrice").innerHTML = `${MobilePrice.PinkGold}`;

    document.getElementById("pDiscount").innerHTML = `${Item.productDiscount}%`;
  } else {
    document.getElementById(
      "pPrice"
    ).innerHTML = `${MobilePrice.SilverTitanium}`;
  }
}
