import { APIConstants } from '../constants/APIConstants';
import { CartActionRequest, CartCompleteRequest, CartData, DeleteCart } from '../types/Cart';
import { OrderData } from '../types/Order';

import { BaseClient } from './BaseClient';

export class CartClient extends BaseClient {
  /**
   * @ignore
   */
  public constructor(private readonly accessToken: string) {
    super();
  }

  /**
   *
   * @param {string} customerId Customer ID
   *
   * @param {string} lineItemsBefore
   * If `data.cart.lineItems.pageInfo.hasPreviousPage` is `true`, then request previous page by passing
   * `data.cart.lineItems.pageInfo.startCursor` as `lineItemsBefore` parameter. You can also pass `data.cart.lineItems.edges[i].cursor`
   * as `lineItemsBefore` parameter to get results before that cursor.
   *
   * @param {string} lineItemsAfter
   * If `data.cart.lineItems.pageInfo.hasNextPage` is `true`, then request next page by passing
   * `data.cart.lineItems.pageInfo.endCursor` as `lineItemsAfter` parameter. You can also pass `data.cart.lineItems.edges[i].cursor`
   * as `lineItemsAfter` parameter to get results after that cursor.
   *
   * @returns {Promise<CartData>}
   * Cart object containing maximum `20` line items
   * To request further line items, use `lineItemsAfter` parameter
   * To request previous line items, use `lineItemsBefore` parameter
   */
  async getByCustomerId(customerId: string, lineItemsBefore?: string, lineItemsAfter?: string): Promise<CartData> {
    const params = {
      customerId: customerId,
      lineItemsBefore: lineItemsBefore,
      lineItemsAfter: lineItemsAfter,
    };

    const url = `${APIConstants.API_BASE_URL}/carts`;

    return this._get<CartData>(url, params, {
      [APIConstants.ZECKO_ACCESS_TOKEN_HEADER_KEY]: this.accessToken,
    });
  }

  /**
   *
   * @param cartActionRequest Object that contains Customer ID, Product variant ID and Product variant quantity
   *
   * @returns {Promise<CartData>}
   * Cart object containing maximum `20` line items
   */
  async addToCart(cartActionRequest: CartActionRequest): Promise<CartData> {
    const url = `${APIConstants.API_BASE_URL}/carts/add`;

    return this._patch<CartData>(url, null, cartActionRequest, {
      [APIConstants.ZECKO_ACCESS_TOKEN_HEADER_KEY]: this.accessToken,
      'Content-Type': 'application/json',
    });
  }

  /**
   *
   * @param cartActionRequest Object that contains Customer ID, Product variant ID and Product variant quantity
   *
   * @returns {Promise<CartData>}
   * Cart object containing maximum `20` line items
   */
  async deleteFromCart(cartActionRequest: CartActionRequest): Promise<CartData> {
    const url = `${APIConstants.API_BASE_URL}/carts/delete`;

    return this._patch<CartData>(url, null, cartActionRequest, {
      [APIConstants.ZECKO_ACCESS_TOKEN_HEADER_KEY]: this.accessToken,
      'Content-Type': 'application/json',
    });
  }

  /**
   *
   * @param id Cart ID
   *
   * @param cartCompleteRequest Object that contains Payment Method
   *
   * @returns {Promise<OrderData>}
   * Order Object containing maximum `20` line items and each line item containing maximum `10` images
   */

  async completeCartById(id: string, cartCompleteRequest: CartCompleteRequest): Promise<OrderData> {
    const url = `${APIConstants.API_BASE_URL}/carts/complete/${id}`;

    return this._post<OrderData>(url, null, cartCompleteRequest, {
      [APIConstants.ZECKO_ACCESS_TOKEN_HEADER_KEY]: this.accessToken,
      'Content-Type': 'application/json',
    });
  }

  /**
   * @param {string} customerId Customer ID
   *
   * @return {Promise<DeleteCart>}
   * Cart object contain `Deleted Draft Order ID`
   */
  async deleteCartByCustomerId(customerId: string): Promise<DeleteCart> {
    const params = new Object({
      customerId: customerId,
    });
    const url = `${APIConstants.API_BASE_URL}/carts`;

    return this._delete<DeleteCart>(url, params, null, {
      [APIConstants.ZECKO_ACCESS_TOKEN_HEADER_KEY]: this.accessToken,
    });
  }
}
