import Navbar from "components/navbar";
import React, { useEffect } from "react";

import HomeBody from "./components/body";
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <HomeBody />
    </div>
  );
}
