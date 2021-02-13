import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { AppConfig } from '../config';

export const handleApiResponse = (response: AxiosResponse) => {
  if (response.data) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

export const http = {
  request: async (config: AxiosRequestConfig) => {
    return axios.request({
      ...config,
      baseURL: AppConfig.API_URL,
      params: {
        ...config.params,
        api_key: AppConfig.API_TOKEN,
      },
    });
  },
};
