import axios from "axios";
import { ApiConfig, BASE_URL } from "constants/ApiConfig";

export const getActiveUser = (token) => {
  return axios.get(`${BASE_URL}${ApiConfig.user.getCurrentUser}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
export const getUserInfo = (username) => {
  return axios.get(`${BASE_URL}${ApiConfig.user.getUserInfo}/${username}`);
};

export const follow = (userId, token) => {
  return axios.post(
    `${BASE_URL}${ApiConfig.user.follow}/${userId}`,
    {},
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
};
export const updateUserInfo = (token, data) => {
  return axios.post(`${BASE_URL}${ApiConfig.user.update}`, data, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
export const getFollowers = (token, userId) => {
  return axios.get(`${BASE_URL}${ApiConfig.user.followers}/${userId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
export const getFollowings = (token, userId) => {
  return axios.get(`${BASE_URL}${ApiConfig.user.following}/${userId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
