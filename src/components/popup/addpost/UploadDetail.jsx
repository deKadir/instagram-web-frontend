import React from "react";
import style from "./add.module.scss";

import { ButtonText } from "components/buttons";
import { getImage } from "helpers/image";
import { PhotosIcon } from "assets/icons";
export default function UploadDetail({
  handleFormSubmit,
  postForm,
  setPostForm,
  response,
  userInfo,
}) {
  return (
    <div className={style.upload_detail}>
      <div className={style.upload_detail_head}>
        <h1>Create new post</h1>
        <ButtonText disabled={response.waiting} onClick={handleFormSubmit}>
          Share
        </ButtonText>
      </div>
      <div className={style.upload_detail_body}>
        <div className={style.upload_detail_body_img}>
          <img src={URL.createObjectURL(postForm?.photos[0])} alt="post" />
          {postForm.photos.length > 1 && <PhotosIcon />}
        </div>

        <div className={style.upload_detail_body_detail}>
          <div>
            <img src={getImage(userInfo?.profileImg)} alt="post" />
            <p>{userInfo?.username}</p>
          </div>
          <textarea
            placeholder="Write caption"
            onChange={(e) => {
              setPostForm({ ...postForm, description: e.target.value });
            }}
          ></textarea>
          <span>{postForm.description.length}/2000</span>
          <h5
            style={{
              color: response.error ? "red" : "green",
              alignSelf: "flex-end",
            }}
          >
            {response.message}
          </h5>
        </div>
      </div>
    </div>
  );
}
