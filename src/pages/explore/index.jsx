import React, { useEffect, useState } from "react";
import Navbar from "components/navbar";
import GridPosts from "components/gridPosts";
import { ImageThumbnail } from "components/post/thumbnail";
import style from "./explore.module.scss";
import PopupContainer from "components/popup";
import { usePaginate } from "hooks/paginate";
import { explorePosts } from "requests/PostRequest";
import { useSelector } from "react-redux";
import PostContainer from "components/postcontainer";
import Loading from "components/loading/Loading";
export default function Explore() {
  let token = useSelector((state) => state.auth.token);
  const [posts, setPosts] = useState([]);
  const { page } = usePaginate();
  useEffect(() => {
    explorePosts(token, `?page=${page}&limit=5`).then((res) => {
      setPosts([...posts, ...res.data.posts]);
    });
  }, [page]);
  document.title = "Explore";
  return (
    <div className={style.explore}>
      <Navbar />
      <div className={style.explore_body}>
        {!posts.length && <Loading />}
        <GridPosts>
          {posts.map((post, index) => {
            return (
              <PopupContainer
                Toggle={<ImageThumbnail post={post} key={index} />}
              >
                <PostContainer postId={post?._id} />
              </PopupContainer>
            );
          })}
        </GridPosts>
      </div>
    </div>
  );
}
