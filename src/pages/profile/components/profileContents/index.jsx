import getUserPosts from "requests/PostRequest";
import React, { useEffect, useState } from "react";
import style from "./contents.module.scss";
import { TaggedIcon, SaveIcon, PostsIcon } from "assets/icons";
import GridPosts from "components/gridPosts";
import ThumbnailContainer from "components/post/thumbnail";
import { ImageThumbnail } from "components/post/thumbnail";

import StartSharing from "../startSharing";
import { Link, useParams } from "react-router-dom";
import NoPost from "components/nopost";
import { useSelector } from "react-redux";
import { VideoThumbnail } from "components/post/thumbnail";

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
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    console.log(user?._id);
    getUserPosts(token, user?._id)
      .then((res) => {
        setPosts(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.log(err.response));
  }, [user]);
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
          {posts?.map((post, index) => (
            <ImageThumbnail photos={post.photos[0]} key={index} />
          ))}
          <VideoThumbnail />
        </GridPosts>
      )}
      {content === "saved" && username === pathUsername && (
        <GridPosts>
          {posts?.map((post, index) => (
            <ImageThumbnail
              likes={post.likes.length}
              photos={post.photos[0]}
              key={index}
            />
          ))}
        </GridPosts>
      )}
      {content === "tagged" && <NoPost />}
    </div>
  );
}
