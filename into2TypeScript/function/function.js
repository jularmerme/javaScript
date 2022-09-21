// Declaring a function which accepts string datatype as parameter and returns string array
function getMobileByManufacturer(manufacturer) {
    var mobileList;
    if (manufacturer === "Samsung") {
        mobileList = [
            "Samsung Galaxy S6 Edge",
            "Samsung Galaxy Note 7",
            "Samsung Galaxy J7 SM-J700F",
        ];
        return mobileList;
    }
    else if (manufacturer === "Apple") {
        mobileList = ["Apple Iphone 5s", "Apple iPhone 6s", "Apple iPhone 7"];
        return mobileList;
    }
    else {
        mobileList = ["Nokia 105", "Nokia 230 Dual Sim"];
        return mobileList;
    }
}
// logic to populate the Samsung manufacter details on console
console.log("The available mobile list: " + getMobileByManufacturer("Samsung"));
