import React, { useState } from "react";

import style from "./post.module.scss";

import {
  HeartIcon,
  CommentIcon,
  ShareIcon,
  SaveIcon,
  SaveIconActive,
} from "assets/icons";

import PopupContainer from "components/popup";
import PostContainer from "components/postcontainer";
import PostHead from "./head";
import { useNavigate } from "react-router-dom";
import { getPostLikes } from "requests/PostRequest";
import { useSelector } from "react-redux";
import UserList from "components/popup/userList";
import { likePost } from "requests/PostRequest";
import { HeartIconActive } from "assets/icons";
import CommentForm from "./../commentform/CommentForm";
import PostBody from "./body";
import { savePost } from "requests/UserRequest";

export default function Post({ children, post: _post }) {
  const [fullDescription, setFullDescription] = useState(false);
  const [likes, setLikes] = useState([]);
  const [post, setPost] = useState(_post);
  let navigate = useNavigate();

  let token = useSelector((state) => state.auth.token);
  const handleClick = () => {
    navigate(`/profile/${post?.userId?.username}/posts`);
  };
  const handlePostLikes = () => {
    setLikes([]);
    setLoading({ ...loading, likesLoading: true });
    getPostLikes(token, post?._id).then((res) => {
      setLoading({ ...loading, likesLoading: false });
      setLikes(
        res.data.data.map((_like) => {
          return { ..._like.user, isFollowing: _like?.isFollowing };
        })
      );
    });
  };
  const [loading, setLoading] = useState({
    likePostLoading: false,
    likesLoading: false,
  });
  const handleLikePost = () => {
    setLoading({ ...loading, likePostLoading: true });
    if (!loading.likePostLoading) {
      likePost(token, post?._id)
        .then((res) => {
          if (res.data.message === "like") {
            setPost({ ...post, likeCount: post?.likeCount + 1, liked: true });
          } else {
            setPost({ ...post, likeCount: post?.likeCount - 1, liked: false });
          }
          setLoading({ ...loading, likePostLoading: false });
        })
        .catch((e) => {
          console.log(e.response);
          setLoading({ ...loading, likePostLoading: false });
        });
    }
  };

  const handleSavePost = () => {
    savePost(token, post?._id)
      .then((res) => {
        if (res.data.message === "save") {
          setPost({ ...post, isSaved: true });
        } else {
          setPost({ ...post, isSaved: false });
        }
      })
      .catch((e) => console.log(e.repsonse));
  };
  return (
    <div className={style.post}>
      <PostHead user={post?.userId} />
      <PostBody photos={post?.photos} />
      <div className={style.post_actions}>
        {post?.liked ? (
          <HeartIconActive onClick={handleLikePost} />
        ) : (
          <HeartIcon onClick={handleLikePost} />
        )}

        <PopupContainer Toggle={<CommentIcon />}>
          <PostContainer postId={post?._id} setPost={setPost} />
        </PopupContainer>
        <ShareIcon />
        {post?.isSaved ? (
          <SaveIconActive onClick={handleSavePost} />
        ) : (
          <SaveIcon onClick={handleSavePost} />
        )}
      </div>
      <div className={style.post_info}>
        <PopupContainer
          Toggle={<p onClick={handlePostLikes}>{post?.likeCount} like</p>}
        >
          <UserList
            title="likes"
            list={likes}
            setList={setLikes}
            listLoading={loading.likesLoading}
          />
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
                View all {post?.commentCount >= 1 && post?.commentCount}{" "}
                comments
              </p>
            </a>
          }
        >
          <PostContainer postId={post?._id} setPost={setPost} />
        </PopupContainer>

        <a>
          <small className={style.post_time}>{post?.createdAt}</small>
        </a>
      </div>
      <CommentForm postId={post?._id} />
    </div>
  );
}
