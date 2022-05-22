import { Collection } from '../types/Collection';

import { APIConstants } from './../constants/APIConstants';
import { BaseClient } from './BaseClient';

export class CollectionClient extends BaseClient {
  public constructor(private readonly accessToken: string) {
    super();
  }

  async get(id: string): Promise<Collection> {
    const url = `${APIConstants.API_BASE_URL}/collections/${id}`;

    try {
      const { data } = await this._get<Collection>(url, null, {
        [APIConstants.ZECKO_ACCESS_TOKEN_HEADER_KEY]: this.accessToken,
      });

      return data;
    } catch (error) {
      throw new Error(
        `Failed to get collection with id ${id}. Status: ${
          error.response.status
        }. Error: ${error.message}. Details: ${JSON.stringify(
          error.response.data
        )}`
      );
    }
  }
}
