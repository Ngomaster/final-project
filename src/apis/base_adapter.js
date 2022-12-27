import axios, { isCancel, AxiosError } from "axios";

export const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_SERVER,
  headers: {
    "Content-Type": "application/json",
  },
});
