import React, { useState } from "react";
import ProfileContents from "../profileContents";
import ProfileInfo from "../profileInfo";
import PrivateAccount from "../privateAccount";
import style from "./body.module.scss";
import { useSelector } from "react-redux";
export default function ProfileBody() {
  const [user, setUser] = useState();
  let { username } = useSelector((state) => state.user);
  document.title = `@${user?.username}` || "Instagram";
  return (
    <div className={style.profileBody}>
      <ProfileInfo user={user} setUser={setUser} />
      <ProfileContents user={user} />
    </div>
  );
}
