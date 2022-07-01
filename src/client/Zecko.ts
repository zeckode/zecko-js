import { SDKParams } from '../types/SDKParams';

import { CartClient } from './CartClient';
import { CollectionClient } from './CollectionClient';
import { OrderClient } from './OrderClient';
import { ProductClient } from './ProductClient';

export class Zecko {
  /**
   * @ignore
   */
  readonly accessToken: string;

  readonly collectionClient: CollectionClient;

  readonly productClient: ProductClient;

  readonly cartClient: CartClient;

  readonly orderClient: OrderClient;

  /**
   *
   * @param sdkParams Pass your accessToken here.
   * <br>
   * <h2>Usage examples:</h2>
   * <h3>Collections</h3>
   * <b>Get All Collections</b>
   * <br><br>
   *
   * ```
   * const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
   * return zecko.collectionClient.getAll();
   * ```
   *
   * <b>Get Collection by ID</b>
   *
   * ```
   * const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
   * return zecko.collectionClient.getById('YOUR_COLLECTION_ID');
   * ```
   * <h3>Products</h3>
   * <b>Get All Products</b>
   * <br><br>
   *
   * ```
   * const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
   * return zecko.productClient.getAllByCollectionId('YOUR_COLLECTION_ID');
   * ```
   *
   * <b>Get Product by ID</b>
   *
   * ```
   * const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
   * return zecko.productClient.getById('YOUR_PRODUCT_ID');
   * ```
   *
   * <h3>Cart</h3>
   * <b>Get Cart by Customer ID</b>
   * <br><br>
   *
   * ```
   * const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
   * return zecko.cartClient.getByCustomerId('YOUR_CUSTOMER_ID');
   * ```
   *
   * <b>Add to Cart</b>
   *
   * ```
   * const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
   * return zecko.cartClient.addToCart({
   * customerId: 'YOUR_CUSTOMER_ID',
   * variantId: 'YOUR_PRODUCT_VARIANT_ID',
   * quantity: 'YOUR_PRODUCT_VARIANT_QUANTITY'
   * });
   * ```
   *
   * <b>Delete from Cart</b>
   *
   * ```
   * const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
   * return zecko.cartClient.deleteFromCart({
   *  customerId: 'YOUR_CUSTOMER_ID',
   *  variantId: 'YOUR_PRODUCT_VARIANT_ID',
   *  quantity: 'YOUR_PRODUCT_VARIANT_QUANTITY'
   * });
   * ```
   *
   * <b>Complete Cart by ID</b>
   *
   * ```
   * const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
   * return zecko.cartClient.completeCartById(
   *  'YOUR_CART_ID',
   *  {
   *    // `YOUR_PAYMENT_METHOD` can be one of `COD` or `PREPAID`
   *    paymentMethod: 'YOUR_PAYMENT_METHOD',
   *  }
   * );
   * ```
   *
   * <b>Delete Cart by Customer ID</b>
   *
   * ```
   * const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
   * return zecko.cartClient.deleteCartByCustomerId('YOUR_CUSTOMER_ID');
   * ```
   *
   * <h3>Order</h3>
   * <b>Get Order by Order ID</b>
   * <br><br>
   *
   * ```
   * const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
   * return zecko.orderClient.getById('YOUR_ORDER_ID');
   * ```
   *
   * <b>Get All Orders by Customer ID</b>
   *
   * ```
   * const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
   * return zecko.orderClient.getAllByCustomerId('YOUR_CUSTOMER_ID');
   * ```
   *
   * - All examples available at https://github.com/zeckode/zecko-js-examples/tree/main/src/examples/js <br>
   * - For detailed documentation, visit respective class docs below.
   */
  public constructor(sdkParams: SDKParams) {
    if (!sdkParams || !sdkParams.accessToken) {
      throw new Error('Missing required parameter: accessToken');
    }

    this.accessToken = sdkParams.accessToken;
    this.collectionClient = new CollectionClient(this.accessToken);
    this.productClient = new ProductClient(this.accessToken);
    this.cartClient = new CartClient(this.accessToken);
    this.orderClient = new OrderClient(this.accessToken);
  }
}
