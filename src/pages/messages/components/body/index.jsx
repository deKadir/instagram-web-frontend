import React, { useEffect, useState } from "react";
import Chat from "../chat";
import Messages from "../messages";
import style from "./body.module.scss";

import { MainContext } from "context/Context";
import { useParams } from "react-router-dom";
export default function MessagesBody() {
  let roomId = useParams().roomId;
  const [activeRoom, setActiveRoom] = useState({ roomId });

  const data = {
    activeRoom,
    setActiveRoom,
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
