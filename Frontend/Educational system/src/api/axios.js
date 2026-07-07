import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:2001",
  withCredentials: true,
});

Api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default Api;
