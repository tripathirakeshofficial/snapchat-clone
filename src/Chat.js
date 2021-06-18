import { Avatar } from "@material-ui/core";
import StopRoundedIcon from "@material-ui/icons/StopRounded";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import ReactTimeago from "react-timeago";
import "./Chat.css";
import { selectImage } from "./features/appSlice";
import { db } from "./firebase";

function Chat({ id, profilePic, username, timestamp, imageUrl, read }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const open = () => {
    if (!read) {
      dispatch(selectImage(imageUrl));
      db.collection("posts").doc(id).set(
        {
          read: true,
        },
        { merge: true }
      );
    }

    history.push("/chats/view");
  };

  return (
    <div onClick={open} className="chat">
      <Avatar className="chat_avatar" src={profilePic} />
      <div className="chat_info">
        <h4>{username}</h4>
        <p>
          {!read && "Tap to view -"}{" "}
          <ReactTimeago date={new Date(timestamp?.toDate()).toLocaleString()} />
        </p>
      </div>

      {!read && <StopRoundedIcon className="chat_readIcon" />}
    </div>
  );
}

export default Chat;
