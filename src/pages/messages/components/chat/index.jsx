import { EmojiIcon } from "assets/icons";
import { Button } from "components/buttons";
import Messagebox from "components/messagebox";
import React, { useEffect, useState } from "react";
import style from "./chat.module.scss";
import { InfoIcon } from "assets/icons";
import { useNavigate, useParams } from "react-router-dom";
import { getMessages, sendMessage } from "requests/ChatRequest";
import { useSelector } from "react-redux";
import { getImage } from "helpers/image";
import socketIOClient from "socket.io-client";
export default function Chat() {
  let roomId = useParams().roomId;
  let navigate = useNavigate();
  let token = useSelector((state) => state.auth.token);
  const [messages, setMessages] = useState([]);
  let activeUserId = useSelector((state) => state.user)._id;
  const [messageInput, setMessageInput] = useState({
    roomId: roomId,
    text: "",
  });
  const [activeTab, setActiveTab] = useState();
  const socket = socketIOClient("http://localhost:3001");
  document.title = "Chat";
  useEffect(() => {
    setMessages([]);
    setMessageInput({ ...messageInput, roomId: roomId });
    if (roomId !== "inbox") {
      getMessages(token, roomId)
        .then((res) => {
          setMessages(res.data.messages);
          setActiveTab(...res.data.users.filter((u) => u._id !== activeUserId));
        })
        .catch((e) => console.log(e.response));
    }
  }, [roomId]);
  useEffect(() => {
    socket.on("chat", (msg) => {
      const message = JSON.parse(JSON.stringify(msg));
      setMessages([...messages, message]);
    });
    return () => socket.close();
  }, [messages]);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    sendMessage(token, messageInput)
      .then(() => {
        setMessageInput({ ...messageInput, text: "" });
        socket.emit("chat", {
          text: messageInput.text,
          sender: activeUserId,
          roomId,
        });
      })
      .catch((error) => console.log(error.response));
  };
  return (
    <div className={style.chat}>
      <div className={style.chat_navbar}>
        <img
          alt="profile"
          src={getImage(activeTab?.profileImg)}
          onClick={() => navigate(`/profile/${activeTab?.username}/posts`)}
        />
        <p onClick={() => navigate(`/profile/${activeTab?.username}/posts`)}>
          {activeTab?.username}
        </p>
        <InfoIcon />
      </div>
      <div className={style.chat_body}>
        {messages.map((message, index) => (
          <Messagebox
            text={message.text}
            owner={message.sender === activeUserId}
            key={index}
          />
        ))}
      </div>
      <div className={style.chat_input}>
        <EmojiIcon />
        <input
          placeholder="type message"
          value={messageInput.text}
          onChange={(e) =>
            setMessageInput({ ...messageInput, text: e.target.value })
          }
        />
        <Button
          disabled={!messageInput.text.length}
          onClick={(e) => handleMessageSubmit(e)}
        >
          Send
        </Button>
      </div>
    </div>
  );
}
