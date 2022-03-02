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
import { getPostLikes } from "requests/PostRequest";
import { useSelector } from "react-redux";
import UserList from "components/popup/userList";

export default function Post({ children, post }) {
  const [fullDescription, setFullDescription] = useState(false);
  const [likes, setLikes] = useState([]);
  let navigate = useNavigate();
  let token = useSelector((state) => state.auth.token);
  const handleClick = () => {
    navigate(`/profile/${post?.userId?.username}/posts`);
  };
  const handlePostLikes = (userId) => {
    setLikes([]);
    getPostLikes(token, post?._id).then((res) => {
      setLikes(
        res.data.data.map((_like) => {
          return { ..._like.user, isFollowing: _like?.isFollowing };
        })
      );
    });
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
        <PopupContainer
          Toggle={<p onClick={handlePostLikes}>{post?.likeCount} like</p>}
        >
          <UserList title="likes" list={likes} setList={setLikes} />
        </PopupContainer>

        <div>
          <p onClick={handleClick}>{post?.userId?.username}</p>
          <p>
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
              <p className={style.post_info_p}>
                View all {post?.commentCount} comments
              </p>
            </a>
          }
        >
          <PostContainer postId={post?._id} />
        </PopupContainer>

        <a>
          <small className={style.post_time}>{post?.createdAt}</small>
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
