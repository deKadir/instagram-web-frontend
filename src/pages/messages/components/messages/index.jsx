import MessageProfile from "components/messageProfile";
import style from "./messages.module.scss";
import { DropdownIcon, NewMessages } from "assets/icons";

import { useSelector } from "react-redux";
import { getRooms } from "requests/ChatRequest";
import { useState, useEffect } from "react";
export default function Messages() {
  const [rooms, setRooms] = useState([]);
  const token = useSelector((state) => state.auth.token);
  let userInfo = useSelector((state) => state.user);
  useEffect(() => {
    getRooms(token).then((result) => {
      setRooms([...result?.data?.rooms]);
    });
  }, []);

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
