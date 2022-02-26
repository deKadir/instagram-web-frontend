import { ApiConfig, BASE_URL } from "constants/ApiConfig";
import axios from "axios";

export const login = (data) => {
  return axios.post(`${BASE_URL}${ApiConfig.auth.login}`, data);
};
export const register = (data) => {
  return axios.post(`${BASE_URL}${ApiConfig.auth.register}`, data);
};
