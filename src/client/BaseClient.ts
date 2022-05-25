import axios, { AxiosRequestConfig, Method } from 'axios';

import { BaseException } from '../exception/BaseException';

/**
 * @ignore
 */
export class BaseClient {
  /**
   * @ignore
   */
  async _get<T>(url: string, params: any, headers: any) {
    return this.#request<T>({ url, params, headers, method: 'GET' as Method });
  }

  /**
   * @ignore
   */
  _post<T>(url: string, params: any, headers: any) {
    return this.#request<T>({ url, params, headers, method: 'POST' as Method });
  }

  /**
   * @ignore
   */
  _put<T>(url: string, params: any, headers: any) {
    return this.#request<T>({ url, params, headers, method: 'PUT' as Method });
  }

  /**
   * @ignore
   */
  _delete<T>(url: string, params: any, headers: any) {
    return this.#request<T>({ url, params, headers, method: 'DELETE' as Method });
  }

  /**
   * @ignore
   */
  _patch<T>(url: string, params: any, headers: any) {
    return this.#request<T>({ url, params, headers, method: 'PATCH' as Method });
  }

  /**
   * @ignore
   */
  #request<T>(request: AxiosRequestConfig) {
    return new Promise<T>((resolve, reject) => {
      axios(request)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(new BaseException(error.response.status, error.response.data.message, error.response.data.timestamp));
        });
    });
  }
}
