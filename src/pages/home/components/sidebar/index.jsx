import Footer from "components/footer";
import Suggestions from "components/suggestions";
import SwitchAccount from "components/switchAccount";
import React from "react";
import style from "./sidebar.module.scss";
export default function Sidebar() {
  return (
    <div className={style.sidebar}>
      <SwitchAccount />
      <Suggestions />
      <Footer />
    </div>
  );
}
