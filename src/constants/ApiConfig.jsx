export const BASE_URL = "http://localhost:3001/api/";

export const ApiConfig = {
  auth: {
    login: "auth/login",
    register: "auth/register",
  },
  user: {
    getCurrentUser: "user/getCurrentUser",
    getUserInfo: "user/getUserInfo",
    follow: "user/follow",
    update: "user/edit",
    followers: "user/getFollowers",
    following: "user/getFollowings",
  },
  post: {
    getUserPosts: "post/userPosts",
  },
};
