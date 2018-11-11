import axios from "axios";

export interface FetchInfo {
  path?: string;
  method?: HttpMethod;
  params?: { [s: string]: string };
  body?: any;
  headers?: { [s: string]: string };
}

export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  DELETE = "DELETE",
  PATCH = "PATCH",
  PUT = "PUT",
}

export interface HttpError {
  status: string;
  data?: { [s: string]: string };
}

export class HttpService {
  axiosInstance = axios.create({ baseURL: "" });

  setToken(token: string) {
    this.axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  async fetch<T>(fetchInfo: FetchInfo): Promise<T> {
    const response = await this.axiosInstance({
      method: fetchInfo.method,
      url: fetchInfo.path,
      params: fetchInfo.params,
      data: fetchInfo.body,
    });
    return response.data;

  }

}
