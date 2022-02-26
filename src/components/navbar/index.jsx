import React from "react";
import style from "./navbar.module.scss";
import { Link } from "react-router-dom";
import profile from "assets/images/profile_img.jpg";
import Styles from "constants/style";
import {
  ExploreIcon,
  MessengerIcon,
  HeartIcon,
  HomeIcon,
  InstagramTextLogo,
  TaggedIcon,
  SaveIcon,
  SettingsIcon,
} from "assets/icons";
import { SearchInput } from "./../inputs/index";
import Menu from "components/menu";
import { NewPostIcon } from "assets/icons";
import SettingsMenu, { SettingsMenuItem } from "components/menu/settings";
import NotificationMenu from "components/menu/notifications";
import { NotificationItem } from "components/menu/notifications";
import { FollowRequest } from "components/menu/notifications";
import AddPost from "components/popup/addpost";
import PopupContainer from "components/popup";
import { useSelector } from "react-redux";

export default function Navbar() {
  let username = useSelector((state) => state.user.username);
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

          <PopupContainer
            Toggle={
              <Link to={""}>
                <NewPostIcon />
              </Link>
            }
          >
            <AddPost />
          </PopupContainer>

          <Link to={"/explore"}>
            <ExploreIcon />
          </Link>

          <Menu
            Toggle={
              <Link to={""}>
                <HeartIcon />
              </Link>
            }
          >
            <NotificationMenu>
              <NotificationItem />
              <NotificationItem />
              <NotificationItem />
              <NotificationItem />
              <FollowRequest />
            </NotificationMenu>
          </Menu>
          <Menu
            Toggle={<img src={profile} alt="" className={style.profile_img} />}
          >
            <SettingsMenu>
              <SettingsMenuItem to={`/profile/${username}/posts`}>
                <TaggedIcon />
                Profile
              </SettingsMenuItem>
              <SettingsMenuItem to={"/settings/edit"}>
                <SettingsIcon />
                Settings
              </SettingsMenuItem>
              <SettingsMenuItem to={`/profile/${username}/saved`}>
                <SaveIcon />
                Saved
              </SettingsMenuItem>
              <SettingsMenuItem
                to={""}
                style={{ borderTop: `1px solid ${Styles.borderColor}` }}
              >
                logout
              </SettingsMenuItem>
            </SettingsMenu>
          </Menu>
        </div>
      </div>
    </div>
  );
}
