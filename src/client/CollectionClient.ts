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
   * @param {string} id Collection Id
   * @returns {Promise<CollectionData>}
   */
  async getbyId(id: string): Promise<CollectionData> {
    const url = `${APIConstants.API_BASE_URL}/collections/${id}`;

    return this._get<CollectionData>(url, null, {
      [APIConstants.ZECKO_ACCESS_TOKEN_HEADER_KEY]: this.accessToken,
    });
  }

  /**
   *
   * @param after
   * If `data.collections.pageInfo.hasNextPage` is `true`, then request next page by passing
   * `data.collections.pageInfo.endCursor` as `after` parameter. You can also pass `data.collections.edges[i].cursor`
   * as `after` parameter to get results after that cursor.
   *
   * @returns {Promise<CollectionsData>}
   * Paginated collections list of maximum 250 collections. To request further collections, use `after` parameter.
   */
  async getAll(after?: string): Promise<CollectionsData> {
    const searchParams = new URLSearchParams();
    if (after) {
      searchParams.append('after', after);
    }

    const searchParamUrl = searchParams.toString() ? `?${searchParams.toString()}` : '';

    const url = `${APIConstants.API_BASE_URL}/collections${searchParamUrl}`;

    return this._get<CollectionsData>(url, null, {
      [APIConstants.ZECKO_ACCESS_TOKEN_HEADER_KEY]: this.accessToken,
    });
  }
}
