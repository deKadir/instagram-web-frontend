import axios from "axios";
import { ApiConfig, BASE_URL } from "constants/ApiConfig";

export const getActiveUser = (token) => {
  return axios.get(`${BASE_URL}${ApiConfig.user.getCurrentUser}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
