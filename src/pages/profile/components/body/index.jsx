import React from "react";
import ProfileInfo from "../profileInfo";
import style from "./body.module.scss";
export default function ProfileBody() {
  return (
    <div className={style.profileBody}>
      <ProfileInfo />
    </div>
  );
}
