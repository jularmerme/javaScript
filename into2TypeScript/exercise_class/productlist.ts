class Product {
  constructor(private _productId: number, private _productName: string) {
    this._productId = _productId;
    this._productName = _productName;
  }

  get ProductId(): number {
    return this._productId;
  }

  set ProductId(productId: number) {
    this._productId = productId;
  }

  get ProductName(): string {
    return this._productName;
  }

  set ProductName(productName: string) {
    this._productName = productName;
  }
}

function getMobileDetails(productName: string, productId: number) {
  const p: Product = new Product(productName, productId);

  // console.log(`${productName} and ${productId}`);

  console.log(p.ProductId);
  console.log(p.ProductName);
}
