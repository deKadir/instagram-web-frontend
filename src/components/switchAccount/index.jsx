import style from "./switch.module.scss";
import profile from "assets/images/post_img.jpg";
import { Link } from "react-router-dom";
export default function SwitchAccount() {
  return (
    <div className={style.switch}>
      <Link to={"/profile/posts"}>
        <img alt="" src={profile} width="62px" height="62px" />
      </Link>
      <Link to={"/profile/posts"}>
        <p>kadir</p>
      </Link>

      <button>Switch</button>
    </div>
  );
}
