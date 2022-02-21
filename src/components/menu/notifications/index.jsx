import React, { useState } from "react";
import style from "./notification.module.scss";
import profile from "assets/images/profile_img.jpg";
import postImg from "assets/images/post_img.jpg";
import { NotificationRightButton } from "assets/icons";
import { ButtonPrimary } from "components/buttons";
import { ButtonSecondary } from "components/buttons";
export default function NotificationMenu({ children }) {
  const [requestTab, setRequestTab] = useState(false);
  return (
    <div className={style.notification}>
      {!requestTab && (
        <div
          className={style.notification_head}
          onClick={() => {
            setRequestTab(true);
          }}
        >
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
      )}
      <div className={style.notification_menu}>
        {!requestTab && <p>Earlier</p>}
        {children}
      </div>
    </div>
  );
}

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
export const FollowRequest = () => {
  return (
    <div className={style.follow_request}>
      <img src={postImg} />
      <div className={style.follow_request_container}>
        <div>
          <p>kadir</p>
          <span>Kadir</span>
        </div>
        <ButtonPrimary>Confirm</ButtonPrimary>
        <ButtonSecondary>Delete</ButtonSecondary>
      </div>
    </div>
  );
};
