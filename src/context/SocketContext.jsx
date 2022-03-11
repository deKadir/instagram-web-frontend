import Events from "constants/SocketConfig";
import { useState } from "react";

import { createContext } from "react";

import socketIOClient from "socket.io-client";
import { BACKEND_URL } from "../constants/ApiConfig";
export const SocketContext = createContext();
const socket = socketIOClient(BACKEND_URL);

function SocketContextProvider(props) {
  const [activeRoom, setActiveRoom] = useState();
  const [messages, setMessages] = useState([]);
  const [rooms, setRooms] = useState([]);
  const me = JSON.parse(localStorage.getItem("instagram_clone"));

  socket.emit(Events.ADD_USER, {
    userId: me.user._id,
    socketId: socket.id,
  });
  const data = {
    messages,
    setMessages,
    activeRoom,
    setActiveRoom,
    socket,
    rooms,
    setRooms,
  };
  return <SocketContext.Provider value={data} {...props} />;
}
export default SocketContextProvider;
