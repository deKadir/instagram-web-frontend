import React from "react";
import Navbar from "components/navbar";
import GridPosts from "components/gridPosts";
import ThumbnailContainer from "components/post/thumbnail";
import { ImageThumbnail } from "components/post/thumbnail";
import style from "./explore.module.scss";
import { VideoThumbnail } from "components/post/thumbnail";
export default function Explore() {
  return (
    <div className={style.explore}>
      <Navbar />
      <div className={style.explore_body}>
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
          <ThumbnailContainer>
            <VideoThumbnail />
          </ThumbnailContainer>
        </GridPosts>
      </div>
    </div>
  );
}
