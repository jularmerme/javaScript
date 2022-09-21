var productName = "Samsung Galaxy Note 7";
var productPrice = 699;
var productAvailability = true;
var pStatus;
document.getElementById("pName").innerHTML = productName;
document.getElementById("pPrice").innerHTML = "".concat(productPrice);
document.getElementById("pDiscount").innerHTML = "15%";
pStatus = productAvailability ? "Available" : "Out of Stock";
document.getElementById("pAvailable").innerHTML = pStatus;
// declaring enum variable and assigning default values
var MobilePrice;
(function (MobilePrice) {
    MobilePrice[MobilePrice["GoldPlatinum"] = 699] = "GoldPlatinum";
    MobilePrice[MobilePrice["PinkGold"] = 650] = "PinkGold";
    MobilePrice[MobilePrice["SilverTitanium"] = 712] = "SilverTitanium";
})(MobilePrice || (MobilePrice = {}));
document.getElementById("gold").innerHTML = MobilePrice.GoldPlatinum;
document.getElementById("pinkgold").innerHTML = MobilePrice.PinkGold;
document.getElementById("silver").innerHTML = MobilePrice.SilverTitanium;
// function to calculate final amount
function calculateAmount(price) {
    var discount;
    var totalAmount;
    if (price === MobilePrice.Gold) {
        discount = 5;
    }
    else if (price === MobilePrice.White) {
        discount = 8;
    }
    else {
        discount = 10;
    }
    totalAmount = price - (price * discount) / 100;
    return totalAmount;
}
// lines to populate the actual and final price of black color mobile
console.log("Actual price of the Mobile is $" + MobilePrice.GoldPlatinum);
console.log("the final price after discount is $" +
    calculateAmount(MobilePrice.GoldPlatinum));
function getMobileByColor(color) {
    var discount;
    var totalAmount;
    if (color === "gold") {
        discount = 15;
        totalAmount =
            MobilePrice.GoldPlatinum - (MobilePrice.GoldPlatinum * 15) / 100;
    }
    else if (color === "pink") {
        discount = 10;
        totalAmount = MobilePrice.PinkGold - (MobilePrice.PinkGold * 10) / 100;
    }
    else {
        discount = 5;
        totalAmount =
            MobilePrice.SilverTitanium - (MobilePrice.SilverTitanium * 5) / 100;
    }
    document.getElementById("pPrice").innerHTML = "".concat(totalAmount);
    document.getElementById("pDiscount").innerHTML = "".concat(discount, "%");
}
