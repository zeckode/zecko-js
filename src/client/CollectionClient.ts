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
   * return All Collections of the given Collection Id
   * @param {string} id  Collection Id
   * @returns {Promise<CollectionData>}  The Collection Data of the given collection Id
   */
  async getbyId(id: string): Promise<CollectionData> {
    const url = `${APIConstants.API_BASE_URL}/collections/${id}`;

    return this._get<CollectionData>(url, null, {
      [APIConstants.ZECKO_ACCESS_TOKEN_HEADER_KEY]: this.accessToken,
    });
  }

  /**
   * return All Collections
   * @param {string} [after = null] - Cursor of the current page (pass any cursor to get the next objects after the cursor)
   *                                - If not provided, the first page will be returned
   *                                - If provided, the next page of that cursor will be returned
   * @returns {Promise<CollectionsData>}  The All Collections Data with the given Cursor or the first page if no cursor is provided
   */
  async getAll(after: string = null): Promise<CollectionsData> {
    const searchParams = new URLSearchParams();
    if (after) {
      searchParams.append('after', after);
    }

    const searchParamUrl = searchParams.toString()
      ? `?${searchParams.toString()}`
      : '';

    const url = `${APIConstants.API_BASE_URL}/collections${searchParamUrl}`;

    return this._get<CollectionsData>(url, null, {
      [APIConstants.ZECKO_ACCESS_TOKEN_HEADER_KEY]: this.accessToken,
    });
  }
}
