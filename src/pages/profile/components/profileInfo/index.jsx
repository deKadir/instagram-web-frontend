import React, { useEffect, useState } from "react";
import style from "./profileInfo.module.scss";
import { EditProfile } from "../actions";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { getUserInfo } from "requests/UserRequest";
import { UserAction } from "./../actions/index";
import { getImage } from "helpers/image";
import PopupContainer from "components/popup";
import UserList from "components/popup/userList";
import { getFollowers } from "requests/UserRequest";
import { getFollowings } from "requests/UserRequest";

export default function ProfileInfo({ user, setUser }) {
  let userInfo = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  const [following, setFollowing] = useState();
  let token = useSelector((state) => state.auth.token);
  let username = useParams().username;

  useEffect(() => {
    setLoading(true);
    if (username === userInfo?.username) {
      setUser({
        ...userInfo,
        following: userInfo.following.length,
        followers: userInfo.followers.length,
      });
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [userInfo, username]);

  useEffect(() => {
    setLoading(true);
    if (userInfo?.username !== username) {
      getUserInfo(username)
        .then((res) => {
          setUser(res.data.data);
          setLoading(false);
        })
        .catch((er) => console.log(er.response.data));
    } else {
      setLoading(false);
    }
  }, [username, following]);
  useEffect(() => {
    if (userInfo?.username !== username) {
      setFollowing(userInfo.following.find((u) => u._id === user?._id));
    }
  }, [user]);
  return (
    <div className={style.profile}>
      <img src={getImage(userInfo?.profileImg)} alt="profile" />

      <div className={style.profile_info}>
        {!user || loading ? (
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
                  userId={user?._id}
                  userInfo={userInfo}
                  following={following}
                  setFollowing={setFollowing}
                />
              )}
            </div>
            <div className={style.profile_user}>
              <p>
                {user.posts} <span>posts</span>
              </p>
              <PopupContainer
                Toggle={
                  <p>
                    {user.followers}
                    <span>followers</span>
                  </p>
                }
                access={
                  !user?.privateStatus ||
                  !!userInfo.following.find(
                    (u) => u.username === user?.username
                  )
                }
              >
                <UserList
                  title="followers"
                  method={getFollowers}
                  token={token}
                  userId={user?._id}
                />
              </PopupContainer>
              <PopupContainer
                access={
                  !user?.privateStatus ||
                  !!userInfo.following.find(
                    (u) => u.username === user?.username
                  )
                }
                Toggle={
                  <p>
                    {user.following}
                    <span>following</span>
                  </p>
                }
              >
                <UserList
                  title="Following"
                  method={getFollowings}
                  token={token}
                  userId={user?._id}
                />
              </PopupContainer>
            </div>
            <p>{user.name}</p>
            <span style={{ display: "block", marginTop: "1rem" }}>
              {user.bio}
            </span>
          </>
        )}
      </div>
    </div>
  );
}
