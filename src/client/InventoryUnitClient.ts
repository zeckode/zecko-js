import { APIConstants } from '../constants/APIConstants';
import {
  InventoryUnitCancelRequest,
  InventoryUnitData,
  InventoryUnitExchangeRequest,
  InventoryUnitHistory,
  InventoryUnitReturnRequest,
} from '../types/InventoryUnit';

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

  async cancelById(id: string, inventoryUnitCancelRequest: InventoryUnitCancelRequest): Promise<InventoryUnitData> {
    const url = `${APIConstants.API_BASE_URL}/inventoryUnits/${id}/cancel`;

    return this._post<InventoryUnitData>(url, null, inventoryUnitCancelRequest, {
      [APIConstants.ZECKO_ACCESS_TOKEN_HEADER_KEY]: this.accessToken,
    });
  }

  /**
   *
   * @param id Inventory Unit ID
   *
   * @return {Promise<InventoryUnitData>}
   */

  async returnById(id: string, inventoryUnitReturnRequest: InventoryUnitReturnRequest): Promise<InventoryUnitData> {
    const url = `${APIConstants.API_BASE_URL}/inventoryUnits/${id}/return`;

    return this._post<InventoryUnitData>(url, null, inventoryUnitReturnRequest, {
      [APIConstants.ZECKO_ACCESS_TOKEN_HEADER_KEY]: this.accessToken,
    });
  }

  /**
   *
   * @param id Inventory Unit ID
   *
   * @return {Promise<InventoryUnitData>}
   */

  async exchangeById(
    id: string,
    inventoryUnitExchangeRequest: InventoryUnitExchangeRequest
  ): Promise<InventoryUnitData> {
    const url = `${APIConstants.API_BASE_URL}/inventoryUnits/${id}/exchange`;

    return this._post<InventoryUnitData>(url, null, inventoryUnitExchangeRequest, {
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
