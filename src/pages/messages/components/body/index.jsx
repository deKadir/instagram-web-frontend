import React, { useEffect, useState } from "react";
import Chat from "../chat";
import Messages from "../messages";
import style from "./body.module.scss";
import { MainContext } from "helpers/Context";
import { getRooms } from "requests/ChatRequest";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
export default function MessagesBody() {
  const [rooms, setRooms] = useState([]);
  const [messages, setMessages] = useState([]);
  let roomId = useParams().roomId;
  const token = useSelector((state) => state.auth.token);
  const [activeRoom, setActiveRoom] = useState({ roomId });
  const data = {
    rooms,
    setRooms,
    activeRoom,
    setActiveRoom,
  };
  useEffect(() => {
    getRooms(token)
      .then((result) => setRooms(result.data.rooms))
      .catch((e) => console.log(e.response));
  }, []);
  return (
    <MainContext.Provider value={data}>
      <div className={style.body}>
        <Messages />
        <Chat />
      </div>
    </MainContext.Provider>
  );
}
