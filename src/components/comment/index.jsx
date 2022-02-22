import React from "react";
import style from "./comment.module.scss";
import profile from "assets/images/profile_img.jpg";
import { HeartIcon } from "assets/icons";
export default function Comment() {
  return (
    <div className={style.comment}>
      <img src={profile} />
      <div className={style.comment_body}>
        <p className={style.comment_message}>
          kadir <span> güzel olmuş</span>
        </p>

        <div className={style.comment_info}>
          <small>2h</small>
          <span>26 likes</span>
        </div>
      </div>
      <HeartIcon />
    </div>
  );
}
