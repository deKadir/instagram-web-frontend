import React, { useState } from "react";
import style from "./popup.module.scss";
export default function PopupContainer({ children, Toggle, access = true }) {
  const [active, setActive] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setActive(true);
        }}
      >
        {Toggle}
      </div>
      {active && access && (
        <div className={style.popup_body}>
          <button
            className={style.background_button}
            onClick={() => setActive(false)}
          ></button>
          {children}
        </div>
      )}
    </>
  );
}
