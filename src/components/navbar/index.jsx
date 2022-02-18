import React from "react";
import style from "./navbar.module.scss";
import { Link } from "react-router-dom";
import profile from "assets/images/profile_img.jpg";
import {
  ExploreIcon,
  MessengerIcon,
  HeartIcon,
  HomeIcon,
  InstagramTextLogo,
} from "assets/icons";
import { SearchInput } from "./../inputs/index";

export default function Navbar() {
  return (
    <div className={style.navbar}>
      <div className={style.navbar_container}>
        <Link to={"/"}>
          <InstagramTextLogo />
        </Link>
        <SearchInput placeholder="Search" />
        <div className={style.navbar_container_icons}>
          <Link to={"/"}>
            <HomeIcon />
          </Link>
          <Link to={"/messages"}>
            <MessengerIcon />
          </Link>
          <Link to={"/explore"}>
            <ExploreIcon />
          </Link>
          <Link to={""}>
            <HeartIcon />
          </Link>
          <Link to={"/profile/posts"}>
            <img src={profile} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}
