import PostHead from "components/post/head";
import style from "./showpost.module.scss";
import profile from "assets/images/post_img.jpg";
import { Button } from "components/buttons";
import { Input } from "components/inputs";
import { EmojiIcon, ShareIcon, HeartIcon, SaveIcon } from "assets/icons";
import postStyle from "components/post/post.module.scss";
import Comment from "components/comment/index";
import { CommentIcon } from "assets/icons";
import { useEffect, useState } from "react";
import { getPost } from "requests/PostRequest";
import { useSelector } from "react-redux";
import { getImage } from "helpers/image";
export default function PostContainer({ postId }) {
  let token = useSelector((state) => state.auth.token);
  const [post, setPost] = useState();
  useEffect(() => {
    getPost(token, postId).then((res) => setPost(res.data.data));
  }, []);

  return (
    <div className={style.post}>
      <div className={style.post_container}>
        <img src={getImage(post?.photos[0])} />
      </div>
      <div className={style.post_detail}>
        <PostHead user={post?.userId} />
        <p style={{ padding: "0.5rem 1rem" }}>{post?.description}</p>
        <div className={style.post_detail_body}>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
        <div className={style.post_actions} style={{ marginLeft: "-0.5rem" }}>
          <HeartIcon />
          <CommentIcon />
          <ShareIcon />
          <SaveIcon />
        </div>
        <div className={postStyle.post_info}>
          <p>1.069 likes</p>

          <a>
            <small className={postStyle.post_time}>1 hour ago</small>
          </a>
        </div>
        <div className={style.comment_form}>
          <EmojiIcon />
          <Input placeholder="Add a comment..." />
          <Button disabled={true}>Post</Button>
        </div>
      </div>
    </div>
  );
}
