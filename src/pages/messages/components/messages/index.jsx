import MessageProfile from "components/messageProfile";
import style from "./messages.module.scss";
import { DropdownIcon, NewMessages } from "assets/icons";

import { useSelector } from "react-redux";
import { getRooms } from "requests/ChatRequest";
import { useEffect, useState } from "react";
import { useContext } from "context/Context";
import { SocketContext } from "context/SocketContext";
import Skeleton from "react-loading-skeleton";
export default function Messages() {
  const { rooms, setRooms } = useContext(SocketContext);
  const token = useSelector((state) => state.auth.token);
  let userInfo = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getRooms(token)
      .then((result) => {
        setRooms([...result?.data?.rooms]);
        setLoading(false);
      })
      .catch(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (loading) {
    return (
      <div className={style.messages}>
        <div className={style.messages_navbar}>
          <p>
            {userInfo?.username}
            <DropdownIcon />
          </p>
          <NewMessages />
        </div>
        <div style={{ width: "80%", margin: "0 auto" }}>
          <Skeleton width={"100%"} height={50} style={{ marginTop: "1rem" }} />
          <Skeleton width={"100%"} height={50} style={{ marginTop: "1rem" }} />
          <Skeleton width={"100%"} height={50} style={{ marginTop: "1rem" }} />
          <Skeleton width={"100%"} height={50} style={{ marginTop: "1rem" }} />
        </div>
      </div>
    );
  }
  return (
    <div className={style.messages}>
      <div className={style.messages_navbar}>
        <p>
          {userInfo?.username}
          <DropdownIcon />
        </p>
        <NewMessages />
      </div>
      {rooms?.map((room, index) => (
        <MessageProfile room={room} key={index} />
      ))}
    </div>
  );
}
