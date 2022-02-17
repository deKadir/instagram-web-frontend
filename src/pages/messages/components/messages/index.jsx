import MessageProfile from "components/messageProfile";
import style from "./messages.module.scss";
import { DropdownIcon, NewMessages } from "assets/icons";
export default function Messages() {
  return (
    <div className={style.messages}>
      <div className={style.messages_navbar}>
        <p>
          kadir
          <DropdownIcon />
        </p>
        <NewMessages />
      </div>
      <MessageProfile />
      <MessageProfile />
      <MessageProfile />
    </div>
  );
}
