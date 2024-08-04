import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { BASE_API_URL } from '@/constants';

const client = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

//@ts-expect-error
client.interceptors.request.use((config) => {
  const customConfig: AxiosRequestConfig = {
    ...config,
    headers: {
      ...config.headers,
    },
  };

  if (!customConfig.headers) return customConfig;

  return customConfig;
});

client.interceptors.response.use(
  async function (response) {
    return response;
  },

  async function (error: AxiosError) {
    if (error.response?.status === 403) {
      // window.location.href = '/auth';
    }

    return Promise.reject(error);
  },
);

export default client;
