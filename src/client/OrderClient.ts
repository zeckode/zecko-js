import { OrderData, OrdersData } from '../types/Order';

import { APIConstants } from './../constants/APIConstants';
import { BaseClient } from './BaseClient';

export class OrderClient extends BaseClient {
  /**
   * @ignore
   */
  public constructor(private readonly accessToken: string) {
    super();
  }

  /**
   *
   * @param id Order ID
   *
   * @param lineItemsBefore
   * If `data.order.lineItems.pageInfo.hasPreviousPage` is `true`, then request previous page by passing
   * `data.order.lineItems.pageInfo.startCursor` as `lineItemsBefore` parameter. You can also pass `data.order.lineItems.edges[i].cursor`
   * as `lineItemsBefore` parameter to get results before that cursor.
   *
   * @param lineItemsAfter
   * If `data.order.lineItems.pageInfo.hasNextPage` is `true`, then request previous page by passing
   * `data.order.lineItems.pageInfo.endCursor` as `lineItemsAfter` parameter. You can also pass `data.order.lineItems.edges[i].cursor`
   * as `lineItemsAfter` parameter to get results after that cursor.
   *
   * @returns {Promise<OrderData>}
   * Order object containing maximum 20 line items in order.
   */

  async getById(id: string, lineItemsBefore?: string, lineItemsAfter?: string): Promise<OrderData> {
    const params = {
      lineItemsBefore: lineItemsBefore,
      lineItemsAfter: lineItemsAfter,
    };
    const url = `${APIConstants.API_BASE_URL}/orders/${id}`;

    return this._get<OrderData>(url, params, {
      [APIConstants.ZECKO_ACCESS_TOKEN_HEADER_KEY]: this.accessToken,
    });
  }

  /**
   *
   * @param customerId Customer ID
   *
   * @param before
   * If `data.orders.pageInfo.hasPreviousPage` is `true`, then request previous page by passing
   * `data.orders.pageInfo.startCursor` as `before` parameter. You can also pass `data.orders.edges[i].cursor`
   * as `before` parameter to get results before that cursor.
   *
   * @param after
   * If `data.orders.pageInfo.hasNextPage` is `true`, then request previous page by passing
   * `data.orders.pageInfo.endCursor` as `after` parameter. You can also pass `data.orders.edges[i].cursor`
   * as `after` parameter to get results after that cursor.
   *
   * @returns {Promise<OrdersData>}
   * Paginated orders list of maximum 10 orders and each order containing maximum 10 line items. To request further orders, use 'after' parameter
   */

  async getAllByCustomerId(customerId: string, before?: string, after?: string): Promise<OrdersData> {
    const params = {
      customerId: customerId,
      before: before,
      after: after,
    };
    const url = `${APIConstants.API_BASE_URL}/orders`;

    return this._get<OrdersData>(url, params, {
      [APIConstants.ZECKO_ACCESS_TOKEN_HEADER_KEY]: this.accessToken,
    });
  }
}
