import axios from "axios";
import type { AxiosRequestConfig, AxiosError } from "axios";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import { logoutUser } from "@/redux/auth/slice";

const BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL + "/api",
  withCredentials: true,
});

// api.interceptors.request.use(
//   function (config) {
//     console.log(config.data);

//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

const axiosBaseQuery =
  (): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, headers }, { dispatch }) => {
    try {
      const result = await api({
        url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;

      if (
        (err.response && err.response.status === 401) ||
        (err.response && err.response.status === 403)
      ) {
        dispatch(logoutUser());
      }

      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export { BASE_URL, api, axiosBaseQuery };
