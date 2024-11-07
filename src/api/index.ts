// src/api/axiosInstance.js
import axios from "axios";

export const apiClient = axios.create({
  baseURL: `https://eyebrowapi.softbenz.com.np/api/`,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API error:", error.response || error.message);
    return Promise.reject(error.response || "Something went wrong");
  }
);
