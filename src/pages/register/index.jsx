import { InstagramTextLogo } from "assets/icons";
import { ButtonText } from "components/buttons";
import { ButtonPrimary } from "components/buttons";
import { Input } from "components/inputs";
import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./register.module.scss";

export default function Register() {
  let navigate = useNavigate();
  return (
    <div className={style.register}>
      <form>
        <InstagramTextLogo />
        <Input placeholder="Phone number or email" />
        <Input placeholder="Name Surname" />
        <Input placeholder="username" />
        <Input placeholder="password" />
        <ButtonPrimary>Register</ButtonPrimary>
      </form>
      <div className={style.register_form_footer}>
        Already Have account?{" "}
        <ButtonText onClick={() => navigate("/login")}>Login</ButtonText>
      </div>
    </div>
  );
}
