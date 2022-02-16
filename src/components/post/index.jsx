import React from "react";
import profile from "assets/images/post_img.jpg";
import style from "./post.module.scss";
import {
  HeartIcon,
  CommentIcon,
  ShareIcon,
  SaveIcon,
  EmojiIcon,
  MoreIcon,
} from "assets/icons";
import { Input } from "components/inputs";
import { Button } from "components/buttons";
export default function Post() {
  return (
    <div className={style.post}>
      <div className={style.post_owner}>
        <div>
          <img src={profile} alt="" />
          <a>
            <p>Kadir</p>
          </a>
        </div>
        <MoreIcon />
      </div>
      <div className={style.post_img}>
        <img src={profile} alt="" />
      </div>
      <div className={style.post_actions}>
        <HeartIcon />
        <CommentIcon />
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
        <a>
          <p>View all 100 comments</p>
        </a>
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
