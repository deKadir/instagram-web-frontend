import React, { forwardRef, useEffect, useState } from "react";
import profile from "assets/images/profile_img.jpg";
import style from "./profileInfo.module.scss";
import { EditProfile } from "../actions";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { getUserInfo } from "requests/UserRequest";
import { UserAction } from "./../actions/index";
export default function ProfileInfo() {
  let userInfo = useSelector((state) => state.user);
  const [user, setUser] = useState();
  let username = useParams().username;
  let [following, setFollowing] = useState(false);

  useEffect(() => {
    if (username !== userInfo.username) {
      setFollowing(userInfo?.following?.find((u) => u.username === username));
    }
  }, [userInfo]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getUserInfo(username)
      .then((res) =>
        setTimeout(() => {
          setLoading(false);
          setUser(res.data.data);
        }, 300)
      )
      .catch((er) => console.log(er.response.data));
  }, [username, following]);

  return (
    <div className={style.profile}>
      <img src={profile} alt="profile" />

      <div className={style.profile_info}>
        {!user ? (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        ) : (
          <>
            <div className={style.profile_account}>
              <h4>{user.username}</h4>
              {username === userInfo.username ? (
                <EditProfile />
              ) : (
                <UserAction
                  following={following}
                  setFollowing={setFollowing}
                  userId={user._id}
                  loading={loading}
                  setLoading={setLoading}
                />
              )}
            </div>
            <div className={style.profile_user}>
              <p>
                {user.posts} <span>posts</span>
              </p>
              <p>
                {user.followers}
                <span>followers</span>
              </p>
              <p>
                {user.following}
                <span>following</span>
              </p>
            </div>
            <p>{user.name}</p>
          </>
        )}
      </div>
    </div>
  );
}
