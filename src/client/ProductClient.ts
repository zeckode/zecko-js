import { ProductData, ProductsData } from '../types/Product';

import { APIConstants } from './../constants/APIConstants';
import { BaseClient } from './BaseClient';

export class ProductClient extends BaseClient {
  /**
   * @ignore
   */
  public constructor(private readonly accessToken: string) {
    super();
  }

  /**
   * return All Products of the given Collection Id
   * @param {string} collectionId - Collection Id
   * @param {string} [after = null] - cursor of the current page (pass any cursor to get the next product objects after the cursor)
   *                                - If not provided, the first product page will be returned
   *                                - If provided, the next product page of that cursor will be returned
   * @returns {Promise<ProductsData>}  The All Products Data with the given Cursor or the first page if no cursor is provided
   */
  async getAllByCollectionId(collectionId: string, after: string = null): Promise<ProductsData> {
    const searchParams = new URLSearchParams();
    if (after) {
      searchParams.append('after', after);
    }

    const url = `${APIConstants.API_BASE_URL}/products?collectionId=${collectionId}?${searchParams.toString()}`;

    return this._get<ProductsData>(url, null, {
      [APIConstants.ZECKO_ACCESS_TOKEN_HEADER_KEY]: this.accessToken,
    });
  }

  /**
   * return All Products of the given Product Id
   * @param {string} id - Product Id
   * @param {string} [imagesAfter = null] - cursor of the imgages of the current page (pass any cursor to get the next images after the cursor)
   *                                      - If not provided, the first images page will be returned
   *                                      - If provided, the next images page of that cursor will be returned
   * @param {string} [variantsAfter = null] - cursor of the variants of the current page (pass any cursor to get the next variants after the cursor)
   *                                        - If not provided, the first variants page will be returned
   *                                        - If provided, the next variants page of that cursor will be returned
   * @returns {Promise<ProductData>}  The Product Data of the given ID
   */
  async getById(id: string, imagesAfter: string = null, variantsAfter: string = null): Promise<ProductData> {
    const searchParams = new URLSearchParams();
    if (imagesAfter) {
      searchParams.append('imagesAfter', imagesAfter);
    }
    if (variantsAfter) {
      searchParams.append('variantsAfter', variantsAfter);
    }

    const url = `${APIConstants.API_BASE_URL}/products/${id}?${searchParams.toString()}`;

    return this._get<ProductData>(url, null, {
      [APIConstants.ZECKO_ACCESS_TOKEN_HEADER_KEY]: this.accessToken,
    });
  }
}
