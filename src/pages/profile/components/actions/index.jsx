import { SettingsIcon } from "assets/icons";
import { MoreIcon } from "assets/icons";
import { ButtonPrimary, ButtonSecondary } from "components/buttons";
import style from "./actions.module.scss";
import { Link } from "react-router-dom";
import { follow } from "requests/UserRequest";
import { useSelector } from "react-redux";
export function UserAction({
  following,
  setFollowing,
  userId,
  loading,
  setLoading,
}) {
  const token = useSelector((state) => state.auth.token);
  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    follow(userId, token)
      .then(() => {
        setFollowing(!following);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
        setLoading(false);
      });
  };
  return (
    <div className={style.action}>
      {following ? (
        <>
          <ButtonSecondary style={{ marginRight: "0.5rem" }}>
            Message
          </ButtonSecondary>
          <ButtonSecondary disabled={loading} onClick={handleClick}>
            following
          </ButtonSecondary>
        </>
      ) : (
        <ButtonPrimary disabled={loading} onClick={handleClick}>
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
