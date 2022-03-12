import PostHead from "components/post/head";
import style from "./showpost.module.scss";

import { ShareIcon, HeartIcon } from "assets/icons";
import postStyle from "components/post/post.module.scss";
import Comment from "components/comment/index";
import { CommentIcon } from "assets/icons";
import { useEffect, useState } from "react";
import { getPost } from "requests/PostRequest";
import { useSelector } from "react-redux";
import { getPostComments } from "requests/CommentRequest";
import { getPostLikes, likePost } from "requests/PostRequest";
import { HeartIconActive } from "assets/icons";
import CommentForm from "components/commentform/CommentForm";
import PostBody from "components/post/body";
import Skeleton from "react-loading-skeleton";
import Loading from "components/loading/Loading";

export default function PostContainer({ postId, setPost: _setPost }) {
  let token = useSelector((state) => state.auth.token);

  const [post, setPost] = useState();
  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(false);
  useEffect(() => {
    getPost(token, postId).then((res) => setPost(res.data.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (post?._id) {
      setCommentsLoading(true);
      getPostComments(token, post?._id)
        .then((res) => {
          setComments(res.data.comments);
          setCommentsLoading(false);
        })
        .catch((e) => {
          console.log(e.message);
          setCommentsLoading(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post]);
  const handleLikesPopup = () => {
    getPostLikes(token, postId)
      .then((res) => {})
      .catch((e) => console.log(e.response));
  };
  const [loading, setLoading] = useState(false);
  const handleLikePost = () => {
    setLoading(true);
    if (!loading) {
      likePost(token, post?._id)
        .then((res) => {
          if (res.data.message === "like") {
            setPost({ ...post, likeCount: post?.likeCount + 1, liked: true });
            //updates post in feed too
            _setPost({ ...post, likeCount: post?.likeCount + 1, liked: true });
          } else {
            setPost({ ...post, likeCount: post?.likeCount - 1, liked: false });
            //updates post in feed too
            _setPost({ ...post, likeCount: post?.likeCount - 1, liked: false });
          }
          setLoading(false);
        })
        .catch((e) => console.log(e.response));
    }
  };
  if (post) {
    return (
      <div className={style.post}>
        <div className={style.post_container}>
          <PostBody photos={post?.photos} />
        </div>
        <div className={style.post_detail}>
          <PostHead user={post?.userId} />
          <p style={{ padding: "0.5rem 1rem" }}>{post?.description}</p>
          <div className={style.post_detail_body}>
            {commentsLoading && <Loading width={16} />}
            {comments?.map((comment, index) => {
              return <Comment comment={comment} key={index} />;
            })}
          </div>
          <div className={style.post_actions} style={{ marginLeft: "-0.5rem" }}>
            {post?.liked ? (
              <HeartIconActive onClick={handleLikePost} />
            ) : (
              <HeartIcon onClick={handleLikePost} />
            )}

            <CommentIcon />
            <ShareIcon />
            {/* {post?.isSaved ? <SaveIconActive /> : <SaveIcon />} */}
          </div>
          <div className={postStyle.post_info} onClick={handleLikesPopup}>
            <p>{post?.likeCount} likes</p>

            <small className={postStyle.post_time}>{post?.createdAt}</small>
          </div>
          <CommentForm
            setComments={setComments}
            comments={comments}
            postId={postId}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className={style.post}>
        <div className={style.post_container}>
          <PostBody />
        </div>
        <div className={style.post_detail}>
          <PostHead />
          <Skeleton
            width={"200px"}
            style={{ margin: "0.5rem 1rem" }}
            height="1rem"
          />
          <p>{post?.description}</p>
          <div className={style.post_detail_body}>
            {comments?.map((comment, index) => {
              return <Comment comment={comment} key={index} />;
            })}
          </div>
          <div className={style.post_actions} style={{ marginLeft: "-0.5rem" }}>
            {post?.liked ? (
              <HeartIconActive onClick={handleLikePost} />
            ) : (
              <HeartIcon onClick={handleLikePost} />
            )}

            <CommentIcon />
            <ShareIcon />
            {/* {post?.isSaved ? <SaveIconActive /> : <SaveIcon />} */}
          </div>
          <div className={postStyle.post_info} onClick={handleLikesPopup}>
            <p>{post?.likeCount} likes</p>

            <small className={postStyle.post_time}>{post?.createdAt}</small>
          </div>
          <CommentForm
            setComments={setComments}
            comments={comments}
            postId={postId}
          />
        </div>
      </div>
    );
  }
}
