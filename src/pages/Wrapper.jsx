import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "constants/routes";

export default function Wrapper() {
  return (
    <Routes>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            exact={route.exact}
            path={route.path}
            element={<route.component />}
          />
        );
      })}
    </Routes>
  );
}
