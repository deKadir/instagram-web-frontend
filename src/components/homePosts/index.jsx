import Post from "components/post";
import React, { useEffect, useState } from "react";
import { postFeed } from "requests/PostRequest";
import { useSelector } from "react-redux";
import { getImage } from "helpers/image";
import { usePaginate } from "hooks/paginate";
import style from "./posts.module.scss";
import Loading from "components/loading/Loading";
export default function HomePosts() {
  let token = useSelector((state) => state.auth.token);
  let { page } = usePaginate();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    postFeed(token, `?page=${page}&limit=5`)
      .then((res) => {
        setPosts([...posts, ...res.data.data]);
      })
      .catch((e) => console.log(e.response));
  }, [page]);
  return (
    <div className={style.postsWrapper}>
      {!posts.length && <Loading />}
      {posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </div>
  );
}
