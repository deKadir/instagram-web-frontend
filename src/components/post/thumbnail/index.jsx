import { VideoIcon, PhotosIcon, HeartIcon, CommentIcon } from "assets/icons";
import profile from "assets/images/post_img.jpg";
import { getImage } from "helpers/image";
import style from "./thumbnail.module.scss";

export default function ThumbnailContainer({ children }) {
  return <div className={style.container}>{children}</div>;
}
export const ImageThumbnail = ({ post }) => {
  return (
    <div className={style.thumbnail_img}>
      <div className={style.thumbnail_hover}>
        <p>
          <HeartIcon /> {post?.likeCount}
        </p>
        <p>
          <CommentIcon /> {post?.commentCount}
        </p>
      </div>
      {post?.photos.length > 1 && <PhotosIcon />}
      <img src={getImage(post?.photos[0])} alt="post" />
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
