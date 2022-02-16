import Post from "components/post";
import React from "react";
import style from "./posts.module.scss";
export default function Posts() {
  return (
    <div>
      <Post />
      <Post />
      <Post />
    </div>
  );
}
