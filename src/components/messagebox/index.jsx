import style from "./messagebox.module.scss";
import profile from "assets/images/profile_img.jpg";
import Styles from "constants/routes/style";
export default function Messagebox({ owner = false, text }) {
  return (
    <div className={style.messagebox}>
      {!owner && <img src={profile} />}
      {
        <p
          style={
            owner
              ? { backgroundColor: Styles.borderColor, marginLeft: "auto" }
              : {}
          }
        >
          {text}
        </p>
      }
    </div>
  );
}
