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
    changePassword: "user/changePassword",
    searchUser: "user/searchUser",
    getSavedPosts: "user/getSavedPosts",
    savePost: "user/savePost",
    sendVerificationCode: "user/sendVerificationCode",
    resetPassword: "user/reset-password",
  },
  post: {
    getUserPosts: "post/userPosts",
    upload: "post/upload",
    postFeed: "post/postFeed",
    getPost: "post/getPost",
    getPostLikes: "like/postLikes",
    likePost: "like/likePost",
    explore: "post/explore",
  },
  comment: {
    add: "comment/add",
    comments: "comment/comments",
  },
  chat: {
    sendMessage: "chat/sendMessage",
    getRooms: "chat/getRooms",
    getMessages: "chat/getMessages",
  },
};
