import React from "react";
import Sidebar from "../sidebar";
import Feed from "./../feed/index";
import style from "./body.module.scss";
export default function HomeBody() {
  return (
    <div className={style.body_container}>
      <Feed />
      <Sidebar />
    </div>
  );
}
