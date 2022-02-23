import PostHead from "components/post/head";
import style from "./showpost.module.scss";
import profile from "assets/images/post_img.jpg";
import { Button } from "components/buttons";
import { Input } from "components/inputs";
import { EmojiIcon, ShareIcon, HeartIcon, SaveIcon } from "assets/icons";
import postStyle from "components/post/post.module.scss";
import Comment from "components/comment/index";
import { CommentIcon } from "assets/icons";
export default function PostContainer() {
  return (
    <div className={style.post}>
      <div className={style.post_container}>
        <img src={profile} />
      </div>
      <div className={style.post_detail}>
        <PostHead />
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
        <div
          className={postStyle.post_actions}
          style={{ marginLeft: "-0.5rem" }}
        >
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
        <div className={postStyle.comment_form}>
          <EmojiIcon />
          <Input placeholder="Add a comment..." />
          <Button disabled={true}>Post</Button>
        </div>
      </div>
    </div>
  );
}
