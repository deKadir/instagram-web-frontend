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
export const getMessages = (token, roomId) => {
  return axios.get(`${BASE_URL}${ApiConfig.chat.getMessages}?room=${roomId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

export const getRoom = (token, userId) => {
  return axios.get(`${BASE_URL}${ApiConfig.chat.getRoom}?userId=${userId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
