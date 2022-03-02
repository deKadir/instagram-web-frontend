import style from "./userlist.module.scss";
import { getImage } from "helpers/image";
import { ButtonSecondary } from "components/buttons";
import { ButtonPrimary } from "components/buttons";
import { useState, useEffect } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { follow } from "requests/UserRequest";
import { saveUserInfo } from "redux/actions/userAction";
import { useNavigate } from "react-router-dom";

export default function UserList({
  title = "",
  list = [],
  setList = () => {},
}) {
  const [loading, setLoading] = useState(false);

  let userInfo = useSelector((state) => state.user);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let token = useSelector((state) => state.auth.token);
  const handleFollow = (userId) => {
    setLoading(true);
    follow(userId, token)
      .then((res) => {
        if (res.data.message === "follow") {
          dispatch(
            saveUserInfo({ ...userInfo, following: userInfo?.following + 1 })
          );
          setList(
            list.map((item) => {
              if (item._id === userId) {
                item.isFollowing = true;
              }
              return item;
            })
          );
          setLoading(false);
        } else {
          dispatch(
            saveUserInfo({ ...userInfo, following: userInfo?.following - 1 })
          );
          setList(
            list.map((item) => {
              if (item._id === userId) {
                item.isFollowing = false;
              }
              return item;
            })
          );
          setLoading(false);
        }
      })
      .catch((error) => console.log(error.response));
  };

  return (
    <div className={style.list}>
      <div className={style.list_head}>
        <h4>{title}</h4>
      </div>
      <section className={style.list_items}>
        {list.map((user, key) => {
          return (
            <div className={style.list_item} key={key}>
              <img src={getImage(user?.profileImg)} alt="profile img" />
              <div className={style.list_item_info}>
                <p onClick={() => navigate(`/profile/${user?.username}/posts`)}>
                  {user?.username}
                </p>
                <span
                  onClick={() => navigate(`/profile/${user?.username}/posts`)}
                >
                  {user?.name}
                </span>
              </div>
              {user?.isFollowing ? (
                <ButtonSecondary
                  onClick={() => handleFollow(user._id)}
                  disabled={loading}
                >
                  Following
                </ButtonSecondary>
              ) : (
                userInfo._id !== user?._id && (
                  <ButtonPrimary
                    onClick={() => handleFollow(user?._id)}
                    disabled={loading}
                  >
                    Follow
                  </ButtonPrimary>
                )
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
}
