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

  let token = useSelector((state) => state.auth.token);
  let username = useParams().username;
  useEffect(() => {
    //getUserInfo from local storage
    if (username === userInfo?.username) {
      setLoading(true);
      setUser({
        ...userInfo,
      });
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [username]);

  useEffect(() => {
    //get userInfo from backend
    if (userInfo?.username !== username) {
      setLoading(true);
      getUserInfo(username, token)
        .then((res) => {
          setUser({ ...res.data.data });
          setLoading(false);
        })
        .catch((er) => console.warn(er.response));
    } else {
      setLoading(false);
    }
  }, [username]);
  useEffect(() => {}, [userInfo]);
  const [userList, setUserList] = useState([]);
  const [listPopup, setListPopup] = useState({
    type: "followers",
    active: false,
  });
  useEffect(() => {
    console.log(user);
    setUserList([]);
    if (listPopup.type === "following" && listPopup.active) {
      console.log(user?._id);
      getFollowings(token, user?._id)
        .then((res) => {
          setUserList(
            res.data.data.map((u) => {
              console.log(u);
              return {
                ...u.following,
                isFollowing: u.isFollowing,
              };
            })
          );
        })
        .catch((e) => console.log(e.data));
    }
    if (listPopup.type === "followers" && listPopup.active) {
      getFollowers(token, user?._id)
        .then((res) => {
          setUserList([
            res?.data.data?.map((u) => {
              return {
                user: { ...u.follower, isFollowing: u.follower.isFollowing },
              };
            }),
          ]);
        })
        .catch((e) => console.log(e));
    }
  }, [listPopup, user]);
  return (
    <div className={style.profile}>
      <img src={getImage(user?.profileImg)} alt="profile" />

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
                <UserAction user={user} setUser={setUser} userInfo={userInfo} />
              )}
            </div>
            <div className={style.profile_user}>
              <p>
                {user.posts} <span>posts</span>
              </p>
              <PopupContainer
                Toggle={
                  <p
                    onClick={() =>
                      setListPopup({ type: "followers", active: true })
                    }
                  >
                    {user.followers}
                    <span>followers</span>
                  </p>
                }
                access={true}
              >
                <UserList
                  title="followers"
                  list={userList}
                  setList={setUserList}
                />
              </PopupContainer>
              <PopupContainer
                access={true}
                Toggle={
                  <p
                    onClick={() =>
                      setListPopup({ type: "following", active: true })
                    }
                  >
                    {user.following}
                    <span>following</span>
                  </p>
                }
              >
                <UserList
                  title="Following"
                  setList={setUserList}
                  list={userList}
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
