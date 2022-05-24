import axios from 'axios';

export class BaseClient {
  async _get<T>(url: string, params: any, headers: any) {
    return axios.get<T>(url, { params, headers });
  }

  _post<T>(url: string, params: any, headers: any) {
    return axios.post<T>(url, { params, headers });
  }

  _put<T>(url: string, params: any, headers: any) {
    return axios.put<T>(url, { params, headers });
  }

  _delete<T>(url: string, params: any, headers: any) {
    return axios.delete<T>(url, { params, headers });
  }

  _patch<T>(url: string, params: any, headers: any) {
    return axios.patch<T>(url, { params, headers });
  }

  isSuccess(statusCode: number) {
    return statusCode >= 200 && statusCode < 300;
  }
}
