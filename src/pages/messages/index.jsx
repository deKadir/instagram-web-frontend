import Navbar from "components/navbar";
import MessagesBody from "./components/body";
export default function Messages() {
  return (
    <div style={{ overflowY: "scroll" }}>
      <Navbar />
      <MessagesBody />
    </div>
  );
}
