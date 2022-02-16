import style from "./messageProfile.module.scss";
import profile from "assets/images/profile_img.jpg";
export default function MessageProfile() {
  return (
    <div className={style.messageProfile}>
      <img src={profile} />
      <div>
        <p>trellylucas</p>
        <p>Active 1 hour ago</p>
      </div>
    </div>
  );
}
