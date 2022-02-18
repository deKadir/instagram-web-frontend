import React from "react";
import startSharing from "assets/images/start_sharing.jpg";
import style from "./start.module.scss";
import appStore from "assets/images/app_store.png";
import googlePlay from "assets/images/google_play.png";
export default function StartSharing() {
  return (
    <div className={style.start}>
      <img src={startSharing} />
      <div className={style.start_body}>
        <h4>Start capturing and sharing your moments.</h4>
        <p>Get app to share your first photo or video</p>
        <div className={style.start_images}>
          <img src={appStore} />
          <img src={googlePlay} />
        </div>
      </div>
    </div>
  );
}
