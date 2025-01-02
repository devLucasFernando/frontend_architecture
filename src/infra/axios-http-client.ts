import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export interface HttpClient {
  get<T>(url: string, config?: unknown): Promise<T>;
  post<T, R>(url: string, data: T, config?: unknown): Promise<R>;
  put<T, R>(url: string, data: T, config?: unknown): Promise<R>;
  patch<T, R>(url: string, data: T, config?: unknown): Promise<R>;
  delete<R>(url: string, config?: unknown): Promise<R>;
}

export class AxiosHttpClient implements HttpClient {
  private client: AxiosInstance;

  constructor(baseURL?: string) {
    this.client = axios.create({
      baseURL, 
    });
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.get<T>(url, config);
    return response.data;
  }

  async post<T, R>(url: string, data: T, config?: AxiosRequestConfig): Promise<R> {
    const response = await this.client.post<R>(url, data, config);
    return response.data;
  }

  async put<T, R>(url: string, data: T, config?: AxiosRequestConfig): Promise<R> {
    const response = await this.client.put<R>(url, data, config);
    return response.data;
  }

  async patch<T, R>(url: string, data: T, config?: AxiosRequestConfig): Promise<R> {
    const response = await this.client.patch<R>(url, data, config);
    return response.data;
  }

  async delete<R>(url: string, config?: AxiosRequestConfig): Promise<R> {
    const response = await this.client.delete<R>(url, config);
    return response.data;
  }
}
