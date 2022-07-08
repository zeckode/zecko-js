import { APIConstants } from '../constants/APIConstants';
import { InventoryUnitHistory } from '../types/InventoryUnit';

import { BaseClient } from './BaseClient';

export class InventoryUnitClient extends BaseClient {
  /**
   * @ignore
   */
  public constructor(private readonly accessToken: string) {
    super();
  }

  /**
   *
   * @param id Inventory Unit ID
   *
   * @return {Promise<void>}
   */

  async cancelById(id: string): Promise<void> {
    const url = `${APIConstants.API_BASE_URL}/inventoryUnits/${id}/cancel`;

    return this._post<void>(url, null, null, {
      [APIConstants.ZECKO_ACCESS_TOKEN_HEADER_KEY]: this.accessToken,
    });
  }

  /**
   *
   * @param id Inventory Unit ID
   *
   * @return {Promise<void>}
   */

  async returnById(id: string): Promise<void> {
    const url = `${APIConstants.API_BASE_URL}/inventoryUnits/${id}/return`;

    return this._post<void>(url, null, null, {
      [APIConstants.ZECKO_ACCESS_TOKEN_HEADER_KEY]: this.accessToken,
    });
  }

  /**
   *
   * @param id Inventory Unit ID
   *
   * @return {Promise<void>}
   */

  async exchangeById(id: string): Promise<void> {
    const url = `${APIConstants.API_BASE_URL}/inventoryUnits/${id}/exchange`;

    return this._post<void>(url, null, null, {
      [APIConstants.ZECKO_ACCESS_TOKEN_HEADER_KEY]: this.accessToken,
    });
  }

  /**
   *
   * @param id Inventory Unit ID
   *
   * @return {Promise<InventoryUnitHistory>}
   */

  async trackById(id: string): Promise<InventoryUnitHistory> {
    const url = `${APIConstants.API_BASE_URL}/inventoryUnits/${id}/track`;

    return this._get<InventoryUnitHistory>(url, null, {
      [APIConstants.ZECKO_ACCESS_TOKEN_HEADER_KEY]: this.accessToken,
    });
  }
}
