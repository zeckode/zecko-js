/**
 * @ignore
 */
export class APIConstants {
  static readonly API_BASE_URL: string = process.env.ZECKO_API_BASE_URL || 'http://localhost:5000/retailer/v1';

  static readonly ZECKO_ACCESS_TOKEN_HEADER_KEY = 'X-ZECKO-ACCESS-TOKEN';
}
