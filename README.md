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
zecko.collectionClient.get('YOUR_COLLECTION_ID');
```

Every resource method returns a promise. There is no callback support.

## Usage examples
### [Collections](https://zecko.co/zecko-js/classes/CollectionClient.html)

<b>[Get all collections](https://zecko.co/zecko-js/classes/CollectionClient.html#getAll)</b>
```js
return zecko.collectionClient.getAll();
```

<b>[Get collection by ID](https://zecko.co/zecko-js/classes/CollectionClient.html#getbyId)</b>

```js
return zecko.collectionClient.get('YOUR_COLLECTION_ID');
```

### [Products](https://zecko.co/zecko-js/classes/ProductClient.html)
<b>[Get products by collection ID](https://zecko.co/zecko-js/classes/ProductClient.html#getAllByCollectionId)</b>

```js
return zecko.productClient.getAllByCollectionId('YOUR_COLLECTION_ID');
```

<b>[Get product by ID](https://zecko.co/zecko-js/classes/ProductClient.html#getById)</b>

```js
return zecko.productClient.get('YOUR_PRODUCT_ID');
```

>- All examples available at https://github.com/zeckode/zecko-js-examples/tree/main/src/examples/js.
>- For detailed documentation, visit respective class [docs](https://zecko.co/zecko-js/modules.html).
