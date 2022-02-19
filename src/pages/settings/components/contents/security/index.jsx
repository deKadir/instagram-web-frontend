import { ButtonText } from "components/buttons";

import { Checkbox } from "components/inputs";
import React from "react";
import style from "./security.module.scss";
export default function Security() {
  return (
    <div className={style.security}>
      <div className={style.security_item}>
        <h2>Account Privacy</h2>
        <Checkbox title="Private Account" />
        <span>
          When your account is private, only people you approve can see your
          photos and videos on Instagram. Your existing followers won't be
          affected.
        </span>
      </div>
      <div className={style.security_item}>
        <h2>Blocked accounts</h2>
        <ul>
          <li>
            <p>kadir</p>
            <ButtonText>unblock</ButtonText>
          </li>
          <li>
            <p>kadir</p>
            <ButtonText>unblock</ButtonText>
          </li>
          <li>
            <p>kadir</p>
            <ButtonText>unblock</ButtonText>
          </li>
        </ul>
      </div>
    </div>
  );
}
