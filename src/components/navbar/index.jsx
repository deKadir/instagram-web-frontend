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
import Menu from "components/menu";
import SettingsMenuItem from "components/menu/settings";
import { TaggedIcon } from "assets/icons";
import { SettingsIcon } from "assets/icons";
import Style from "constants/style";
import { SaveIcon } from "assets/icons";
import { NewPostIcon } from "assets/icons";
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
          <Link to={""}>
            <NewPostIcon />
          </Link>
          <Link to={"/explore"}>
            <ExploreIcon />
          </Link>
          <Link to={""}>
            <HeartIcon />
          </Link>

          <Menu Toggle={<img src={profile} alt="" />}>
            <SettingsMenuItem to={"/profile/posts"}>
              <TaggedIcon />
              Profile
            </SettingsMenuItem>
            <SettingsMenuItem to={"/settings/edit"}>
              <SettingsIcon />
              Settings
            </SettingsMenuItem>
            <SettingsMenuItem to={"/profile/saved"}>
              <SaveIcon />
              Saved
            </SettingsMenuItem>
            <SettingsMenuItem
              to={""}
              style={{ borderTop: `1px solid ${Style.borderColor}` }}
            >
              logout
            </SettingsMenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}
