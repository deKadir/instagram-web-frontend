import React, { useState } from "react";
import style from "./login.module.scss";
import phoneImg from "assets/images/phone_img.png";
import Footer from "components/footer";
import { Input } from "components/inputs";
import { ButtonPrimary } from "components/buttons";
import { InstagramTextLogo } from "assets/icons";
import { ButtonText } from "components/buttons";
import { useNavigate } from "react-router-dom";
import { login } from "requests/AuthRequest";
import { saveToken } from "redux/actions/authAction";
import { useDispatch } from "react-redux";

export default function Login() {
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  let dispatch = useDispatch();

  let navigate = useNavigate();
  const handleFormChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    setError("");
    setLoading(true);
    e.preventDefault();
    login(loginForm)
      .then((res) => {
        setLoading(false);
        dispatch(saveToken(res.data.token));
        navigate("/");
      })
      .catch((er) => {
        setError(er.response.data.message);
        console.log(er.response.data);
        setLoading(false);
      });
  };
  return (
    <div className={style.login}>
      <div className={style.login_body}>
        <img src={phoneImg} alt="login" />
        <div className={style.login_form}>
          <form>
            <InstagramTextLogo />
            <Input
              placeholder="username or email"
              name="username"
              value={loginForm.username}
              onChange={handleFormChange}
            />
            <Input
              placeholder="Password"
              type="password"
              name="password"
              value={loginForm.password}
              onChange={handleFormChange}
            />
            <ButtonPrimary
              onClick={handleFormSubmit}
              loading={loading}
              disabled={!(loginForm.username && loginForm.password)}
            >
              Login
            </ButtonPrimary>
            <ButtonText onClick={() => navigate("/reset")}>
              Forgot password?
            </ButtonText>

            <label>{error}</label>
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
