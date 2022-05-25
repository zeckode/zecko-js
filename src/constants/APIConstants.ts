export class APIConstants {
  static readonly API_BASE_URL: string =
    process.env.ZECKO_API_BASE_URL || 'http://127.0.0.1:5000/api/retailer/v1';
  static readonly ZECKO_ACCESS_TOKEN_HEADER_KEY = 'X-ZECKO-ACCESS-TOKEN';
}
