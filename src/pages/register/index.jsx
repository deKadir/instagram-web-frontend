import { InstagramTextLogo } from "assets/icons";
import { ButtonText } from "components/buttons";
import { ButtonPrimary } from "components/buttons";
import { Input } from "components/inputs";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "requests/AuthRequest";

import style from "./register.module.scss";
import { saveToken } from "redux/actions/authAction";
import { useDispatch } from "react-redux";
const formInitial = {
  email: "",
  username: "",
  name: "",
  password: "",
};
export default function Register() {
  let navigate = useNavigate();
  const [registerForm, setRegisterForm] = useState(formInitial);
  const [error, setError] = useState("");
  let dispatch = useDispatch();
  const handleFormChange = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    setError("");
    e.preventDefault();
    register(registerForm)
      .then((res) => {
        dispatch(saveToken(res.data.token));
        navigate("/");
      })
      .catch((error) => {
        if (error.response.data.message.includes("username")) {
          setError("this username already taken");
        } else if (
          error.response.data.message.includes("email") &&
          error.response.data.message.includes("validation")
        ) {
          setError("please provide valid email");
        } else if (
          error.response.data.message.includes("email") &&
          error.response.data.message.includes("duplicate")
        ) {
          setError("this email already in use");
        } else {
          setError(error.response.data.message);
        }
      });
  };
  return (
    <div className={style.register}>
      <form>
        <InstagramTextLogo />
        <Input
          placeholder="email"
          value={registerForm.email}
          onChange={handleFormChange}
          name="email"
        />
        <Input
          placeholder="Name Surname"
          value={registerForm.name}
          onChange={handleFormChange}
          name="name"
        />
        <Input
          placeholder="username"
          value={registerForm.username}
          onChange={handleFormChange}
          name="username"
        />
        <Input
          placeholder="password"
          value={registerForm.password}
          onChange={handleFormChange}
          name="password"
        />
        <label style={{ color: "red" }}>{error}</label>
        <ButtonPrimary
          disabled={
            !(
              registerForm.email &&
              registerForm.name &&
              registerForm.password &&
              registerForm.username
            )
          }
          onClick={handleFormSubmit}
        >
          Register
        </ButtonPrimary>
      </form>
      <div className={style.register_form_footer}>
        Already Have account?{" "}
        <ButtonText onClick={() => navigate("/login")}>Login</ButtonText>
      </div>
    </div>
  );
}
