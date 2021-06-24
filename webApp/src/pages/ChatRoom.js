import React from "react";
import "../App.css"

import MessagesList from "../components/MessagesList";
import MessageInput from "../components/MessageInput";

const ChatRoomPage = () => (
  <>
    <MessagesList />
    <MessageInput />
  </>
);

export default ChatRoomPage;
