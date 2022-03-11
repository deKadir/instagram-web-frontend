import Events from "constants/SocketConfig";
import { useState } from "react";

import { createContext } from "react";

import socketIOClient from "socket.io-client";
export const SocketContext = createContext();
const socket = socketIOClient("http://localhost:3001");

function SocketContextProvider(props) {
  const [activeRoom, setActiveRoom] = useState();
  const [messages, setMessages] = useState([]);
  const [rooms, setRooms] = useState([]);
  const me = JSON.parse(localStorage.getItem("instagram_clone"));

  socket.emit("addUser", {
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
