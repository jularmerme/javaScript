/// <reference path="./namespace_demo.ts" />

import util = Utility.Payment;
const paymentAmount = util.CalculateAmount(255, 6);
console.log(`Amount to be paid: ${paymentAmount}`);
const discount = Utility.MaxDiscountAllowed(6);
console.log(`Maximum discount allowed is: ${discount}`);
