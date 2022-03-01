import React from "react";
import { AddPhotosIcon } from "assets/icons";
import style from "./add.module.scss";
import { ButtonPrimary } from "components/buttons";
import { FileInput } from "components/inputs";
export default function Upload({ setPostForm, postForm, formData }) {
  return (
    <div className={style.upload}>
      <div className={style.upload_head}>
        <h1>Create new post</h1>
      </div>
      <div className={style.upload_body}>
        <AddPhotosIcon />
        <h2>Drag photos and videos here</h2>
        <ButtonPrimary>
          Select from computer
          <FileInput
            multiple={true}
            onChange={(e) => {
              const photos = [];
              for (let i = 0; i < e.target.files.length; i++) {
                photos.push(e.target.files[i]);
              }
              setPostForm({
                ...postForm,
                photos: photos,
              });
            }}
          />
        </ButtonPrimary>
      </div>
    </div>
  );
}
