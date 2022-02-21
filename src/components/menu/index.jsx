import React, { useState } from "react";
import style from "./menu.module.scss";

export default function Menu({ Toggle, children }) {
  const [active, setActive] = useState(false);
  return (
    <div className={style.menu}>
      {
        //button for disable menu when click somewhere
        active && <button onClick={() => setActive(false)}></button>
      }
      <div
        className={style.menu_toggle}
        onClick={() => setTimeout(() => setActive(true))}
      >
        {Toggle}
        {active && <div className={style.menu_items}>{children}</div>}
      </div>
    </div>
  );
}
