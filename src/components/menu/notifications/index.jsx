import React from "react";
import style from "./notification.module.scss";
import profile from "assets/images/profile_img.jpg";
import postImg from "assets/images/post_img.jpg";
import { NotificationRightButton } from "assets/icons";
export const NotificationItem = () => {
  return (
    <div className={style.notification_item}>
      <img src={profile} alt="" />
      <div className={style.notification_item_body}>
        <span>
          <p>kadir </p>
          mentioned you in comment:
          <br /> hello world!
          <small>7w</small>
        </span>
      </div>
      <img src={postImg} alt="" />
    </div>
  );
};
export default function NotificationMenu({ children }) {
  return (
    <div className={style.notification}>
      <div className={style.notification_head}>
        <div className={style.notification_head_imgs}>
          <img src={profile} alt="" />
          <img src={profile} alt="" />
        </div>
        <div className={style.notification_head_body}>
          <p>Follow Requests</p>
          <span>kadir+99 others</span>
        </div>
        <NotificationRightButton />
      </div>
      <div className={style.notification_menu}>
        <p>Earlier</p>
        {children}
      </div>
    </div>
  );
}
