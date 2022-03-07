import Navbar from "components/navbar";
import React from "react";
import SettingsBody from "./components/body";

export default function Settings() {
  document.title = "edit";
  return (
    <div>
      <Navbar />
      <SettingsBody />
    </div>
  );
}
