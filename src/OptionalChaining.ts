let product = undefined;
console.debug(product?.price);

product = { price: 1.01};
console.debug(product?.price);

product = null;
console.debug(product?.[0]);

product = [100,200];
console.debug(product?.[1]);
