import React from "react";
import style from "./comment.module.scss";
import { useNavigate } from "react-router-dom";
import { getImage } from "helpers/image";
import verified from "assets/images/verified.png";
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
        alt={comment?.owner?.username}
      />
      <div className={style.comment_body}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p
            className={style.comment_message}
            onClick={handleNavigate}
            style={{ marginRight: ".5rem" }}
          >
            {comment?.owner?.username}
          </p>
          {comment?.owner?.verified && (
            <img src={verified} style={{ width: "16px", height: "16px" }} />
          )}

          <span style={{ fontSize: "0.875rem" }}>{comment?.comment}</span>
        </div>

        <div className={style.comment_info}>
          <small>{comment?.createdAt}</small>
        </div>
      </div>
    </div>
  );
}
