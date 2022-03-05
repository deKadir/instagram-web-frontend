import Post from "components/post";
import React, { useEffect, useState } from "react";
import { postFeed } from "requests/PostRequest";
import { useSelector } from "react-redux";
import { getImage } from "helpers/image";
import { usePaginate } from "hooks/paginate";

export default function HomePosts() {
  let token = useSelector((state) => state.auth.token);
  let { page } = usePaginate();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    console.log(page);
    postFeed(token, `?page=${page}&limit=5`)
      .then((res) => {
        console.log(res.data.data);
        setPosts([...posts, ...res.data.data]);
      })
      .catch((e) => console.log(e.response));
  }, [page]);
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
