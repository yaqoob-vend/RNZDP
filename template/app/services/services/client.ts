import axios from 'axios';
const BASE_URL = 'https://reqres.in/api/';
const TIME_OUT = 4 * 60 * 1000;
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
});
export const setClientToken = token => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export default axiosInstance;
