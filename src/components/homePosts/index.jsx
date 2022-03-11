import Post from "components/post";
import React, { useEffect, useState } from "react";
import { postFeed } from "requests/PostRequest";
import { useSelector } from "react-redux";
import { usePaginate } from "hooks/paginate";
import style from "./posts.module.scss";
import Loading from "components/loading/Loading";
export default function HomePosts() {
  let token = useSelector((state) => state.auth.token);
  let { page } = usePaginate();
  const [posts, setPosts] = useState([]);
  const [postsLoading, setPostsLoading] = useState(false);
  useEffect(() => {
    setPostsLoading(true);
    postFeed(token, `?page=${page}&limit=5`)
      .then((res) => {
        setPosts([...posts, ...res.data.data]);
        setPostsLoading(false);
      })
      .catch((e) => {
        console.log(e.response);
        setPostsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, token]);
  return (
    <div className={style.postsWrapper}>
      {postsLoading && <Loading />}
      {posts?.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </div>
  );
}
