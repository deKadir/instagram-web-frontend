import axios from "axios";
import { ApiConfig } from "constants/ApiConfig";
import { BASE_URL } from "constants/ApiConfig";
export function getUserPosts(token, userId, query) {
  return axios.get(
    `${BASE_URL}${ApiConfig.post.getUserPosts}/${userId}${query}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
}
export function sharePost(token, data) {
  return axios.post(`${BASE_URL}${ApiConfig.post.upload}`, data, {
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "multipart/form-data",
    },
  });
}
export function postFeed(token, query) {
  return axios.get(`${BASE_URL}${ApiConfig.post.postFeed}${query}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}
export function getPost(token, postId) {
  return axios.get(`${BASE_URL}${ApiConfig.post.getPost}/${postId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}
export function getPostLikes(token, postId) {
  return axios.get(`${BASE_URL}${ApiConfig.post.getPostLikes}/${postId}`, {
    headers: {
      authorization: `bearer ${token}`,
    },
  });
}
