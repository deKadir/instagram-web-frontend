import style from "./follow.module.scss";
import { getImage } from "helpers/image";
import { useNavigate } from "react-router-dom";
export default function Follow({ userInfo, width = "32px" }) {
  let navigate = useNavigate();
  return (
    <div className={style.follow}>
      <img
        alt=""
        src={getImage(userInfo?.profileImg)}
        width={width}
        height={width}
        onClick={() => navigate(`/profile/${userInfo?.username}/posts`)}
      />
      <div>
        <p onClick={() => navigate(`/profile/${userInfo?.username}/posts`)}>
          {userInfo?.username}
        </p>
        <span>new account</span>
      </div>
      <button></button>
    </div>
  );
}
