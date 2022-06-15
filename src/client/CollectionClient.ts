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
   *
   * @returns {Promise<CollectionData>}
   */
  async getbyId(id: string): Promise<CollectionData> {
    const params = new Object({
      id: id,
    });
    const url = `${APIConstants.API_BASE_URL}/collections`;

    return this._get<CollectionData>(url, params, {
      [APIConstants.ZECKO_ACCESS_TOKEN_HEADER_KEY]: this.accessToken,
    });
  }

  /**
   *
   *
   * @param before
   * If `data.collections.pageInfo.hasPreviousPage` is `true`, then request previous page by passing
   * `data.collections.pageInfo.startCursor` as `before` parameter. You can also pass `data.collections.edges[i].cursor`
   * as `before` parameter to get results before that cursor.
   *
   * @param after
   * If `data.collections.pageInfo.hasNextPage` is `true`, then request next page by passing
   * `data.collections.pageInfo.endCursor` as `after` parameter. You can also pass `data.collections.edges[i].cursor`
   * as `after` parameter to get results after that cursor.
   *
   * @returns {Promise<CollectionsData>}
   * Paginated collections list of maximum 250 collections. To request further collections, use `after` parameter.
   */
  async getAll(before?: string, after?: string): Promise<CollectionsData> {
    const params = new Object({
      before: before,
      after: after,
    });
    const url = `${APIConstants.API_BASE_URL}/collections`;

    return this._get<CollectionsData>(url, params, {
      [APIConstants.ZECKO_ACCESS_TOKEN_HEADER_KEY]: this.accessToken,
    });
  }
}
