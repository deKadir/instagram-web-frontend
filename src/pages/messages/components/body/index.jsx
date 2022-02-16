import React from "react";
import Chat from "../chat";
import Messages from "../messages";
import style from "./body.module.scss";
export default function MessagesBody() {
  return (
    <div className={style.body}>
      <Messages />
      <Chat />
    </div>
  );
}
