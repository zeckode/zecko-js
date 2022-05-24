import axios from 'axios';

/**
 * @ignore
 */
export class BaseClient {
  /**
   * @ignore
   */
  async _get<T>(url: string, params: any, headers: any) {
    return axios.get<T>(url, { params, headers });
  }

  /**
   * @ignore
   */
  _post<T>(url: string, params: any, headers: any) {
    return axios.post<T>(url, { params, headers });
  }

  /**
   * @ignore
   */
  _put<T>(url: string, params: any, headers: any) {
    return axios.put<T>(url, { params, headers });
  }

  /**
   * @ignore
   */
  _delete<T>(url: string, params: any, headers: any) {
    return axios.delete<T>(url, { params, headers });
  }

  /**
   * @ignore
   */
  _patch<T>(url: string, params: any, headers: any) {
    return axios.patch<T>(url, { params, headers });
  }

  /**
   * @ignore
   */
  isSuccess(statusCode: number) {
    return statusCode >= 200 && statusCode < 300;
  }
}
