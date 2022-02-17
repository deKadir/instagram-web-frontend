import { EmojiIcon } from "assets/icons";
import { Button } from "components/buttons";
import Messagebox from "components/messagebox";
import React from "react";
import style from "./chat.module.scss";
import profile from "assets/images/profile_img.jpg";
import { InfoIcon } from "assets/icons";
export default function Chat() {
  return (
    <div className={style.chat}>
      <div className={style.chat_navbar}>
        <img alt="profile" src={profile} />
        <p>Kadir</p>
        <InfoIcon />
      </div>
      <div className={style.chat_body}>
        <Messagebox text="selaam" />
        <Messagebox owner={true} text="selam nasılsın" />
        <Messagebox text="selaam" />
        <Messagebox owner={true} text="selam nasılsın" />
        <Messagebox text="selaam" />
        <Messagebox owner={true} text="selam nasılsın" />
        <Messagebox text="selaam" />
        <Messagebox owner={true} text="selam nasılsın" />
      </div>
      <div className={style.chat_input}>
        <EmojiIcon />
        <input placeholder="type message" />
        <Button disabled={true}>Send</Button>
      </div>
    </div>
  );
}
