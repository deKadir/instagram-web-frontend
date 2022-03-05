export const BASE_URL = "https://serene-meadow-49392.herokuapp.com/";

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
    likePost: "like/likePost",
  },
  comment: {
    add: "comment/add",
    comments: "comment/comments",
  },
};
