import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import routes from "constants/routes";
import { useSelector, useDispatch } from "react-redux";
import { getActiveUser } from "requests/UserRequest";
import Login from "./login";
import { InstagramLogo } from "assets/icons";
import { saveUserInfo } from "redux/actions/userAction";

export default function Wrapper() {
  const token = useSelector((state) => state.auth.token);
  const [auth, setAuth] = useState({ auth: false, loading: true });
  let dispatch = useDispatch();
  useEffect(() => {
    getActiveUser(token)
      .then((res) => {
        setAuth({ auth: true, loading: false });

        dispatch(saveUserInfo(res.data.data));
      })
      .catch(() => setAuth({ auth: false, loading: false }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
  return (
    <Routes>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            exact={route.exact}
            path={route.path}
            element={
              auth.loading ? (
                <div
                  style={{
                    display: "flex",
                    height: "100vh",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <InstagramLogo />
                </div>
              ) : !auth.auth && route.protected ? (
                <Login />
              ) : (
                <route.component />
              )
            }
          />
        );
      })}
    </Routes>
  );
}
