import { Collection } from '../types/Collection';

import { APIConstants } from './../constants/APIConstants';
import { BaseClient } from './BaseClient';

export class CollectionClient extends BaseClient {
  /**
   * @ignore
   */
  public constructor(private readonly accessToken: string) {
    super();
  }

  /**
   *
   * @param id Collection ID
   */
  async get(id: string): Promise<Collection> {
    const url = `${APIConstants.API_BASE_URL}/collections/${id}`;
    return this._get<Collection>(url, null, {
      [APIConstants.ZECKO_ACCESS_TOKEN_HEADER_KEY]: this.accessToken,
    });
  }

  async getAll(): Promise<Collection> {
    const url = `${APIConstants.API_BASE_URL}/collections`;
    return this._get<Collection>(url, null, {
      [APIConstants.ZECKO_ACCESS_TOKEN_HEADER_KEY]: this.accessToken,
    });
  }
}
