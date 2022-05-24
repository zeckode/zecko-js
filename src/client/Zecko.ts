import { SDKParams } from '../types/SDKParams';

import { CollectionClient } from './CollectionClient';

export class Zecko {
  readonly accessToken: string;
  readonly collectionClient: CollectionClient;

  public constructor(sdkParams: SDKParams) {
    if (!sdkParams || !sdkParams.accessToken) {
      throw new Error('Missing required parameter: accessToken');
    }

    this.accessToken = sdkParams.accessToken;
    this.collectionClient = new CollectionClient(this.accessToken);
  }
}
