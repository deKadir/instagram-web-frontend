import { SettingsIcon } from "assets/icons";
import { ButtonPrimary, ButtonSecondary } from "components/buttons";
import style from "./actions.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { follow } from "requests/UserRequest";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { saveUserInfo } from "redux/actions/userAction";
import { getRoom } from "requests/ChatRequest";

export function UserAction({ user, userInfo, setUser }) {
  let dispatch = useDispatch();
  let navigate = useNavigate();
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

  const directMessageToUser = (e) => {
    e.preventDefault();
    getRoom(token, user?._id)
      .then((result) => navigate(`/messages/${result.data.room._id}`))
      .catch((error) => console.log(error.response));
  };
  return (
    <div className={style.action}>
      {user?.isFollowing ? (
        <>
          <ButtonSecondary
            style={{ marginRight: "0.5rem" }}
            onClick={(e) => directMessageToUser(e)}
          >
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
