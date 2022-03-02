import { BASE_URL, ApiConfig } from "constants/ApiConfig";
import axios from "axios";

export const addComment = (token, data) => {
  return axios.post(`${BASE_URL}${ApiConfig.comment.add}`, data, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

export const getPostComments = (token, postId) => {
  return axios.get(`${BASE_URL}${ApiConfig.comment.comments}/${postId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
