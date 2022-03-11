import style from "./follow.module.scss";
import profile from "assets/images/post_img.jpg";
export default function Follow({ text, width = "32px" }) {
  return (
    <div className={style.follow}>
      <img alt="" src={profile} width={width} height={width} />
      <div>
        <p>kadir</p>
        <span>new account</span>
      </div>
      <button>Follow</button>
    </div>
  );
}
