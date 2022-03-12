import React from "react";
import style from "../post.module.scss";
import verified from "assets/images/verified.png";
import { MoreIcon } from "assets/icons";
import { getImage } from "helpers/image";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
export default function PostHead({ user }) {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate(`/profile/${user?.username}/posts`);
  };
  if (user) {
    return (
      <div className={style.post_owner}>
        <div>
          <img
            onClick={handleClick}
            src={getImage(user?.profileImg)}
            alt=""
            style={{ "object-fit": " cover" }}
          />

          <p onClick={handleClick}>{user?.username}</p>
          {user?.verified && (
            <img
              src={verified}
              style={{ width: "16px", height: "16px", marginLeft: "0.4rem" }}
            />
          )}
        </div>
        <MoreIcon />
      </div>
    );
  } else {
    return (
      <div className={style.post_owner}>
        <div>
          <Skeleton circle={true} style={{ width: "36px", height: "36px" }} />
          <Skeleton
            width={"50px"}
            style={{ marginLeft: "1rem", marginTop: "4px" }}
          />
        </div>
        <MoreIcon />
      </div>
    );
  }
}
