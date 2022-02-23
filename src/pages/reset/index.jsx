import React from "react";
import style from "./reset.module.scss";
import { Input } from "components/inputs";
import { ButtonPrimary, ButtonSecondary } from "components/buttons";
import { ButtonText } from "components/buttons";
import { InstagramTextLogo } from "assets/icons";
import { useNavigate } from "react-router-dom";

export default function Reset() {
  let navigate = useNavigate();
  return (
    <div className={style.reset}>
      <div className={style.reset_body}>
        <form>
          <InstagramTextLogo />
          <Input placeholder="Email, phone number, username" />
          <ButtonPrimary>Send link</ButtonPrimary>
          <h4>Or</h4>
          <ButtonText onClick={() => navigate("/register")}>
            Create new Account
          </ButtonText>
        </form>

        <ButtonSecondary onClick={() => navigate("/login")}>
          Back to login page
        </ButtonSecondary>
      </div>
    </div>
  );
}
