import React from "react";
import Follow from "components/follow";
import style from "./suggestion.module.scss";
export default function Suggestions() {
  return (
    <div className={style.suggestions}>
      <div>
        <p>Suggestions for you</p>
        <button>see all</button>
      </div>
      <Follow />
      <Follow />
      <Follow />
    </div>
  );
}
