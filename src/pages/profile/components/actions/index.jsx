import { SettingsIcon } from "assets/icons";
import { MoreIcon } from "assets/icons";
import { ButtonPrimary, ButtonSecondary } from "components/buttons";
import style from "./actions.module.scss";
import { Link } from "react-router-dom";
import { follow } from "requests/UserRequest";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { saveUserInfo } from "redux/actions/userAction";

export function UserAction({ user, userInfo, setUser }) {
  let dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const [buttonLoading, setButtonLoading] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setButtonLoading(true);
    follow(user?._id, token)
      .then((res) => {
        setButtonLoading(false);

        if (res.data.message === "follow") {
          dispatch(
            saveUserInfo({ ...userInfo, following: userInfo?.following + 1 })
          );
          setUser({
            ...user,
            followers: user?.followers + 1,
            isFollowing: true,
          });
        } else {
          dispatch(
            saveUserInfo({ ...userInfo, following: userInfo?.following - 1 })
          );
          setUser({
            ...user,
            followers: user?.followers - 1,
            isFollowing: false,
          });
        }
      })
      .catch((error) => {
        console.warn(error);
        setButtonLoading(false);
      });
  };

  return (
    <div className={style.action}>
      {user?.isFollowing ? (
        <>
          <ButtonSecondary style={{ marginRight: "0.5rem" }}>
            Message
          </ButtonSecondary>
          <ButtonSecondary disabled={buttonLoading} onClick={handleClick}>
            following
          </ButtonSecondary>
        </>
      ) : (
        <ButtonPrimary disabled={buttonLoading} onClick={handleClick}>
          Follow
        </ButtonPrimary>
      )}
    </div>
  );
}
export function EditProfile() {
  return (
    <div className={style.action}>
      <Link to={"/settings/edit"}>
        <ButtonSecondary>Edit Profile</ButtonSecondary>
      </Link>
      <Link to={"/settings/edit"}>
        <SettingsIcon />
      </Link>
    </div>
  );
}
