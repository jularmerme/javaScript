var models = [
    {
        productName: "Samsung Galaxy Note 7",
        productPrice: 699,
        productAvailable: true,
        productId: 150,
        productDiscount: 5
    },
    {
        productName: "Samsung Galaxy S6 Edge",
        productPrice: 650,
        productAvailable: true,
        productId: 231,
        productDiscount: 10
    },
    {
        productName: "Nokia Lumia 640XL",
        productPrice: 712,
        productAvailable: false,
        productId: 875,
        productDiscount: 15
    },
];
function getMobileDetails(productName, productId) {
    var filteredList = models.filter(function (item) { return item.productId == productId; });
    localStorage.setItem("Product", JSON.stringify(filteredList[0]));
    window.location.href = "http://127.0.0.1:5500/exercise1/productDetails.html";
}
