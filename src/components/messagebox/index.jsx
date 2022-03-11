import style from "./messagebox.module.scss";
import profile from "assets/images/profile_img.jpg";
import Styles from "constants/style";
import { getImage } from "helpers/image";
export default function Messagebox({ owner = false, text, profileImg }) {
  return (
    <div className={style.messagebox}>
      {!owner && <img src={getImage(profileImg)} />}
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
