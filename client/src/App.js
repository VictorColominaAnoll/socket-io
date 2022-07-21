import './App.css';
import io from 'socket.io-client';
import { useEffect, useState } from "react"
const socket = io.connect("http://localhost:3001");

function App() {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    socket.emit("send_message", { message: "hola" })
  }

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessage(data.message)
    })
  }, [socket])

  return (
    <div className="App">
      <button onClick={() => sendMessage()}>Send message</button>
      <span>{message}</span>
    </div>
  );
}

export default App;
