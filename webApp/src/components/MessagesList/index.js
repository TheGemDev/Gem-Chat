import React, { useEffect, useRef } from "react";

import Message from "./Message";
import { firestore } from "../../utils/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

const MessagesList = () => {
  const bottomElement = useRef();
  
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(500);
  const [messages] = useCollectionData(query, { idField: "id" });

  useEffect(() => {
    bottomElement.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <main>
      {messages && messages.map((msg) => <Message key={msg.id} {...msg} />)}

      <span ref={bottomElement}></span>
    </main>
  );
};

export default MessagesList;
