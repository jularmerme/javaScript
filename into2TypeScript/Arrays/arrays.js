var models = [
    {
        pId: 432,
        productName: "Samsung Galaxy Note 7",
        productPrice: 699,
        productAvailable: true,
        imageUrl: "SamsungGalaxy_Gold.jpg",
        productDescription: "Samsung Galaxy Note 7 is a stylish mobile you can ever have, It has 64GB memory"
    },
    {
        pId: 432,
        productName: "Samsung Galaxy S6 Edge",
        productPrice: 630,
        productAvailable: true,
        imageUrl: "SamsungGalaxy_Gold.jpg",
        productDescription: "Samsung Galaxy Note 7 is a stylish mobile you can ever have, It has 64GB memory"
    },
    {
        pId: 432,
        productName: "Nokia Lumia 640XL",
        productPrice: 224,
        productAvailable: false,
        imageUrl: "SamsungGalaxy_Gold.jpg",
        productDescription: "Samsung Galaxy Note 7 is a stylish mobile you can ever have, It has 64GB memory"
    },
];
var counter = 0;
for (var _i = 0, models_1 = models; _i < models_1.length; _i++) {
    var model = models_1[_i];
    document.getElementById("pName" + counter).innerHTML = model.productName;
    document.getElementById("pPrice" + counter).innerHTML = model.productPrice;
    if (model.productAvailable) {
        document.getElementById("pAvailable" + counter).innerHTML = "Available";
    }
    else {
        document.getElementById("pAvailable" + counter).innerHTML = "Out of Stock";
    }
    counter++;
}
