# Zecko TypeScript and JavaScript SDK

Official TypeScript and JavaScript SDK for [Zecko API](https://www.postman.com/zeckode/workspace/zecko-public/documentation/19047720-d75209b6-3573-425a-afa3-6b8ededd0501).

## Installation

### Yarn

```bash
yarn add zecko
```

### NPM

```bash
npm install zecko
```

## Documentation

Documentation of Zecko API and their usage is available [here](https://www.postman.com/zeckode/workspace/zecko-public/documentation/19047720-d75209b6-3573-425a-afa3-6b8ededd0501).

Detailed TypeScript and JavaScript docs are available [here](https://zecko.co/zecko-js/classes/Zecko.html)

### Basic Usage

Instantiate the Zecko instance with `accessToken`. You can obtain the keys by contacting us at `hello@zecko.co`.

```js
const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
```

The resources can be accessed via the instance. All the methods invocations follows the namespaced signature:

```js
{zeckoInstance}.{resourceName}.{methodName}([params])

// example
zecko.collectionClient.getById('YOUR_COLLECTION_ID');
```

Every resource method returns a promise. There is no callback support.

## Usage examples

### [Collection](https://zecko.co/zecko-js/classes/CollectionClient.html)

<b>[Get All Collections](https://zecko.co/zecko-js/classes/CollectionClient.html#getAll)</b>

```js
return zecko.collectionClient.getAll();
```

<b>[Get Collection by ID](https://zecko.co/zecko-js/classes/CollectionClient.html#getById)</b>

```js
return zecko.collectionClient.getById('YOUR_COLLECTION_ID');
```

### [Product](https://zecko.co/zecko-js/classes/ProductClient.html)

<b>[Get products by collection ID](https://zecko.co/zecko-js/classes/ProductClient.html#getAllByCollectionId)</b>

```js
return zecko.productClient.getAllByCollectionId('YOUR_COLLECTION_ID');
```

<b>[Get product by ID](https://zecko.co/zecko-js/classes/ProductClient.html#getById)</b>

```js
return zecko.productClient.getById('YOUR_PRODUCT_ID');
```

### [Cart](https://zecko.co/zecko-js/classes/CartClient.html)

<b>[Get Cart by Customer ID](https://zecko.co/zecko-js/classes/CartClient.html#getByCustomerId)</b>

```js
return zecko.cartClient.getByCustomerId('YOUR_CUSTOMER_ID');
```

<b>[Add to Cart](https://zecko.co/zecko-js/classes/CartClient.html#addToCart)</b>

```js
return zecko.cartClient.addToCart({
  customerId: 'YOUR_CUSTOMER_ID',
  variantId: 'YOUR_PRODUCT_VARIANT_ID',
  quantity: 'YOUR_PRODUCT_VARIANT_QUANTITY',
});
```

<b>[Update by ID](https://zecko.co/zecko-js/classes/CartClient.html#updateById)</b>

```js
return zecko.cartClient.updateById('YOUR_CART_ID', {
  customer: {
    email: 'YOUR_CUSTOMER_EMAIL_ADDRESS',
  },
  shippingAddress: {
    address1: 'YOUR_CUSTOMER_ADDRESS', // For Street address or PO Box number
    address2: 'YOUR_CUSTOMER_ADDRESS', // Optional Field, For Apartment Details
    city: 'YOUR_CUSTOMER_CITY',
    country: 'YOUR_CUSTOMER_COUNTRY', // Optional Field
    countryCode: 'YOUR_CUSTOMER_COUNTRY_CODE', // Optional Field
    firstName: 'YOUR_CUSTOMER_FIRST_NAME',
    lastName: 'YOUR_CUSTOMER_LAST_NAME', // Optional Field
    phone: 'YOUR_CUSTOMER_PHONE_NUMBER',
    province: 'REGION_OF_ADDRESS', // Like province, state, or district
    zip: 'YOUR_CUSTOMER_ZIP_CODE',
  },
  shippingLine: {
    handle: 'UNIQUE_HANDLE_FOR_SHIPPING_RATE',
    price: {
      amount: 'PRICE_OF_SHIPPING_RATE';
    },
    title: 'TITLE_OF_SHIPPING_RATE',
  },
});
```

<b>[Add Discount by ID](https://zecko.co/zecko-js/classes/CartClient.html#addDiscountById)</b>

```js
return zecko.cartClient.addDiscountById('YOUR_CART_ID', {
  discounts: [
    {
      type: 'DISCOUNT_CODE_TYPE',
      code: 'DISCOUNT_CODE',
    },
  ],
});
```

<b>[Remove Discount by ID](https://zecko.co/zecko-js/classes/CartClient.html#removeDiscountById)</b>

```js
return zecko.cartClient.removeDiscountById('YOUR_CART_ID', {
  discounts: [
    {
      type: 'DISCOUNT_CODE_TYPE',
      code: 'DISCOUNT_CODE',
    },
  ],
});
```

<b>[Complete Cart by ID](https://zecko.co/zecko-js/classes/CartClient.html#completeCartById)</b>

```js
return zecko.cartClient.completeCartById('YOUR_CART_ID', {
  customer: {
    email: 'YOUR_CUSTOMER_EMAIL_ADDRESS',
  },
  shippingAddress: {
    address1: 'YOUR_CUSTOMER_ADDRESS', // For Street address or PO Box number
    address2: 'YOUR_CUSTOMER_ADDRESS', // Optional Field, For Apartment Details
    city: 'YOUR_CUSTOMER_CITY',
    country: 'YOUR_CUSTOMER_COUNTRY', // Optional Field
    countryCode: 'YOUR_CUSTOMER_COUNTRY_CODE', // Optional Field
    firstName: 'YOUR_CUSTOMER_FIRST_NAME',
    lastName: 'YOUR_CUSTOMER_LAST_NAME', // Optional Field
    phone: 'YOUR_CUSTOMER_PHONE_NUMBER',
    zip: 'YOUR_CUSTOMER_ZIP_CODE',
  },
  paymentMethod: 'YOUR_PAYMENT_METHOD', // Can be one of `COD` or `PREPAID`
  discountCode: 'YOUR_DISCOUNT_COUPON_CODE', // Optional Field
});
```

<b>[Delete from Cart](https://zecko.co/zecko-js/classes/CartClient.html#deleteFromCart)</b>

```js
return zecko.cartClient.deleteFromCart({
  customerId: 'YOUR_CUSTOMER_ID',
  variantId: 'YOUR_PRODUCT_VARIANT_ID',
  quantity: 'YOUR_PRODUCT_VARIANT_QUANTITY',
});
```

<b>[Delete Cart by Customer ID](https://zecko.co/zecko-js/classes/CartClient.html#deleteCartByCustomerId)</b>

```js
return zecko.cartClient.deleteCartByCustomerId('YOUR_CUSTOMER_ID');
```

### [Order](https://zecko.co/zecko-js/classes/OrderClient.html)

<b>[Get Order by ID](https://zecko.co/zecko-js/classes/OrderClient.html#getById)</b>

```js
return zecko.orderClient.getById('YOUR_ORDER_ID');
```

<b>[Get All Orders by Customer ID](https://zecko.co/zecko-js/classes/OrderClient.html#getAllByCustomerId)</b>

```js
return zecko.orderClient.getAllByCustomerId('YOUR_CUSTOMER_ID');
```

### [Inventory Unit](https://zecko.co/zecko-js/classes/InventoryUnitClient.html)

<b>[Cancel Inventory Unit by ID](https://zecko.co/zecko-js/classes/InventoryUnitClient.html#cancelById)</b>

```js
return zecko.inventoryUnitClient.cancelById('YOUR_INVENTORY_UNIT_ID', {
  cancelReason: 'YOUR_REASON_FOR_CANCELLATION',
});
```

<b>[Return Inventory Unit by ID](https://zecko.co/zecko-js/classes/InventoryUnitClient.html#returnById)</b>

```js
return zecko.inventoryUnitClient.returnById('YOUR_INVENTORY_UNIT_ID', {
  returnReason: 'YOUR_REASON_FOR_RETURN',
});
```

<b>[Exchange Inventory Unit by ID](https://zecko.co/zecko-js/classes/InventoryUnitClient.html#exchangeById)</b>

```js
return zecko.inventoryUnitClient.exchangeById('YOUR_INVENTORY_UNIT_ID', {
  exchangeReason: 'YOUR_REASON_FOR_EXCHANGE',
});
```

<b>[Track Inventory Unit by ID](https://zecko.co/zecko-js/classes/InventoryUnitClient.html#trackById)</b>

```js
return zecko.inventoryUnitClient.trackById('YOUR_INVENTORY_UNIT_ID');
```

> - All examples available at https://github.com/zeckode/zecko-js-examples/tree/main/src/examples/js.
> - For detailed documentation, visit respective class [docs](https://zecko.co/zecko-js/modules.html).
