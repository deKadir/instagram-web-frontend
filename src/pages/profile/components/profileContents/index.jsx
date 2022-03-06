import { getUserPosts } from "requests/PostRequest";
import React, { useEffect, useState } from "react";
import style from "./contents.module.scss";
import { TaggedIcon, SaveIcon, PostsIcon } from "assets/icons";
import GridPosts from "components/gridPosts";
import { ImageThumbnail } from "components/post/thumbnail";

import { Link, useParams } from "react-router-dom";
import NoPost from "components/nopost";
import { useSelector } from "react-redux";
import PopupContainer from "components/popup";
import PostContainer from "components/postcontainer";
import { usePaginate } from "hooks/paginate";
import { getSavedPosts } from "./../../../../requests/UserRequest";

const navbarItems = [
  {
    title: "Posts",
    path: "posts",
    icon: PostsIcon,
    protected: false,
  },
  {
    title: "Saved",
    icon: SaveIcon,
    path: "saved",
    protected: true,
  },
  {
    title: "Tagged",
    icon: TaggedIcon,
    path: "tagged",
  },
];
export default function ProfileContents({ user }) {
  let { content, username: pathUsername } = useParams();
  let { username } = useSelector((state) => state.user);
  let token = useSelector((state) => state.auth.token);
  let { page } = usePaginate();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (user?._id && content === "posts") {
      getUserPosts(token, user?._id, `?page=${page}&limit=4`)
        .then((res) => {
          setPosts([...posts, ...res.data.data]);
        })
        .catch((err) => console.log(err.response));
    }
  }, [page]);
  useEffect(() => {
    setPosts([]);
    if (user?._id && content === "posts") {
      getUserPosts(token, user?._id, `?page=${page}&limit=4`)
        .then((res) => {
          setPosts([...posts, ...res.data.data]);
        })
        .catch((err) => console.log(err.response));
    }
  }, [user, content]);
  const [savedPosts, setSavedPosts] = useState([]);
  useEffect(() => {
    if (content === "saved") {
      getSavedPosts(token).then((res) => setSavedPosts(res.data.posts));
    }
  }, [content]);
  return (
    <div className={style.contents}>
      <div className={style.contents_navbar}>
        {navbarItems.map(
          (item, key) =>
            (!item.protected || pathUsername === username) && (
              <Link
                key={key}
                className={style.contents_navbar_item}
                to={`/profile/${pathUsername}/${item.path}`}
              >
                {<item.icon />}
                {<p>{item.title}</p>}
              </Link>
            )
        )}
      </div>

      {content === "posts" && (
        <GridPosts>
          {posts?.map((post, index) => {
            return (
              <PopupContainer
                Toggle={<ImageThumbnail post={post} key={index} />}
              >
                <PostContainer postId={post?._id} />
              </PopupContainer>
            );
          })}
        </GridPosts>
      )}
      {
        content === "saved" && username === pathUsername && (
          <GridPosts>
            {savedPosts?.map((post, index) => (
              <PopupContainer
                Toggle={<ImageThumbnail post={post} key={index} />}
              >
                <PostContainer postId={post?._id} />
              </PopupContainer>
            ))}
          </GridPosts>
        )

        /*  */
      }
      {content === "tagged" && <NoPost />}
    </div>
  );
}
