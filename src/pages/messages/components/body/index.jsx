import React, { useState } from "react";
import Chat from "../chat";
import Messages from "../messages";
import style from "./body.module.scss";
import { MainContext, useContext } from "helpers/Context";
export default function MessagesBody() {
  const [rooms, setRooms] = useState([]);
  const [messages, setMessages] = useState([]);
  const data = {
    rooms,
    setRooms,
    messages,
    setMessages,
  };
  return (
    <MainContext.Provider value={data}>
      <div className={style.body}>
        <Messages />
        <Chat />
      </div>
    </MainContext.Provider>
  );
}
