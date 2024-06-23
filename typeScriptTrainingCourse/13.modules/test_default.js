"use strict";
exports.__esModule = true;
var default_export_1 = require("./default_export");
var product = new default_export_1["default"]();
var details = product.getProductDetails(1001);
console.log(details);
var util = new default_export_1.Utility();
var price = util.CalculateAmount(1300, 4);
console.log("the price is ".concat(price));
