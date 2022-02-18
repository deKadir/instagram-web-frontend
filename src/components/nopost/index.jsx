import { TaggedIcon } from "assets/icons";
import React from "react";
import style from "./nopost.module.scss";

export default function NoPost() {
  return (
    <div className={style.nopost}>
      <TaggedIcon />
      <h1>No post found</h1>
    </div>
  );
}
