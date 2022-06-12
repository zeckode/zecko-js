import { APIConstants } from '../constants/APIConstants';
import { CartData } from '../types/Cart';

import { BaseClient } from './BaseClient';

export class CartClient extends BaseClient {
  /**
   * @ignore
   */
  public constructor(private readonly accessToken: string) {
    super();
  }

  /**
   * @param {string} cutomerId clientCustomerId
   *
   * @param {string} lineItemsAfter lineItemsAfter
   * If `data.cart.pageInfo.hasNextPage` is `true`, then request next page by passing
   * `data.cart.pageInfo.endCursor` as `lineItemsAfter` parameter. You can also pass `data.cart.edges[i].cursor`
   * as `lineItemsAfter` parameter to get results after that cursor.
   *
   * @returns {Promise<CartData>}
   * Paginated cart list of maximum 250 cart items. To request further cart items, use `lineItemsAfter` parameter.
   */
  async getAllByCustomerId(
    cutomerId: string,
    lineItemsAfter?: string
  ): Promise<CartData> {
    const queryParams = new URLSearchParams();

    queryParams.append('customerId', cutomerId);

    if (lineItemsAfter) {
      queryParams.append('lineItemsAfter', lineItemsAfter);
    }

    const searchParamsString = queryParams.toString
      ? `?${queryParams.toString()}`
      : '';
    const url = `${APIConstants.API_BASE_URL}/carts${searchParamsString}`;

    return this._get<CartData>(url, null, {
      [APIConstants.ZECKO_ACCESS_TOKEN_HEADER_KEY]: this.accessToken,
    });
  }

  /**
   * @param {JSON} cartActionRequest
   * @property {string} customerId
   * string property of cartActionRequest
   * @property {string} variantId
   * string property of cartActionRequest
   * @property {number} quantity
   * number property of cartActionRequest
   *
   * @returns {Promise<CartData>}
   */
  async add(cartActionRequest: JSON): Promise<CartData> {
    const url = `${APIConstants.API_BASE_URL}/carts/add`;

    return this._patch<CartData>(url, cartActionRequest, {
      [APIConstants.ZECKO_ACCESS_TOKEN_HEADER_KEY]: this.accessToken,
      'Content-Type': 'application/json',
    });
  }
}
