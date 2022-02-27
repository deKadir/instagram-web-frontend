import style from "./switch.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getImage } from "helpers/image";

export default function SwitchAccount() {
  let user = useSelector((state) => state.user);
  return (
    <div className={style.switch}>
      <Link to={`/profile/${user?.username}/posts`}>
        <img
          alt=""
          src={getImage(user?.profileImg)}
          width="62px"
          height="62px"
        />
      </Link>
      <Link to={`/profile/${user.username}/posts`}>
        <p>{user?.username}</p>
      </Link>

      <button>Switch</button>
    </div>
  );
}
