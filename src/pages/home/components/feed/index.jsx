import Posts from "components/posts";
import Stories from "components/stories/Stories";
import React from "react";
import style from "./feed.module.scss";
export default function Feed() {
  return (
    <div className={style.feed}>
      <Stories />
      <Posts />
    </div>
  );
}
