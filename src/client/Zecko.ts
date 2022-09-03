import { SDKParams } from '../types/SDKParams';

import { CartClient } from './CartClient';
import { CollectionClient } from './CollectionClient';
import { InventoryUnitClient } from './InventoryUnitClient';
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

  readonly inventoryUnitClient: InventoryUnitClient;

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
   * <b>Update by ID</b>
   *
   * ```
   * const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
   * return zecko.cartClient.updateById('YOUR_CART_ID', {
   *  customer: {
   *    email: 'YOUR_CUSTOMER_EMAIL_ADDRESS',
   *  },
   *  shippingAddress: {
   *    address1: 'YOUR_CUSTOMER_ADDRESS', // For Street address or PO Box number
   *    address2: 'YOUR_CUSTOMER_ADDRESS', // Optional Field, For Apartment Details
   *    city: 'YOUR_CUSTOMER_CITY',
   *    country: 'YOUR_CUSTOMER_COUNTRY', // Optional Field
   *    countryCode: 'YOUR_CUSTOMER_COUNTRY_CODE', // Optional Field
   *    firstName: 'YOUR_CUSTOMER_FIRST_NAME',
   *    lastName: 'YOUR_CUSTOMER_LAST_NAME', // Optional Field
   *    phone: 'YOUR_CUSTOMER_PHONE_NUMBER',
   *    province: 'REGION_OF_ADDRESS', // Like province, state, or district
   *    zip: 'YOUR_CUSTOMER_ZIP_CODE',
   *  },
   *  shippingLine: {
   *    price: 'PRICE_OF_SHIPPING_RATE',
   *    shippingRateHandle: 'UNIQUE_HANDLE_FOR_SHIPPING_RATE',
   *    title: 'TITLE_OF_SHIPPING_RATE',
   *  },
   * });
   * ```
   *
   * <b>Add Discount by ID</b>
   *
   * ```
   * const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
   * return zecko.cartClient.addDiscountById('YOUR_CART_ID', {
   *  discounts: [
   *    {
   *      type: 'DISCOUNT_CODE_TYPE',
   *      code: 'DISCOUNT_CODE',
   *    },
   *  ]
   * });
   * ```
   *
   * <b>Remove Discount by ID</b>
   *
   * ```
   * const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
   * return zecko.cartClient.removeDiscountById('YOUR_CART_ID', {
   *  discounts: [
   *    {
   *      type: 'DISCOUNT_CODE_TYPE',
   *      code: 'DISCOUNT_CODE',
   *    },
   *  ]
   * });
   * ```
   *
   * <b>Complete Cart by ID</b>
   *
   * ```
   * const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
   * return zecko.cartClient.completeCartById('YOUR_CART_ID', {
   *  payment: {
   *    totalPrice: 'TOTAL_AMOUNT_OF_CART',
   *  },
   * });
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
   * <b>Get Order by ID</b>
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
   * <h3>Inventory Unit</h3>
   * <b>Cancel Inventory Unit by ID</b>
   * <br><br>
   *
   * ```
   * const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
   * return zecko.inventoryUnitClient.cancelById('YOUR_INVENTORY_UNIT_ID', {
   *  cancelReason: 'YOUR_REASON_FOR_CANCELLATION',
   * });
   * ```
   *
   * <b>Return Inventory Unit by ID</b>
   *
   * ```
   * const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
   * return zecko.inventoryUnitClient.returnById('YOUR_INVENTORY_UNIT_ID', {
   *  returnReason: 'YOUR_REASON_FOR_RETURN',
   * });
   * ```
   *
   * <b>Exchange Inventory Unit by ID</b>
   *
   * ```
   * const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
   * return zecko.inventoryUnitClient.exchangeById('YOUR_INVENTORY_UNIT_ID', {
   *  exchangeReason: 'YOUR_REASON_FOR_EXCHANGE',
   * });
   * ```
   *
   * <b>Track Inventory Unit by ID</b>
   *
   * ```
   * const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
   * return zecko.inventoryUnitClient.trackById('YOUR_INVENTORY_UNIT_ID');
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
    this.inventoryUnitClient = new InventoryUnitClient(this.accessToken);
  }
}
