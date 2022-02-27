import { SettingsIcon } from "assets/icons";
import { MoreIcon } from "assets/icons";
import { ButtonPrimary, ButtonSecondary } from "components/buttons";
import style from "./actions.module.scss";
import { Link } from "react-router-dom";
import { follow } from "requests/UserRequest";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { saveUserInfo } from "redux/actions/userAction";

export function UserAction({ userId, userInfo, following, setFollowing }) {
  let dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const [buttonLoading, setButtonLoading] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setButtonLoading(true);
    follow(userId, token)
      .then((res) => {
        setFollowing(!following);
        setButtonLoading(false);
        dispatch(saveUserInfo({ ...userInfo, following: res.data.data }));

        console.log(res.data.data);
      })
      .catch((error) => {
        console.log(error.response);
        setButtonLoading(false);
      });
  };

  return (
    <div className={style.action}>
      {following ? (
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

      <MoreIcon />
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
