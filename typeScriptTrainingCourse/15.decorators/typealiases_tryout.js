// This try out helps us to create an offer code generator for various products
var generateOffer = function (product) {
    var offerPrefix = product.pName.substr(0, 4).toUpperCase() + product.details.categoryId;
    product.details.availableProductIds.map(function (subProduct) {
        console.log("Offer code for ".concat(subProduct, ": ").concat(offerPrefix, "-").concat(subProduct));
    });
    return product.details.availableProductIds.length;
};
var p1 = {
    pName: "Samsung",
    licenseNo: "LC21321",
    details: {
        categoryId: 2022,
        availableProductIds: ["100", "101", "102"]
    }
};
console.log("No. of Available for " + p1.pName + ": ", generateOffer(p1));
