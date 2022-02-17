import Post from "components/post";
import React from "react";
import style from "./posts.module.scss";
import profile from "assets/images/post_img.jpg";
export default function HomePosts() {
  return (
    <div>
      <Post>
        <img src={profile} />
      </Post>
      <Post>
        <img src={profile} />
      </Post>
      <Post>
        <img src={profile} />
      </Post>
    </div>
  );
}
