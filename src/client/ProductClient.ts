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
   * Paginated products list of maximum 10 products. To request further products, use `after` parameter.
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
   * @param metaFieldsBefore
   * If `data.product.metaFields.pageInfo.hasPreviousPage` is `true`, then request previous page by passing
   * `data.product.metaFields.pageInfo.startCursor` as `metaFieldsBefore` parameter. You can also pass `data.product.metaFields.edges[i].cursor`
   * as `metaFieldsBefore` parameter to get results before that cursor.
   *
   * @param metaFieldsAfter
   * If `data.product.metaFields.pageInfo.hasNextPage` is `true`, then request next page by passing
   * `data.product.metaFields.pageInfo.endCursor` as `metaFieldsAfter` parameter. You can also pass `data.product.metaFields.edges[i].cursor`
   * as `metaFieldsAfter` parameter to get results after that cursor.
   *
   * @returns {Promise<ProductData>}
   * Has a maximum of 20 images, 20 variants and 10 metaFields. To request further images, variants and metaFields,
   * use `imagesAfter`, `variantsAfter` and `metaFieldsAfter` parameters respectively.
   */
  async getById(
    id: string,
    imagesBefore?: string,
    imagesAfter?: string,
    variantsBefore?: string,
    variantsAfter?: string,
    metaFieldsBefore?: string,
    metaFieldsAfter?: string
  ): Promise<ProductData> {
    const params = {
      imagesBefore: imagesBefore,
      imagesAfter: imagesAfter,
      variantsBefore: variantsBefore,
      variantsAfter: variantsAfter,
      metaFieldsBefore: metaFieldsBefore,
      metaFieldsAfter: metaFieldsAfter,
    };
    const url = `${APIConstants.API_BASE_URL}/products/${id}`;

    return this._get<ProductData>(url, params, {
      [APIConstants.ZECKO_ACCESS_TOKEN_HEADER_KEY]: this.accessToken,
    });
  }

  async getRealtimeData(
    id: string,
  ): Promise<ProductData> {
    const url = `${APIConstants.API_BASE_URL}/products/realtime/${id}`;

    return this._get<ProductData>(url, {}, {
      [APIConstants.ZECKO_ACCESS_TOKEN_HEADER_KEY]: this.accessToken,
    });
  }
}
