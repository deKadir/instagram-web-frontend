import React, { useState } from "react";

import style from "./post.module.scss";

import {
  HeartIcon,
  CommentIcon,
  ShareIcon,
  SaveIcon,
  EmojiIcon,
} from "assets/icons";
import { Input } from "components/inputs";
import { Button } from "components/buttons";
import PopupContainer from "components/popup";
import PostContainer from "components/postcontainer";
import PostHead from "./head";

export default function Post({ children }) {
  return (
    <div className={style.post}>
      <PostHead />
      <div className={style.post_content}>{children}</div>
      <div className={style.post_actions}>
        <HeartIcon />
        <PopupContainer Toggle={<CommentIcon />}>
          <PostContainer />
        </PopupContainer>
        <ShareIcon />
        <SaveIcon />
      </div>
      <div className={style.post_info}>
        <p>1.069 likes</p>
        <p>
          kadir{" "}
          <span>
            Imperdiet in sit rhoncus, eleifend tellus augue lectus potenti
            pellentesque...
          </span>
          <small>More</small>
        </p>
        <PopupContainer
          Toggle={
            <a>
              <p className={style.post_info_p}>View all 100 comments</p>
            </a>
          }
        >
          <PostContainer />
        </PopupContainer>

        <a>
          <small className={style.post_time}>1 hour ago</small>
        </a>
      </div>
      <div className={style.comment_form}>
        <EmojiIcon />

        <Input placeholder="Add a comment..." />
        <Button disabled={true}>Post</Button>
      </div>
    </div>
  );
}
