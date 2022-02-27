import axios from "axios";
import { ApiConfig } from "constants/ApiConfig";
import { BASE_URL } from "constants/ApiConfig";
export default function getUserPosts(token, userId) {
  return axios.get(`${BASE_URL}${ApiConfig.post.getUserPosts}/${userId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}
