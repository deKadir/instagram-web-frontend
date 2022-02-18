import React from "react";
import style from "./sidebar.module.scss";
import { Link } from "react-router-dom";
export default function SettingsSidebar() {
  return (
    <div className={style.sidebar}>
      <Link to={"/settings/edit"}>Edit profile</Link>
      <Link to={"/settings/change-password"}>Change Password</Link>
      <Link to={"/settings/security"}>Security and Privacy</Link>
    </div>
  );
}
