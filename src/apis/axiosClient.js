import axios from "axios";

export const axiosClient = axios.create({
  // baseURL: "http://192.168.1.168:8000/",
  // baseURL: "http://192.168.1.201/",
  baseURL: "http://localhost:8000/",
  headers: {
    "Content-Type": "application/json",
  },
});
