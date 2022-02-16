import style from "./switch.module.scss";
import profile from "assets/images/post_img.jpg";
export default function SwitchAccount() {
  return (
    <div className={style.switch}>
      <img alt="" src={profile} width="62px" height="62px" />
      <div>
        <p>kadir</p>
      </div>
      <button>Switch</button>
    </div>
  );
}
