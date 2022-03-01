import { getUserPosts } from "requests/PostRequest";
import React, { useEffect, useState } from "react";
import style from "./contents.module.scss";
import { TaggedIcon, SaveIcon, PostsIcon } from "assets/icons";
import GridPosts from "components/gridPosts";
import { ImageThumbnail } from "components/post/thumbnail";

import StartSharing from "../startSharing";
import { Link, useParams } from "react-router-dom";
import NoPost from "components/nopost";
import { useSelector } from "react-redux";

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
  const [scrollEnd, setScrollEnd] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (user?._id) {
      getUserPosts(token, user?._id, `?page=${page}&limit=4`)
        .then((res) => {
          setPosts([...posts, ...res.data.data]);
        })
        .catch((err) => console.log(err.response));
    }
  }, [user, page]);

  useEffect(() => {
    function onScroll() {
      if (
        this.document.documentElement.scrollHeight ===
        window.pageYOffset + this.window.innerHeight
      ) {
        setScrollEnd(true);
        setPage(page + 1);
      } else {
        setScrollEnd(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [page]);

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
              <ImageThumbnail
                photo={post.photos[0]}
                single={post.photos.length > 1}
                key={index}
              />
            );
          })}
        </GridPosts>
      )}
      {
        content === "saved" && username === pathUsername && (
          <div>hello world</div>
        )

        /* <GridPosts>
          {posts?.map((post, index) => (
            <ImageThumbnail
              likes={post.likes.length}
              photo={post?.photos[0]}
              key={index}
            />
          ))}
        </GridPosts> */
      }
      {content === "tagged" && <NoPost />}
    </div>
  );
}
