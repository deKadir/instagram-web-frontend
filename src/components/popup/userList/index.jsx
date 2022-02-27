import style from "./userlist.module.scss";
import { getImage } from "helpers/image";
import { ButtonSecondary } from "components/buttons";
import { ButtonPrimary } from "components/buttons";
import { useState, useEffect } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { follow } from "requests/UserRequest";
import { saveUserInfo } from "redux/actions/userAction";
import { useNavigate } from "react-router-dom";

export default function UserList({
  title = "",

  method = () => {},
  token = "",
  userId = "",
}) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  let userInfo = useSelector((state) => state.user);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
    method(token, userId)
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);
  const handleFollow = (_userId) => {
    follow(_userId, token)
      .then((res) => {
        if (!res.data.error) {
          dispatch(saveUserInfo({ ...userInfo, following: res.data.data }));
          setTimeout(() => {
            setData([...data]);
          }, 100);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={style.list}>
      <div className={style.list_head}>
        <h4>{title}</h4>
      </div>
      <section className={style.list_items}>
        {loading && (
          <div className={style.list_item}>
            <Skeleton variant="circular" width={40} height={40} />
            <div className={style.list_item_info}>
              <p>
                <Skeleton variant="text" />
              </p>

              <p>
                {" "}
                <Skeleton variant="text" />
              </p>
            </div>
          </div>
        )}

        {data.map((user, key) => {
          return (
            <div className={style.list_item} key={key}>
              <img src={getImage(user?.profileImg)} alt="profile img" />
              <div className={style.list_item_info}>
                <p onClick={() => navigate(`/profile/${user?.username}/posts`)}>
                  {user?.username}
                </p>
                <span
                  onClick={() => navigate(`/profile/${user?.username}/posts`)}
                >
                  {user?.name}
                </span>
              </div>

              {userInfo.following.find((u) => u._id === user._id) ? (
                <ButtonSecondary onClick={() => handleFollow(user._id)}>
                  Following
                </ButtonSecondary>
              ) : (
                user._id !== userInfo._id && (
                  <ButtonPrimary onClick={() => handleFollow(user._id)}>
                    Follow
                  </ButtonPrimary>
                )
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
}
