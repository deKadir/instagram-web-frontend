import React from "react";
import style from "../post.module.scss";
import profile from "assets/images/post_img.jpg";
import { MoreIcon } from "assets/icons";
export default function PostHead() {
  return (
    <div className={style.post_owner}>
      <div>
        <img src={profile} alt="" />
        <a>
          <p>Kadir</p>
        </a>
      </div>
      <MoreIcon />
    </div>
  );
}
