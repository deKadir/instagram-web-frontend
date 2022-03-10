import Navbar from "components/navbar";
import MessagesBody from "./components/body";
import SocketContextProvider from "context/SocketContext";
export default function Messages() {
  return (
    <div style={{ overflowY: "scroll" }}>
      <SocketContextProvider>
        <Navbar />
        <MessagesBody />
      </SocketContextProvider>
    </div>
  );
}
