import React from "react";
import ProfileContents from "../profileContents";
import ProfileInfo from "../profileInfo";
import style from "./body.module.scss";
export default function ProfileBody() {
  return (
    <div className={style.profileBody}>
      <ProfileInfo />
      <ProfileContents />
    </div>
  );
}
