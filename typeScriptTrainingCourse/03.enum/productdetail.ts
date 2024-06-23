enum MobilePrice {
  Black = 500,
  Gold = 750,
  White = 900,
}

console.log(MobilePrice.Black);
console.log(MobilePrice.Gold);
console.log(MobilePrice.White);

// TRYOUT

// Declaring enum variable and assigning default values
enum MobilePrice1 {
  Black = 250,
  Gold = 280,
  White = 300,
}

// function to calculate final amount
function calculateAmount(price: number): number {
  let discount: number;
  let totalAmount: number;

  if (price === MobilePrice1.Gold) {
    discount = 5;
  } else if (price === MobilePrice1.White) {
    discount = 8;
  } else {
    discount = 10;
  }

  totalAmount = price - (price * discount) / 100;
  return totalAmount;
}

console.log(`Actual price of the Mobile is $${MobilePrice1.Black}`);
console.log(
  `The final price after apply the discount is $${calculateAmount(
    MobilePrice1.Black
  )}`
);

/**
 * Exercise: Enum
 */

enum MobilePriceExercise {
  GoldPlatinum = 699,
  PinkGold = 650,
  SilverTitanium = 712,
}

let productName: string = "Samsung Galaxy Note 7";
document.getElementById("pName").innerHTML = `${productName}`;
document.getElementById(
  "pPrice"
).innerHTML = `${MobilePriceExercise.GoldPlatinum}`;
document.getElementById("pAvailable").innerHTML = ` Available`;
document.getElementById("pDiscount").innerHTML = `5%`;

document.getElementById(
  "gold"
).innerHTML = `${MobilePriceExercise.GoldPlatinum}`;
document.getElementById(
  "pinkgold"
).innerHTML = `${MobilePriceExercise.PinkGold}`;
document.getElementById(
  "silver"
).innerHTML = `${MobilePriceExercise.SilverTitanium}`;

function getMobileByColor(color: string): void {
  let productPrice: number;
  let productDiscount: number;
  let productStatus: boolean;

  if (color === "gold") {
    productPrice = MobilePriceExercise.GoldPlatinum;
    productDiscount = 5;
    productStatus = true;
  } else if (color === "pink") {
    productPrice = MobilePriceExercise.PinkGold;
    productDiscount = 10;
    productStatus = true;
  } else {
    productPrice = MobilePriceExercise.SilverTitanium;
    productDiscount = 15;
    productStatus = false;
  }

  document.getElementById("pPrice").innerHTML = `${productPrice}`;
  document.getElementById("pDiscount").innerHTML = `${productDiscount}%`;
  if (productStatus)
    document.getElementById("pAvailable").innerHTML = " Available";
  else document.getElementById("pAvailable").innerHTML = " Out of Stock";
}
