import React from "react";
import Navbar from "components/navbar";
import ProfileBody from "./components/body";

export default function Profile() {
  return (
    <div style={{ height: "101vh" }}>
      <Navbar />
      <ProfileBody />
    </div>
  );
}
