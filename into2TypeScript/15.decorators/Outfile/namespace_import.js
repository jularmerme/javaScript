/// <reference path="./namespace_demo.ts" />
var util = Utility.Payment;
var paymentAmount = util.CalculateAmount(255, 6);
console.log("Amount to be paid: ".concat(paymentAmount));
var discount = Utility.MaxDiscountAllowed(6);
console.log("Maximum discount allowed is: ".concat(discount));
//# sourceMappingURL=namespace_import.js.map