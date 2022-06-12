/**
 * @ignore
 */
export class APIConstants {
  static readonly API_BASE_URL: string = process.env.ZECKO_API_BASE_URL || 'https://api.zecko.co/retailer/v1';

  static readonly ZECKO_ACCESS_TOKEN_HEADER_KEY = 'X-ZECKO-ACCESS-TOKEN';
}
