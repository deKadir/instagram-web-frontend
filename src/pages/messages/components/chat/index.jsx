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
export default function Chat() {
  let roomId = useParams().roomId;
  let navigate = useNavigate();
  let token = useSelector((state) => state.auth.token);
  const [messages, setMessages] = useState([]);
  let activeUserId = useSelector((state) => state.user)._id;
  const [message, setMessage] = useState({ roomId: roomId, text: "" });
  const [activeTab, setActiveTab] = useState();
  document.title = "Chat";
  useEffect(() => {
    if (roomId !== "inbox") {
      getMessages(token, `?room=${roomId}`)
        .then((res) => {
          setMessages(res.data.messages);

          setActiveTab(...res.data.users.filter((u) => u._id !== activeUserId));
        })
        .catch((e) => console.log(e.response));
    }
  }, [roomId]);
  const handleMessageSubmit = (e) => {
    e.preventDefault();
    sendMessage(token, message)
      .then((result) => {
        setMessage({ ...message, text: "" });
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
          value={message.text}
          onChange={(e) => setMessage({ ...message, text: e.target.value })}
        />
        <Button
          disabled={!message.text.length}
          onClick={(e) => handleMessageSubmit(e)}
        >
          Send
        </Button>
      </div>
    </div>
  );
}
