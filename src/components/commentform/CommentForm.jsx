import React, { useState } from "react";
import { EmojiIcon } from "assets/icons";
import { Input } from "components/inputs";
import { Button } from "components/buttons";
import style from "./form.module.scss";
import { addComment } from "requests/CommentRequest";
import { useSelector } from "react-redux";

export default function CommentForm({
  comments = [],
  setComments = () => {},
  postId = "",
}) {
  const commentInitial = {
    comment: "",
    postId: postId,
    loading: false,
  };
  const [comment, setComment] = useState(commentInitial);
  let token = useSelector((state) => state.auth.token);
  const activeUser = useSelector((state) => state.user);
  const handleCommentSubmit = () => {
    setComment({ ...comment, loading: true });
    addComment(token, comment)
      .then((res) => {
        setComment({ ...comment, comment: "", loading: false });
        setComments([
          {
            ...res.data.comment,
            owner: {
              _id: activeUser?._id,
              username: activeUser?.username,
              profileImg: activeUser?.profileImg,
            },
          },
          ...comments,
        ]);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };
  return (
    <div className={style.comment_form}>
      <EmojiIcon />
      <Input
        placeholder="Add a comment..."
        value={comment.comment}
        onChange={(e) => setComment({ ...comment, comment: e.target.value })}
      />
      <Button
        disabled={!comment.comment || comment.loading}
        onClick={handleCommentSubmit}
      >
        Post
      </Button>
    </div>
  );
}
