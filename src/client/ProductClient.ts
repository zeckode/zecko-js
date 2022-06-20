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
   * @param before
   * If `data.products.pageInfo.hasPreviousPage` is `true`, then request previous page by passing
   * `data.products.pageInfo.startCursor` as `before` parameter. You can also pass `data.products.edges[i].cursor`
   * as `before` parameter to get results before that cursor.
   *
   * @param after
   * If `data.products.pageInfo.hasNextPage` is `true`, then request next page by passing
   * `data.products.pageInfo.endCursor` as `after` parameter. You can also pass `data.products.edges[i].cursor`
   * as `after` parameter to get results after that cursor.
   *
   * @returns {Promise<ProductsData>}
   * Paginated products list of maximum 20 products. To request further products, use `after` parameter.
   */
  async getAllByCollectionId(collectionId: string, before?: string, after?: string): Promise<ProductsData> {
    const params = {
      collectionId: collectionId,
      before: before,
      after: after,
    };
    const url = `${APIConstants.API_BASE_URL}/products`;

    return this._get<ProductsData>(url, params, {
      [APIConstants.ZECKO_ACCESS_TOKEN_HEADER_KEY]: this.accessToken,
    });
  }

  /**
   * @param id Product Id
   *
   * @param imagesBefore
   * If `data.product.images.pageInfo.hasPreviousPage` is `true`, then request previous page by passing
   * `data.product.images.pageInfo.startCursor` as `imagesBefore` parameter. You can also pass `data.product.images.edges[i].cursor`
   * as `imagesBefore` parameter to get results before that cursor.
   *
   * @param imagesAfter
   * If `data.product.images.pageInfo.hasNextPage` is `true`, then request next page by passing
   * `data.product.images.pageInfo.endCursor` as `imagesAfter` parameter. You can also pass `data.product.images.edges[i].cursor`
   * as `imagesAfter` parameter to get results after that cursor.
   *
   * @param variantsBefore
   * If `data.product.variants.pageInfo.hasPreviousPage` is `true`, then request previous page by passing
   * `data.product.variants.pageInfo.startCursor` as `variantsBefore` parameter. You can also pass `data.product.variants.edges[i].cursor`
   * as `variantsBefore` parameter to get results before that cursor.
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
  async getById(
    id: string,
    imagesBefore?: string,
    imagesAfter?: string,
    variantsBefore?: string,
    variantsAfter?: string
  ): Promise<ProductData> {
    const params = {
      imagesBefore: imagesBefore,
      imagesAfter: imagesAfter,
      variantsBefore: variantsBefore,
      variantsAfter: variantsAfter,
    };
    const url = `${APIConstants.API_BASE_URL}/products/${id}`;

    return this._get<ProductData>(url, params, {
      [APIConstants.ZECKO_ACCESS_TOKEN_HEADER_KEY]: this.accessToken,
    });
  }
}
