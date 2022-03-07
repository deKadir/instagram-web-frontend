import { BASE_URL, ApiConfig } from "constants/ApiConfig";
import axios from "axios";

export const sendMessage = (token, data) => {
  return axios.post(`${BASE_URL}${ApiConfig.chat.sendMessage}`, data, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

export const getRooms = (token) => {
  return axios.get(`${BASE_URL}${ApiConfig.chat.getRooms}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
export const getMessages = (token, query) => {
  return axios.get(`${BASE_URL}${ApiConfig.chat.getMessages}${query}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
