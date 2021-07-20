import axios, { AxiosInstance } from 'axios'

export const BASE_URL = "https://signati.app/_content/"

export const http: AxiosInstance = axios.create({
  timeout: 50000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'X-Requested-With': 'XMLHttpRequest',
    // 'Authorization': `Bearer ${Cookies.get('token')}`
  },
  baseURL: BASE_URL
});
