import HomePosts from "components/homePosts";
import React from "react";
import style from "./feed.module.scss";
export default function Feed() {
  return (
    <div className={style.feed}>
      {/* <Stories /> */}
      <HomePosts />
    </div>
  );
}
