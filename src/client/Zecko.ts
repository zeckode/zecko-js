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
   *
   * <h3>Collection</h3>
   * <b>Get collection by ID</b>
   * <br><br>
   *
   * ```
   * const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
   * return zecko.collectionClient.get(id);
   * ```
   *
   * <b>Get all collections</b>
   *
   * ```
   * const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
   * return zecko.collectionClient.getAll();
   * ```
   *
   * <h3>Product</h3>
   * <b>Get product by ID</b>
   * <br><br>
   *
   * ```
   * const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
   * return zecko.productClient.get(id);
   * ```
   *
   * <b>Get all products</b>
   *
   * ```
   * const zecko = new Zecko({ accessToken: 'YOUR_ACCESS_TOKEN' });
   * return zecko.productClient.getAll();
   * ```
   *
   * - All examples available at https://github.com/zeckode/zecko-js-examples/tree/main/src/examples/js <br>
   * - For detailed documentation, visit respective class docs.
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
