import React, { useState } from "react";
import ProfileContents from "../profileContents";
import ProfileInfo from "../profileInfo";
import PrivateAccount from "../privateAccount";
import style from "./body.module.scss";
import { useSelector } from "react-redux";
export default function ProfileBody() {
  const [user, setUser] = useState();
  let { following, username } = useSelector((state) => state.user);
  return (
    <div className={style.profileBody}>
      <ProfileInfo user={user} setUser={setUser} />
      {user?.privateStatus &&
      !following.find((u) => u.username === user?.username) &&
      username !== user?.username ? (
        <PrivateAccount />
      ) : (
        <ProfileContents user={user} />
      )}
    </div>
  );
}
