import { APIConstants } from './../constants/APIConstants';
import { BaseClient } from './BaseClient';
import { ProductsData, ProductData } from '../types/Product';

export class ProductClient extends BaseClient {
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
  async getAllByCollectionId(id: string): Promise<ProductsData> {
    const url = `${APIConstants.API_BASE_URL}/product/?collectionId=${id}`;
    return this._get<ProductsData>(url, null, {
      [APIConstants.ZECKO_ACCESS_TOKEN_HEADER_KEY]: this.accessToken,
    });
  }

  /**
   *
   * @param id Product ID
   */
  async getByProductId(id: string): Promise<ProductData> {
    const url = `${APIConstants.API_BASE_URL}/product/${id}`;
    return this._get<ProductData>(url, null, {
      [APIConstants.ZECKO_ACCESS_TOKEN_HEADER_KEY]: this.accessToken,
    });
  }
}
