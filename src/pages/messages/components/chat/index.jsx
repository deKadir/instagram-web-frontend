import { EmojiIcon } from "assets/icons";
import { Button } from "components/buttons";
import Messagebox from "components/messagebox";
import { useEffect, useContext, useState, useRef } from "react";

import style from "./chat.module.scss";
import { InfoIcon } from "assets/icons";
import { useNavigate, useParams } from "react-router-dom";
import { getMessages, sendMessage } from "requests/ChatRequest";
import { useSelector } from "react-redux";
import { getImage } from "helpers/image";

import { SocketContext } from "context/SocketContext";
export default function Chat() {
  let roomId = useParams().roomId;
  let navigate = useNavigate();
  let token = useSelector((state) => state.auth.token);
  const { messages, setMessages, socket, rooms, setRooms } =
    useContext(SocketContext);
  let activeUserId = useSelector((state) => state.user)._id;
  const [messageInput, setMessageInput] = useState({
    roomId: roomId,
    text: "",
  });
  const [activeTab, setActiveTab] = useState();

  document.title = "Chat";

  useEffect(() => {
    //burada backendde tuttuğumuz usersa ekleme yapıyoruz, o an aktif kullanıcıları görebilemke ve socket id ile işlem yapabilmek için, burada da işlem yapacak kullanıcıyı ekliyorum
    socket.emit("addUser", activeTab?._id);
  }, [activeTab]);
  useEffect(() => {
    socket.off("getMessage").on("getMessage", (comingMessage) => {
      setMessages([...messages, comingMessage]);
    });
  });
  //handle tab changes
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

  //scroll to bottom when messages uploaded
  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView();
  }, [messages]);

  const handleMessageSubmit = (e) => {
    e.preventDefault();

    sendMessage(token, messageInput)
      .then(() => {
        socket.emit("sendMessage", {
          sender: activeUserId,
          conversationId: roomId,
          receiverId: activeTab?._id,
          text: messageInput.text,
        });
        // setMessages([
        //   ...messages,
        //   {
        //     sender: activeUserId,
        //     conversationId: roomId,
        //     receiverId: activeTab?._id,
        //     text: messageInput.text,
        //   },
        // ]);
        setMessageInput({ ...messageInput, text: "" });
      })
      .catch((error) => console.log(error.response));
  };
  return (
    <div className={style.chat}>
      {/* user profile */}
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
      {/* chat messages */}
      <div className={style.chat_body}>
        {messages.map((message, index) => (
          <Messagebox
            text={message.text}
            owner={message.sender === activeUserId}
            key={index}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      {/* message input */}
      <div className={style.chat_input}>
        <EmojiIcon />
        <input
          placeholder="type message"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleMessageSubmit(e);
            }
          }}
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
