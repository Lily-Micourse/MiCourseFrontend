import axios, { AxiosInstance } from "axios";
import { Container } from "unstated";

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
  status: number;
  data?: any;
}

export class HttpService extends Container<{}> {
  private axiosInstance: AxiosInstance;

  constructor() {
    super();
    this.axiosInstance = axios.create({ baseURL: "" });
  }

  setToken(token: string) {
    this.axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  /**
   * Execute fetch.
   * @param fetchInfo fetch paramters
   * @returns parsed response body if the request is successful
   * @throws A HttpError object if the request is not successful.
   */
  async fetch<T>(fetchInfo: FetchInfo): Promise<T> {
    try {
      const response = await this.axiosInstance({
        method: fetchInfo.method,
        url: fetchInfo.path,
        params: fetchInfo.params,
        data: fetchInfo.body,
      });
      return response.data;
    } catch (e) {
      if (e.response) {
        // request is complete but the status code is out of 200-300
        // throw it as HttpError
        throw e as HttpError;
      } else if (e.request) {
        // request is sent but no response
        // likely network error
        // throw -1
        throw {
          status: -1,
          data: null,
        };
      } else {
        // some config problem
        // throw -2
        throw {
          status: -2,
          data: null,
        };
      }
    }
  }
}
