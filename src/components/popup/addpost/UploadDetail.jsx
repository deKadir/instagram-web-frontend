import React from "react";
import style from "./add.module.scss";
import profile from "assets/images/profile_img.jpg";
import postImg from "assets/images/post_img.jpg";
import { ButtonText } from "components/buttons";
export default function UploadDetail() {
  return (
    <div className={style.upload_detail}>
      <div className={style.upload_detail_head}>
        <h1>Create new post</h1>
        <ButtonText>Share</ButtonText>
      </div>
      <div className={style.upload_detail_body}>
        <img src={postImg} className={style.upload_detail_body_img} />
        <div className={style.upload_detail_body_detail}>
          <div>
            <img src={profile} />
            <p>kadir</p>
          </div>
          <textarea placeholder="Write caption"></textarea>
          <span>0/2000</span>
        </div>
      </div>
    </div>
  );
}
