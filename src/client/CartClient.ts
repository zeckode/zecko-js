import { APIConstants } from '../constants/APIConstants';
import { CartData, DeleteCart } from '../types/Cart';

import { BaseClient } from './BaseClient';

export class CartClient extends BaseClient {
  /**
   * @ignore
   */
  public constructor(private readonly accessToken: string) {
    super();
  }

  /**
   * @param {string} cutomerId ClientCustomer Id
   *
   * @param {string} lineItemsBefore
   * If `data.cart.pageInfo.hasPreviousPage` is `true`, then request previous page by passing
   * `data.cart.pageInfo.startCursor` as `lineItemsBefore` parameter. You can also pass `data.cart.edges[i].cursor`
   * as `lineItemsBefore` parameter to get results before that cursor.
   *
   * @param {string} lineItemsAfter
   * If `data.cart.pageInfo.hasNextPage` is `true`, then request next page by passing
   * `data.cart.pageInfo.endCursor` as `lineItemsAfter` parameter. You can also pass `data.cart.edges[i].cursor`
   * as `lineItemsAfter` parameter to get results after that cursor.
   *
   * @returns {Promise<CartData>}
   * Paginated cart list of maximum 250 cart items. To request further cart items, use `lineItemsAfter` parameter.
   */
  async getByClientCustomerId(cutomerId: string, lineItemsBefore?: string, lineItemsAfter?: string): Promise<CartData> {
    const params = new Object({
      customerId: cutomerId,
      lineItemsBefore: lineItemsBefore,
      lineItemsAfter: lineItemsAfter,
    });

    const url = `${APIConstants.API_BASE_URL}/carts`;

    return this._get<CartData>(url, params, {
      [APIConstants.ZECKO_ACCESS_TOKEN_HEADER_KEY]: this.accessToken,
    });
  }

  /**
   * @param {JSON} cartActionRequest CartActionRequest
   *
   * @property `customerId`
   * ClientCustomer Id - string property of cartActionRequest
   * @property `variantId`
   * Product Variant Id - string property of cartActionRequest
   * @property `quantity`
   * Product Quantity - number property of cartActionRequest
   *
   * @returns {Promise<CartData>}
   * Paginated cart list of maximum 250 cart items. To request further cart items, use `lineItemsAfter` parameter.
   */
  async addToCart(cartActionRequest: JSON): Promise<CartData> {
    const url = `${APIConstants.API_BASE_URL}/carts/add`;

    return this._patch<CartData>(url, null, cartActionRequest, {
      [APIConstants.ZECKO_ACCESS_TOKEN_HEADER_KEY]: this.accessToken,
      'Content-Type': 'application/json',
    });
  }

  /**
   * @typedef {JSON} cartActionRequest CartActionRequest
   *
   * @property `customerId`
   * ClientCustomer Id - string property of cartActionRequest
   * @property `variantId`
   * Product Variant Id - string property of cartActionRequest
   * @property `quantity`
   * Product Quantity - number property of cartActionRequest
   *
   * @returns {Promise<CartData>}
   * Paginated cart list of maximum 250 cart items. To request further cart items, use `lineItemsAfter` parameter.
   */
  async deleteFromCart(cartActionRequest: JSON): Promise<CartData> {
    const url = `${APIConstants.API_BASE_URL}/carts/delete`;

    return this._patch<CartData>(url, null, cartActionRequest, {
      [APIConstants.ZECKO_ACCESS_TOKEN_HEADER_KEY]: this.accessToken,
      'Content-Type': 'application/json',
    });
  }

  /**
   * @param {string} customerId ClientCustomer Id
   *
   * @return {Promise<DeleteCart>}
   */
  async delete(customerId: string): Promise<DeleteCart> {
    const params = new Object({
      customerId: customerId,
    });
    const url = `${APIConstants.API_BASE_URL}/carts`;

    return this._delete<DeleteCart>(url, params, null, {
      [APIConstants.ZECKO_ACCESS_TOKEN_HEADER_KEY]: this.accessToken,
    });
  }
}
