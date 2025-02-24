import { AxiosError, AxiosRequestConfig } from 'axios';

import { BaseQueryFn } from '@reduxjs/toolkit/query';

import { apiClient } from './api';

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
  ): BaseQueryFn<
    {
      data?: any;
      method: AxiosRequestConfig['method'];
      params?: any;
      url: string;
    },
    unknown,
    unknown
  > =>
  async ({ data, method, params, url }) => {
    try {
      const result = await apiClient({
        data,
        method,
        params,
        url: baseUrl + url,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          data: err.response?.data || err.message,
          status: err.response?.status,
        },
      };
    }
  };
