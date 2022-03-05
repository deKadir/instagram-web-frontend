import { ButtonPrimary } from "components/buttons";
import { Input } from "components/inputs";
import React, { useState } from "react";
import style from "./change.module.scss";
import { useSelector } from "react-redux";
import { changePassword } from "requests/UserRequest";
const formInitial = {
  currentPassword: "",
  newPassword: "",
  passwordVerify: "",
};
export default function ChangePassword() {
  let token = useSelector((state) => state.auth.token);
  const [passwordForm, setPasswordForm] = useState(formInitial);
  const [response, setResponse] = useState({ error: false, message: "" });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setResponse({ error: false, message: "" });

    if (passwordForm.newPassword !== passwordForm.passwordVerify) {
      setResponse({ error: true, message: "new password doesnt match" });
    } else {
      changePassword(token, passwordForm)
        .then((res) => {
          setResponse({
            error: res.data.error,

            message: res.data.message,
          });
        })
        .catch((e) => {
          setResponse({ error: true, message: e.response.data.message });
          console.log(e.response.data);
        });
    }
  };

  return (
    <div className={style.change_password}>
      <form>
        <div className={style.form_item}>
          <label>Current password</label>
          <Input
            type="password"
            value={passwordForm.currentPassword}
            onChange={(e) => {
              setPasswordForm({
                ...passwordForm,
                currentPassword: e.target.value,
              });
            }}
          />
        </div>
        <div
          className={style.form_item}
          value={passwordForm.newPassword}
          onChange={(e) => {
            setPasswordForm({ ...passwordForm, newPassword: e.target.value });
          }}
        >
          <label>New password</label>
          <Input type="password" value={passwordForm.newPassword} />
        </div>
        <div className={style.form_item}>
          <label>New password</label>
          <Input
            type="password"
            value={passwordForm.passwordVerify}
            onChange={(e) => {
              setPasswordForm({
                ...passwordForm,
                passwordVerify: e.target.value,
              });
            }}
          />
        </div>
        <div className={style.form_item}>
          <label style={{ color: response.error ? "red" : "green" }}>
            {response.message}
          </label>
          <ButtonPrimary
            disabled={
              !(
                passwordForm.currentPassword &&
                passwordForm.newPassword &&
                passwordForm.passwordVerify
              )
            }
            onClick={(e) => handleFormSubmit(e)}
          >
            Change password
          </ButtonPrimary>
        </div>
      </form>
    </div>
  );
}
