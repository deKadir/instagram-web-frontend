import React from "react";
import style from "../post.module.scss";

import { MoreIcon } from "assets/icons";
import { getImage } from "helpers/image";
import { useNavigate } from "react-router-dom";
export default function PostHead({ user }) {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate(`/profile/${user?.username}/posts`);
  };

  return (
    <div className={style.post_owner}>
      <div>
        <img onClick={handleClick} src={getImage(user?.profileImg)} alt="" />

        <p onClick={handleClick}>{user?.username}</p>
      </div>
      <MoreIcon />
    </div>
  );
}
