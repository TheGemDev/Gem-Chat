import React from "react";

import { Divider } from "antd";
import firebase, { auth } from "../../utils/firebase";
import user from "../../assets/messages/user.svg";

//const t = firebase.firestore.Timestamp.fromDate(new Date());

const Message = ({ text, uid, photoURL, displayName }) => {
  const messageClass =
    "message " + uid === auth.currentUser.uid ? "sent" : "received";
  return (
    <div className={messageClass}>
      <div
        style={{
          display: "flex",
          alignItems: "left",
        }}>
        <img alt={"img"} src={photoURL || user} />
        <span>{" " + displayName}</span>
      </div>

      <p>{text}</p>
      <Divider />
    </div>
  );
};
export default Message;
