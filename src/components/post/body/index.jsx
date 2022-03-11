import React, { useState } from "react";
import { CareouselIconLeft } from "assets/icons";
import { CarouselIconRight } from "assets/icons";
import style from "./body.module.scss";
import { getImage } from "helpers/image";
import Loading from "components/loading/Loading";
export default function PostBody({ photos = [] }) {
  const [photoIndex, setPhotoIndex] = useState(0);

  if (photos.length) {
    return (
      <div className={style.post_content}>
        {photoIndex !== 0 && (
          <span className={style.leftArrow}>
            <CareouselIconLeft onClick={() => setPhotoIndex(photoIndex - 1)} />
          </span>
        )}

        <img src={getImage(photos[photoIndex])} alt="post_img" />
        {photos.length !== photoIndex + 1 && (
          <span className={style.rightArrow}>
            <CarouselIconRight onClick={() => setPhotoIndex(photoIndex + 1)} />
          </span>
        )}
        {photos.length > 1 && (
          <div className={style.dots}>
            {photos.map((photos, index) => (
              <span
                className={photoIndex === index ? style.dot_active : style.dot}
                key={index}
              ></span>
            ))}
          </div>
        )}
      </div>
    );
  }
  return <Loading />;
}
