import React from "react";
import style from "./item.module.scss";
import profile from "assets/images/profile_img.jpg";
import { CloseIcon } from "assets/icons";
export const SearchItem = () => {
  return (
    <div className={style.item}>
      <img src={profile} />
      <div>
        <p>Kadir</p>
        <span>bio</span>
      </div>
      <CloseIcon />
    </div>
  );
};
