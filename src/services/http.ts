import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { AppConfig } from '../config';

/**
 * Handler for api response
 * @param response
 * @returns
 */
export const handleApiResponse = (response: AxiosResponse) => {
  if (response.data) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

/**
 * Wrapper for http requests
 */
export const http = {
  /**
   * Make http requests and put api_key to params
   * @param config
   * @returns
   */
  request: async (config: AxiosRequestConfig) => {
    return axios.request({
      ...config,
      baseURL: AppConfig.API_URL,
      params: {
        api_key: AppConfig.API_TOKEN,
        ...config.params,
      },
    });
  },
};
