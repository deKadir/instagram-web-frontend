import React from "react";
import style from "./login.module.scss";
import phoneImg from "assets/images/phone_img.png";
import Footer from "components/footer";
import { Input } from "components/inputs";
import { ButtonPrimary } from "components/buttons";
import { InstagramTextLogo } from "assets/icons";
import { ButtonText } from "components/buttons";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();
  return (
    <div className={style.login}>
      <div className={style.login_body}>
        <img src={phoneImg} alt="login" />
        <div className={style.login_form}>
          <form>
            <InstagramTextLogo />
            <Input placeholder="Phone number,username or email" />
            <Input placeholder="Password" />
            <ButtonPrimary>Login</ButtonPrimary>
            <ButtonText onClick={() => navigate("/reset")}>
              Forgot password?
            </ButtonText>
          </form>
          <div className={style.login_form_footer}>
            Don't have account?{" "}
            <ButtonText onClick={() => navigate("/register")}>
              Register
            </ButtonText>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
