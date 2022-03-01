import { VideoIcon, PhotosIcon, HeartIcon, CommentIcon } from "assets/icons";
import profile from "assets/images/post_img.jpg";
import { getImage } from "helpers/image";
import style from "./thumbnail.module.scss";

export default function ThumbnailContainer({ children }) {
  return <div className={style.container}>{children}</div>;
}
<<<<<<< HEAD
export const ImageThumbnail = ({ single = false, likes = 0, photo = "" }) => {
=======
export const ImageThumbnail = ({ single = false, likes = 0, photos = {} }) => {
  console.log(likes);
  console.log(photos);
>>>>>>> 00f5158461c4b45e53ff8e466bc5d2d40eb2f451
  return (
    <div className={style.thumbnail_img}>
      <div className={style.thumbnail_hover}>
        <p>
          <HeartIcon /> {likes}
        </p>
        <p>
          <CommentIcon /> 32
        </p>
      </div>
<<<<<<< HEAD
      {single && <PhotosIcon />}
      <img src={getImage(photo)} alt="post" />
=======
      {!single && <PhotosIcon />}
      <img src={getImage(photos)} />
>>>>>>> 00f5158461c4b45e53ff8e466bc5d2d40eb2f451
    </div>
  );
};
export const VideoThumbnail = () => {
  return (
    <div className={style.thumbnail_video}>
      <div className={style.thumbnail_hover}>
        <p>
          <HeartIcon /> 123
        </p>
        <p>
          <CommentIcon /> 42
        </p>
      </div>
      <VideoIcon />
      <img src={profile} alt="thumbnail" />
    </div>
  );
};
