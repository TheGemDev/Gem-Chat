import React from "react";

import { auth } from "../../utils/firebase";

const Message = ({ text, uid, photoURL }) => {
  const messageClass =
    "message " + uid === auth.currentUser.uid ? "sent" : "received";
  return (
    <div className={messageClass}>
      <img
        alt={"img"}
        src={
          photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
        }
      />
      <p>{text}</p>
    </div>
  );
};
export default Message;
