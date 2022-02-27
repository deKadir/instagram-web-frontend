import React from "react";
import style from "./private.module.scss";
export default function PrivateAccount() {
  return (
    <div className={style.private_account}>
      <h4>This Account is private</h4>
      <p>Follow to see their photos and videos. </p>
    </div>
  );
}
