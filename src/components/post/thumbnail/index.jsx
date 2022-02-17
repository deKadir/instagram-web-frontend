import { VideoIcon, PhotosIcon } from "assets/icons";
import profile from "assets/images/post_img.jpg";
import style from "./thumbnail.module.scss";
export default function ThumbnailContainer({ children }) {
  return <div className={style.container}>{children}</div>;
}
export const ImageThumbnail = ({ single = false }) => {
  return (
    <div className={style.thumbnail_img}>
      {!single && <PhotosIcon />}
      <img src={profile} />
    </div>
  );
};
export const VideoThumbnail = () => {
  return (
    <div className={style.thumbnail_video}>
      <VideoIcon />
      <img src={profile} />
    </div>
  );
};
