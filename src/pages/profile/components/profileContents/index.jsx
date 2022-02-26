import React from "react";
import style from "./contents.module.scss";
import { TaggedIcon, SaveIcon, PostsIcon } from "assets/icons";
import GridPosts from "components/gridPosts";
import ThumbnailContainer from "components/post/thumbnail";
import { ImageThumbnail } from "components/post/thumbnail";

import StartSharing from "../startSharing";
import { Link, useParams } from "react-router-dom";
import NoPost from "components/nopost";
import { useSelector } from "react-redux";

const navbarItems = [
  {
    title: "Posts",
    path: "posts",
    icon: PostsIcon,
  },
  {
    title: "Saved",
    icon: SaveIcon,
    path: "saved",
  },
  {
    title: "Tagged",
    icon: TaggedIcon,
    path: "tagged",
  },
];

export default function ProfileContents() {
  let path = useParams()?.content;
  let username = useSelector((state) => state.user.username);
  return (
    <div className={style.contents}>
      <div className={style.contents_navbar}>
        {navbarItems.map((item, key) => (
          <Link
            key={key}
            className={style.contents_navbar_item}
            to={`/profile/${username}/${item.path}`}
          >
            {<item.icon />}
            {<p>{item.title}</p>}
          </Link>
        ))}
      </div>

      {path === "posts" && <StartSharing />}
      {path === "saved" && (
        <GridPosts>
          <ThumbnailContainer>
            <ImageThumbnail />
          </ThumbnailContainer>
          <ThumbnailContainer>
            <ImageThumbnail />
          </ThumbnailContainer>
          <ThumbnailContainer>
            <ImageThumbnail />
          </ThumbnailContainer>
        </GridPosts>
      )}
      {path === "tagged" && <NoPost />}
    </div>
  );
}
