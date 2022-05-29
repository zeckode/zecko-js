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
   * @param collectionId Collection Id
   *
   * @param after
   * If `data.products.pageInfo.hasNextPage` is `true`, then request next page by passing
   * `data.products.pageInfo.endCursor` as `after` parameter. You can also pass `data.products.edges[i].cursor`
   * as `after` parameter to get results after that cursor.
   *
   * @returns {Promise<ProductsData>}
   * Paginated products list of maximum 20 products. To request further products, use `after` parameter.
   */
  async getAllByCollectionId(collectionId: string, after?: string): Promise<ProductsData> {
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
   * @param id Product Id
   *
   * @param imagesAfter
   * If `data.product.images.pageInfo.hasNextPage` is `true`, then request next page by passing
   * `data.product.images.pageInfo.endCursor` as `imagesAfter` parameter. You can also pass `data.product.images.edges[i].cursor`
   * as `imagesAfter` parameter to get results after that cursor.
   *
   * @param variantsAfter
   * If `data.product.variants.pageInfo.hasNextPage` is `true`, then request next page by passing
   * `data.product.variants.pageInfo.endCursor` as `variantsAfter` parameter. You can also pass `data.product.variants.edges[i].cursor`
   * as `variantsAfter` parameter to get results after that cursor.
   *
   * @returns {Promise<ProductData>}
   * Has a maximum of 10 images and 5 variants. To request further images and variants,
   * use `imagesAfter` and `variantsAfter` parameters respectively.
   */
  async getById(id: string, imagesAfter?: string, variantsAfter?: string): Promise<ProductData> {
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
