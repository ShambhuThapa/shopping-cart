import axios from "axios";

export const apiClient = axios.create({
  baseURL: `https://eyebrowapi.softbenz.com.np/api/`,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error.response || "Something went wrong");
  }
);
