var MobilePrice;
(function (MobilePrice) {
    MobilePrice[MobilePrice["Black"] = 500] = "Black";
    MobilePrice[MobilePrice["Gold"] = 750] = "Gold";
    MobilePrice[MobilePrice["White"] = 900] = "White";
})(MobilePrice || (MobilePrice = {}));
console.log(MobilePrice.Black);
console.log(MobilePrice.Gold);
console.log(MobilePrice.White);
// TRYOUT
// Declaring enum variable and assigning default values
var MobilePrice1;
(function (MobilePrice1) {
    MobilePrice1[MobilePrice1["Black"] = 250] = "Black";
    MobilePrice1[MobilePrice1["Gold"] = 280] = "Gold";
    MobilePrice1[MobilePrice1["White"] = 300] = "White";
})(MobilePrice1 || (MobilePrice1 = {}));
// function to calculate final amount
function calculateAmount(price) {
    var discount;
    var totalAmount;
    if (price === MobilePrice1.Gold) {
        discount = 5;
    }
    else if (price === MobilePrice1.White) {
        discount = 8;
    }
    else {
        discount = 10;
    }
    totalAmount = price - (price * discount) / 100;
    return totalAmount;
}
console.log("Actual price of the Mobile is $".concat(MobilePrice1.Black));
console.log("The final price after apply the discount is $".concat(calculateAmount(MobilePrice1.Black)));
/**
 * Exercise: Enum
 */
var MobilePriceExercise;
(function (MobilePriceExercise) {
    MobilePriceExercise[MobilePriceExercise["GoldPlatinum"] = 699] = "GoldPlatinum";
    MobilePriceExercise[MobilePriceExercise["PinkGold"] = 650] = "PinkGold";
    MobilePriceExercise[MobilePriceExercise["SilverTitanium"] = 712] = "SilverTitanium";
})(MobilePriceExercise || (MobilePriceExercise = {}));
var productName = "Samsung Galaxy Note 7";
document.getElementById("pName").innerHTML = "".concat(productName);
document.getElementById("pPrice").innerHTML = "".concat(MobilePriceExercise.GoldPlatinum);
document.getElementById("pAvailable").innerHTML = " Available";
document.getElementById("pDiscount").innerHTML = "5%";
document.getElementById("gold").innerHTML = "".concat(MobilePriceExercise.GoldPlatinum);
document.getElementById("pinkgold").innerHTML = "".concat(MobilePriceExercise.PinkGold);
document.getElementById("silver").innerHTML = "".concat(MobilePriceExercise.SilverTitanium);
function getMobileByColor(color) {
    var productPrice;
    var productDiscount;
    var productStatus;
    if (color === "gold") {
        productPrice = MobilePriceExercise.GoldPlatinum;
        productDiscount = 5;
        productStatus = true;
    }
    else if (color === "pink") {
        productPrice = MobilePriceExercise.PinkGold;
        productDiscount = 10;
        productStatus = true;
    }
    else {
        productPrice = MobilePriceExercise.SilverTitanium;
        productDiscount = 15;
        productStatus = false;
    }
    document.getElementById("pPrice").innerHTML = "".concat(productPrice);
    document.getElementById("pDiscount").innerHTML = "".concat(productDiscount, "%");
    if (productStatus)
        document.getElementById("pAvailable").innerHTML = " Available";
    else
        document.getElementById("pAvailable").innerHTML = " Out of Stock";
}
