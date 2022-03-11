import style from "./messagebox.module.scss";
import Styles from "constants/style";
import { getImage } from "helpers/image";
export default function Messagebox({ owner = false, text, profileImg }) {
  return (
    <div className={style.messagebox}>
      {!owner && <img src={getImage(profileImg)} alt="profile" />}
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
