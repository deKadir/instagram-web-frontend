import Post from "components/post";
import React, { useEffect, useState } from "react";
import profile from "assets/images/post_img.jpg";
import { postFeed } from "requests/PostRequest";
import { useSelector } from "react-redux";
import { getImage } from "helpers/image";

export default function HomePosts() {
  let token = useSelector((state) => state.auth.token);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    postFeed(token, "?page=1&limit=10").then((res) => setPosts(res.data.data));
  }, []);
  return (
    <div>
      {posts.map((post, index) => (
        <Post post={post} key={index}>
          <img src={getImage(post.photos[0])} />
        </Post>
      ))}
    </div>
  );
}
