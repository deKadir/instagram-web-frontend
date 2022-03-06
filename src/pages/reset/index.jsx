import React, { useState } from "react";
import style from "./reset.module.scss";
import { Input } from "components/inputs";
import { ButtonPrimary, ButtonSecondary } from "components/buttons";
import { ButtonText } from "components/buttons";
import { InstagramTextLogo } from "assets/icons";
import { useNavigate } from "react-router-dom";
import { sendVerificationCode } from "requests/UserRequest";
import { validateEmail } from "helpers/validate";
const responseInitial = {
  error: false,
  message: "",
  loading: false,
};
export default function Reset() {
  let navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [response, setResponse] = useState(responseInitial);
  const sendCode = (e) => {
    setResponse({ ...responseInitial, loading: true });
    e.preventDefault();
    sendVerificationCode(mail)
      .then((res) => {
        if (res.data.error) {
          setResponse({
            error: true,
            message: res.data.message,
            loading: false,
          });
        } else {
          setResponse({ error: false, message: "", loading: false });
        }
      })
      .catch((e) =>
        setResponse({ error: true, message: e.response, loading: false })
      );
  };
  return (
    <div className={style.reset}>
      <div className={style.reset_body}>
        <form>
          <InstagramTextLogo />
          <Input
            placeholder="Email, phone number, username"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <ButtonPrimary
            disabled={!validateEmail(mail)}
            onClick={(e) => sendCode(e)}
          >
            Send code
          </ButtonPrimary>
          <h4>Or</h4>
          <label style={{ color: "red" }}>{response.message}</label>
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
