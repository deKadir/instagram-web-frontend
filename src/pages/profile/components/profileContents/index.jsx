import React from "react";
import style from "./contents.module.scss";
import { TaggedIcon, SaveIcon, PostsIcon } from "assets/icons";
import GridPosts from "components/gridPosts";
import Post from "components/post";
import ThumbnailContainer from "components/post/thumbnail";
import { ImageThumbnail } from "components/post/thumbnail";
import { VideoThumbnail } from "components/post/thumbnail";
import Nopost from "components/nopost";
import StartSharing from "../startSharing";
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
  return (
    <div className={style.contents}>
      <div className={style.contents_navbar}>
        {navbarItems.map((item, key) => (
          <div key={key} className={style.contents_navbar_item}>
            {<item.icon />}
            {<p>{item.title}</p>}
          </div>
        ))}
      </div>
      {/* <GridPosts>
        <ThumbnailContainer>
          <ImageThumbnail />
        </ThumbnailContainer>
        <ThumbnailContainer>
          <ImageThumbnail />
        </ThumbnailContainer>
        <ThumbnailContainer>
          <ImageThumbnail />
        </ThumbnailContainer>
      </GridPosts> */}
      <StartSharing />
    </div>
  );
}
