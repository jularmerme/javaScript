var Item = JSON.parse(localStorage.getItem("Product"));
document.getElementById("pName").innerHTML = Item.productName;
document.getElementById("pPrice").innerHTML = Item.productPrice;
if (Item.productAvailable) {
    document.getElementById("pAvailable").innerHTML = "Available";
}
else {
    document.getElementById("pAvailable").innerHTML = "Out of Stock";
}
document.getElementById("pDiscount").innerHTML = "".concat(Item.productDiscount, "%");
var MobilePrice;
(function (MobilePrice) {
    MobilePrice[MobilePrice["GoldPlatinum"] = 699] = "GoldPlatinum";
    MobilePrice[MobilePrice["PinkGold"] = 650] = "PinkGold";
    MobilePrice[MobilePrice["SilverTitanium"] = 712] = "SilverTitanium";
})(MobilePrice || (MobilePrice = {}));
document.getElementById("gold").innerHTML = "".concat(MobilePrice.GoldPlatinum);
document.getElementById("pinkgold").innerHTML = "".concat(MobilePrice.PinkGold);
document.getElementById("silver").innerHTML = "".concat(MobilePrice.SilverTitanium);
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
function getMobileByColor(color) {
    var discount;
    var totalAmount;
    if (color === "gold") {
        document.getElementById("pPrice").innerHTML = "".concat(MobilePrice.GoldPlatinum);
        document.getElementById("pDiscount").innerHTML = "".concat(Item.productDiscount, "%");
    }
    else if (color === "pink") {
        document.getElementById("pPrice").innerHTML = "".concat(MobilePrice.PinkGold);
        document.getElementById("pDiscount").innerHTML = "".concat(Item.productDiscount, "%");
    }
    else {
        document.getElementById("pPrice").innerHTML = "".concat(MobilePrice.SilverTitanium);
    }
}
