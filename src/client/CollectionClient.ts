import { APIConstants } from './../constants/APIConstants';
import { CollectionData, CollectionsData } from './../types/Collection';
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
  async get(id: string): Promise<CollectionData> {
    const url = `${APIConstants.API_BASE_URL}/collections/${id}`;
    return this._get<CollectionData>(url, null, {
      [APIConstants.ZECKO_ACCESS_TOKEN_HEADER_KEY]: this.accessToken,
    });
  }

  async getAll(): Promise<CollectionsData> {
    const url = `${APIConstants.API_BASE_URL}/collections`;
    return this._get<CollectionsData>(url, null, {
      [APIConstants.ZECKO_ACCESS_TOKEN_HEADER_KEY]: this.accessToken,
    });
  }
}
