import React, { useState } from "react";

import { Form, Button, Input } from "antd";
import firebase, { auth, firestore } from "../utils/firebase";
import { SendOutlined } from "@ant-design/icons";

const MessageInput = () => {
  const [message, setMessage] = useState("");

  const messagesRef = firestore.collection("messages");
  const sendMessage = () => {
    setMessage("");
    const { uid, photoURL } = auth.currentUser;
    messagesRef.add({
      text: message,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
  };

  return (
    <Form
      style={{ position: "sticky", bottom: "0", width: "100%" }}
      layout="inline"
      onFinish={sendMessage}
    >
      <Form.Item
        name="message"
        style={{ width: "80%", marginBottom: 0, marginRight: 0 }}
      >
        <Input
          placeholder="Type a message"
          value={message}
          allowClear
          onChange={(e) => setMessage(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        style={{
          marginBottom: 0,
          marginRight: 0,
          width: "20%",
        }}
      >
        <Button
          style={{ width: "100%" }}
          type="primary"
          htmlType="submit"
          disabled={!message}
        ><SendOutlined />
        </Button>
      </Form.Item>
    </Form>
  );
  
};

export default MessageInput;
