import io from "socket.io-client";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import { logout } from "../../redux/authSlice";
import CONFIG from "../../config/app.config";

const socket = io(CONFIG.REACT_APP_SERVER_URI_SOCKET);

const Chat = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);

  const dispatch = useDispatch();

  const sendPing = () => socket.emit("ping", { userUUID: "26111999" });

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    socket.on("pong", (data) => {
      setLastPong(data);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("pong");
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12">
            <div className="form-group">
              <label className="labelClass" htmlFor="messageArea">
                Your Welcome - <span className="userName"></span>
              </label>
              <div className="brand">
                <img
                  draggable="false"
                  style={{ cursor: "pointer" }}
                  className="logoImg"
                  id="logoImg"
                  height="40"
                  src="/media/img/fevicon.ico"
                  alt=""
                />
                <span className="logoName">LexusChat</span>
              </div>
              <textarea
                rows="3"
                id="messageArea"
                placeholder="Write a message..."
                className="form-control"
              ></textarea>
            </div>
          </div>
          <div className="col-md-12">
            <button id="submitBtn" className="btn btn-primary float-right">
              Send Message
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="typing text-success"></div>
            <ul className="message__box"></ul>
          </div>
        </div>
        <div>
          <p>Connected: {"" + isConnected}</p>
          <p>Last pong: {lastPong || "-"}</p>
          <button onClick={sendPing}>Send ping</button>
        </div>
        <div className="themeSection" id="themeSection"></div>
        <button onClick={() => dispatch(logout())}>Logout</button>
      </div>
    </>
  );
};

export default Chat;
