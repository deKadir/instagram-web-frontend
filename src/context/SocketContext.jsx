import Events from "constants/SocketConfig";
import { useState, useEffect } from "react";

import { createContext } from "react";

import socketIOClient from "socket.io-client";
import { useParams } from "react-router-dom";
export const SocketContext = createContext();
const socket = socketIOClient("http://localhost:3001");

function SocketContextProvider(props) {
  const [activeRoom, setActiveRoom] = useState();
  const [messages, setMessages] = useState([]);
  let roomId = useParams().roomId;

  useEffect(() => {
    socket.off(Events.CHAT).on(Events.CHAT, (msg) => {
      const message = JSON.parse(JSON.stringify(msg));
      console.log(message);
      if (message.roomId === roomId) {
        setMessages([...messages, message]);
      }
    });
  }, [roomId, messages]);

  const data = {
    messages,
    setMessages,
    activeRoom,
    setActiveRoom,
    socket,
  };
  return <SocketContext.Provider value={data} {...props} />;
}
export default SocketContextProvider;
