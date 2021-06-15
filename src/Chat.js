import { Avatar } from "@material-ui/core";
import StopRoundedIcon from "@material-ui/icons/StopRounded";
import React from "react";
import ReactTimeago from "react-timeago";
import "./Chat.css";

function Chat({ id, profilePic, username, timestamp, imageUrl, read }) {
  const open = () => {
      
  };

  return (
    <div onClick={open} className="chat">
      <Avatar className="chat_avatar" src={profilePic} />
      <div className="chat_info">
        <h4>{username}</h4>
        <p>
          Tap to view -{" "}
          <ReactTimeago date={new Date(timestamp?.toDate()).toLocaleString()} />
        </p>
      </div>

      {!read && <StopRoundedIcon className="chat_readIcon" />}
    </div>
  );
}

export default Chat;
