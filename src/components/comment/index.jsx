import React from "react";
import style from "./comment.module.scss";
import profile from "assets/images/profile_img.jpg";
import { HeartIcon } from "assets/icons";
import { useNavigate } from "react-router-dom";
import { getImage } from "helpers/image";

export default function Comment({ comment }) {
  let navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/profile/${comment?.owner?.username}/posts`);
  };
  return (
    <div className={style.comment}>
      <img
        src={getImage(comment?.owner?.profileImg)}
        onClick={handleNavigate}
      />
      <div className={style.comment_body}>
        <p className={style.comment_message} onClick={handleNavigate}>
          {comment?.owner?.username} <span>{comment?.comment}</span>
        </p>

        <div className={style.comment_info}>
          <small>{comment?.createdAt}</small>
          <span>26 likes</span>
        </div>
      </div>
      <HeartIcon />
    </div>
  );
}
