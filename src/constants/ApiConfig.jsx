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
<<<<<<< HEAD
    upload: "post/upload",
    postFeed: "post/postFeed",
    getPost: "post/getPost",
=======
>>>>>>> 00f5158461c4b45e53ff8e466bc5d2d40eb2f451
  },
};
