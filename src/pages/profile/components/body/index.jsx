import React, { useState } from "react";
import ProfileContents from "../profileContents";
import ProfileInfo from "../profileInfo";

import style from "./body.module.scss";
export default function ProfileBody() {
  const [user, setUser] = useState();

  document.title = `@${user?.username}` || "Instagram";
  return (
    <div className={style.profileBody}>
      <ProfileInfo user={user} setUser={setUser} />
      <ProfileContents user={user} />
    </div>
  );
}
