import React from "react";
import profile from "assets/images/profile_img.jpg";
import style from "./profileInfo.module.scss";
import { EditProfile } from "../actions";
export default function ProfileInfo() {
  return (
    <div className={style.profile}>
      <img src={profile} alt="profile" />
      <div className={style.profile_info}>
        <div className={style.profile_account}>
          <h4>kadir</h4>
          <EditProfile />
        </div>
        <div className={style.profile_user}>
          <p>
            12 <span>posts</span>
          </p>
          <p>
            187M<span>followers</span>
          </p>
          <p>
            421<span>following</span>
          </p>
        </div>
        <p>Kadir Develioglu</p>
      </div>
    </div>
  );
}
