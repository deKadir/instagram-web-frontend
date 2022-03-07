import React, { useState } from "react";
import { Input } from "components/inputs";
import style from "./reset.module.scss";
import { ButtonPrimary } from "components/buttons";
import { InstagramTextLogo } from "assets/icons";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "requests/UserRequest";

export default function ResetPassword() {
  let token = useParams().token;
  const [passwordForm, setPasswordForm] = useState({
    password: "",
    passwordVerify: "",
  });
  const [response, setResponse] = useState({ error: false, message: "" });
  let navigate = useNavigate();
  const handleReset = (e) => {
    e.preventDefault();
    setResponse({ error: false, message: "" });
    if (passwordForm.password === passwordForm.passwordVerify) {
      resetPassword(token, passwordForm)
        .then((res) => {
          setResponse(res.data);
          setTimeout(() => navigate("/login"), 1000);
        })
        .catch((e) => setResponse(e.response.data));
    } else {
      setResponse({ error: true, message: "passwords are not same" });
    }
  };
  return (
    <div className={style.reset}>
      {" "}
      <div className={style.reset_body}>
        <form>
          <InstagramTextLogo />
          <Input
            type="password"
            placeholder="new password"
            value={passwordForm.password}
            onChange={(e) =>
              setPasswordForm({ ...passwordForm, password: e.target.value })
            }
          />
          <Input
            type="password"
            placeholder="verify password"
            value={passwordForm.passwordVerify}
            onChange={(e) =>
              setPasswordForm({
                ...passwordForm,
                passwordVerify: e.target.value,
              })
            }
          />
          <label style={{ color: response.error ? "red" : "green" }}>
            {response.message}
          </label>
          <ButtonPrimary
            disabled={!passwordForm.password || !passwordForm.passwordVerify}
            onClick={(e) => handleReset(e)}
          >
            Reset
          </ButtonPrimary>
        </form>
      </div>
    </div>
  );
}
