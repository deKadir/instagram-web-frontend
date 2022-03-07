import MessageProfile from "components/messageProfile";
import style from "./messages.module.scss";
import { DropdownIcon, NewMessages } from "assets/icons";
import { useContext } from "react";
import { MainContext } from "helpers/Context";
import { useSelector } from "react-redux";
export default function Messages() {
  const { rooms } = useContext(MainContext);
  let userInfo = useSelector((state) => state.user);

  return (
    <div className={style.messages}>
      <div className={style.messages_navbar}>
        <p>
          {userInfo?.username}
          <DropdownIcon />
        </p>
        <NewMessages />
      </div>
      {rooms.map((room, index) => (
        <MessageProfile room={room} key={index} />
      ))}
    </div>
  );
}
