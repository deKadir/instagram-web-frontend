import axios from "axios";
import { ApiConfig } from "constants/ApiConfig";
import { BASE_URL } from "constants/ApiConfig";
<<<<<<< HEAD
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
=======
export default function getUserPosts(token, userId) {
  return axios.get(`${BASE_URL}${ApiConfig.post.getUserPosts}/${userId}`, {
>>>>>>> 00f5158461c4b45e53ff8e466bc5d2d40eb2f451
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}
