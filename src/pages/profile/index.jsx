import React from "react";
import Navbar from "components/navbar";
import ProfileBody from "./components/body";

export default function Profile() {
  return (
    <div style={{ overflowY: "scroll" }}>
      <Navbar />
      <ProfileBody />
    </div>
  );
}
