import { SDKParams } from '../types/SDKParams';

import { CollectionClient } from './CollectionClient';
import { ProductClient } from './ProductClient';

export class Zecko {
  /**
   * @ignore
   */
  readonly accessToken: string;

  readonly collectionClient: CollectionClient;

  readonly productClient: ProductClient;

  /**
   *
   * @param sdkParams Pass your accessToken here.
   * <br>
   * <h2>Usage examples:</h2>
   * <h3>Collections</h3>
   * <b>Get all collections</b>
   * <br><br>
   *
   * ```
   * const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
   * return zecko.collectionClient.getAll();
   * ```
   *
   * <b>Get collection by ID</b>
   *
   * ```
   * const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
   * return zecko.collectionClient.get('YOUR_COLLECTION_ID');
   * ```
   * <h3>Products</h3>
   * <b>Get all products</b>
   * <br><br>
   *
   * ```
   * const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
   * return zecko.productClient.getAll();
   * ```
   *
   * <b>Get product by ID</b>
   *
   * ```
   * const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
   * return zecko.productClient.get('YOUR_PRODUCT_ID');
   * ```
   *
   * - All examples available at https://github.com/zeckode/zecko-js-examples/tree/main/src/examples/js <br>
   * - For detailed documentation, visit respective class docs below.
   */
  public constructor(sdkParams: SDKParams) {
    if (!sdkParams || !sdkParams.accessToken) {
      throw new Error('Missing required parameter: accessToken');
    }

    this.accessToken = sdkParams.accessToken;
    this.collectionClient = new CollectionClient(this.accessToken);
    this.productClient = new ProductClient(this.accessToken);
  }
}
