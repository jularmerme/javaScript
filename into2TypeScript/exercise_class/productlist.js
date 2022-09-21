var Product = /** @class */ (function () {
    function Product(_productId, _productName) {
        this._productId = _productId;
        this._productName = _productName;
        this._productId = _productId;
        this._productName = _productName;
    }
    Object.defineProperty(Product.prototype, "ProductId", {
        get: function () {
            return this._productId;
        },
        set: function (productId) {
            this._productId = productId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "ProductName", {
        get: function () {
            return this._productName;
        },
        set: function (productName) {
            this._productName = productName;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
function getMobileDetails(productName, productId) {
    var p = new Product(productName, productId);
    // console.log(`${productName} and ${productId}`);
    console.log(p.ProductId);
    console.log(p.ProductName);
}
