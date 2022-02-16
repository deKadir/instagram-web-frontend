import React from "react";
import style from "./story.module.scss";
import profile from "assets/images/profile_img.jpg";
export default function Story({ style: _style, sharer, width = "66px" }) {
  return (
    <div className={style.story}>
      <div className={style.story_container}>
        <div
          className={style.story_image}
          style={{ width: width, height: width }}
        >
          <img src={profile} />
        </div>
        <span>Kadir</span>
      </div>
    </div>
  );
}
