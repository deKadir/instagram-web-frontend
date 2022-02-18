import React from "react";
import SettingsContent from "../content";
import SettingsSidebar from "../sidebar";
import style from "./body.module.scss";
export default function SettingsBody() {
  return (
    <div className={style.body}>
      <SettingsSidebar />
      <SettingsContent />
    </div>
  );
}
