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
    updateProfileImg: "user/updateProfileImg",
  },
  post: {
    getUserPosts: "post/userPosts",
    upload: "post/upload",
    postFeed: "post/postFeed",
    getPost: "post/getPost",
    getPostLikes: "like/postLikes",
  },
  comment: {
    add: "comment/add",
    comments: "comment/comments",
  },
};
