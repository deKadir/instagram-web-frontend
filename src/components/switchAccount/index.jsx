import style from "./switch.module.scss";
import profile from "assets/images/post_img.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function SwitchAccount() {
  let user = useSelector((state) => state.user);
  return (
    <div className={style.switch}>
      <Link to={`/profile/${user.username}/posts`}>
        <img alt="" src={profile} width="62px" height="62px" />
      </Link>
      <Link to={`/profile/${user.username}/posts`}>
        <p>{user.username}</p>
      </Link>

      <button>Switch</button>
    </div>
  );
}
