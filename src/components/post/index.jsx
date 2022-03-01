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
import { useNavigate } from "react-router-dom";

export default function Post({ children, post }) {
  const [fullDescription, setFullDescription] = useState(false);
  let navigate = useNavigate();
  const handleClick = () => {
    navigate(`/profile/${post?.userId?.username}/posts`);
  };

  return (
    <div className={style.post}>
      <PostHead user={post?.userId} />
      <div className={style.post_content}>{children}</div>
      <div className={style.post_actions}>
        <HeartIcon />
        <PopupContainer Toggle={<CommentIcon />}>
          <PostContainer postId={post?._id} />
        </PopupContainer>
        <ShareIcon />
        <SaveIcon />
      </div>
      <div className={style.post_info}>
        <p>{post?.likes?.length} like</p>
        <div>
          <p>
            {post?.userId?.username}

            {post?.description?.length > 60 && !fullDescription && (
              <small onClick={() => setFullDescription(true)}>More</small>
            )}
          </p>
          <span>
            {fullDescription
              ? post?.description
              : post?.description?.substring(0, 60)}
          </span>
        </div>

        <PopupContainer
          Toggle={
            <a>
              <p className={style.post_info_p}>View all 100 comments</p>
            </a>
          }
        >
          <PostContainer postId={post?._id} />
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
