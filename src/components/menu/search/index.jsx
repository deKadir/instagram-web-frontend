import React from "react";
import style from "./item.module.scss";
import { getImage } from "helpers/image";
import { useNavigate } from "react-router-dom";
export const SearchItem = ({ user }) => {
  let navigate = useNavigate();
  return (
    <div
      className={style.item}
      onClick={() => {
        navigate(`/profile/${user?.username}/posts`);
      }}
    >
      <img src={getImage(user?.profileImg)} alt="profile" />
      <div>
        <p>{user?.username}</p>
        <span>{user?.name}</span>
      </div>
    </div>
  );
};
