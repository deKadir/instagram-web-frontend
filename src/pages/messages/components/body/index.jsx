import Chat from "../chat";
import Messages from "../messages";
import style from "./body.module.scss";

import SocketContextProvider from "context/SocketContext";
export default function MessagesBody() {
  return (
    <SocketContextProvider>
      <div className={style.body}>
        <Messages />
        <Chat />
      </div>
    </SocketContextProvider>
  );
}
