import { VideoIcon, PhotosIcon, HeartIcon, CommentIcon } from "assets/icons";
import profile from "assets/images/post_img.jpg";
import style from "./thumbnail.module.scss";

export default function ThumbnailContainer({ children }) {
  return <div className={style.container}>{children}</div>;
}
export const ImageThumbnail = ({ single = false }) => {
  return (
    <div className={style.thumbnail_img}>
      <div className={style.thumbnail_hover}>
        <p>
          <HeartIcon /> 123
        </p>
        <p>
          <CommentIcon /> 32
        </p>
      </div>
      {!single && <PhotosIcon />}
      <img src={profile} />
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
      <img src={profile} />
    </div>
  );
};
