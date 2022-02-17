import React from "react";
import style from "./gridposts.module.scss";
export default function GridPosts({ children }) {
  return <div className={style.gridPosts}>{children}</div>;
}
