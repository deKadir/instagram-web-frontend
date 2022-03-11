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
import Events from "constants/SocketConfig";
import Skeleton from "react-loading-skeleton";
import Loading from "components/loading/Loading";
export default function Chat() {
  let roomId = useParams().roomId;
  let navigate = useNavigate();
  let token = useSelector((state) => state.auth.token);
  const { messages, setMessages, socket, rooms } = useContext(SocketContext);
  let activeUserId = useSelector((state) => state.user)._id;
  const [messageInput, setMessageInput] = useState({
    roomId: roomId,
    text: "",
  });
  const [activeTab, setActiveTab] = useState();
  const [messageFromSocket, setMessageFromSocket] = useState("");
  document.title = "Chat";

  const [loading, setLoading] = useState(false);

  //handle tab changes
  useEffect(() => {
    setMessages([]);
    setMessageInput({ ...messageInput, roomId: roomId });
    if (roomId !== "inbox") {
      setLoading(true);
      getMessages(token, roomId)
        .then((res) => {
          setMessages(res.data.messages);
          setActiveTab(...res.data.users.filter((u) => u._id !== activeUserId));
          setLoading(false);
        })
        .catch((e) => {
          console.log(e.response);
          setLoading(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId]);

  //scroll to bottom when messages uploaded
  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView();
  }, [messages, loading]);

  //send message
  const handleMessageSubmit = (e) => {
    e.preventDefault();
    socket.emit(Events.SEND_MESSAGE, {
      sender: activeUserId,
      conversationId: roomId,
      receiverId: activeTab?._id,
      text: messageInput.text,
    });
    sendMessage(token, messageInput)
      .then(() => {
        setMessages([
          ...messages,
          {
            sender: activeUserId,
            conversationId: roomId,
            receiverId: activeTab?._id,
            text: messageInput.text,
          },
        ]);
        setMessageInput({ ...messageInput, text: "" });
      })
      .catch((error) => console.log(error.response));
  };

  //listen messages from socket
  useEffect(() => {
    socket.on(Events.GET_MESSAGE, (comingMessage) => {
      setMessageFromSocket(comingMessage);
    });
  }, [socket]);

  //add coming message to messages
  useEffect(() => {
    if (messageFromSocket) {
      setMessages([...messages, messageFromSocket]);
    }
    //update last message on rooms
    if (messageFromSocket) {
      rooms.forEach((room) => {
        if (room.users.includes(activeTab?._id)) {
          room.lastMessage[0].text = messageFromSocket;
        }
      });
    }
    return () => setMessageFromSocket(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messageFromSocket, activeTab]);
  if (roomId === "inbox") {
    return (
      <div
        className={style.chat}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Start messaging</h1>
      </div>
    );
  }
  if (loading) {
    return (
      <div className={style.chat}>
        <div className={style.chat_navbar}>
          <Skeleton circle={true} width="24px" height="24px" />
          <p onClick={() => navigate(`/profile/${activeTab?.username}/posts`)}>
            <Skeleton width="100px" height="24px" />
          </p>
          <InfoIcon />
        </div>
        <div className={style.chat_body}>
          {" "}
          <Loading />{" "}
        </div>
      </div>
    );
  }
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
            profileImg={activeTab?.profileImg}
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
