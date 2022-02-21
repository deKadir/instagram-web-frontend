import React from "react";
import style from "./settings.module.scss";
import { Link } from "react-router-dom";

export const SettingsMenuItem = ({
  children,
  to,
  style: _style = {},
  onClick = () => {},
}) => {
  return (
    <Link to={to} className={style.menu_item} style={_style} onClick={onClick}>
      {children}
    </Link>
  );
};
export default function SettingsMenu({ children }) {
  return <div>{children}</div>;
}
