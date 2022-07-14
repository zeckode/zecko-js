import { APIConstants } from '../constants/APIConstants';
import { InventoryUnitData, InventoryUnitHistory } from '../types/InventoryUnit';

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
   * @return {Promise<InventoryUnitData>}
   */

  async cancelById(id: string): Promise<InventoryUnitData> {
    const url = `${APIConstants.API_BASE_URL}/inventoryUnits/${id}/cancel`;

    return this._post<InventoryUnitData>(url, null, null, {
      [APIConstants.ZECKO_ACCESS_TOKEN_HEADER_KEY]: this.accessToken,
    });
  }

  /**
   *
   * @param id Inventory Unit ID
   *
   * @return {Promise<InventoryUnitData>}
   */

  async returnById(id: string): Promise<InventoryUnitData> {
    const url = `${APIConstants.API_BASE_URL}/inventoryUnits/${id}/return`;

    return this._post<InventoryUnitData>(url, null, null, {
      [APIConstants.ZECKO_ACCESS_TOKEN_HEADER_KEY]: this.accessToken,
    });
  }

  /**
   *
   * @param id Inventory Unit ID
   *
   * @return {Promise<InventoryUnitData>}
   */

  async exchangeById(id: string): Promise<InventoryUnitData> {
    const url = `${APIConstants.API_BASE_URL}/inventoryUnits/${id}/exchange`;

    return this._post<InventoryUnitData>(url, null, null, {
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
