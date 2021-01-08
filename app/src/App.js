import React, { useRef, useState, useEffect } from "react";
import "./App.css";

import { Layout, Button, Form, Input, PageHeader } from "antd";
import { YoutubeFilled, TwitterOutlined } from "@ant-design/icons";
import firebase from "./utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

const auth = firebase.auth();
const firestore = firebase.firestore();

const layout = {
  labelCol: { span: 100 },
  wrapperCol: { span: 100 },
};

function App() {
  const [user] = useAuthState(auth);

  return (
    <Layout className="App">
      <Layout.Header>
        <PageHeader
          title="Gem Chat App (0.0.1 beta-3)"
          extra={
            <>
              <a
                href="https://www.youtube.com/c/TheGemDev?sub_confirmation=1"
                target="_blank"
                rel="noreferrer"
              >
                <YoutubeFilled style={{ fontSize: "40px" }} />
              </a>
              <a
                href="https://twitter.com/TheGemDev"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterOutlined style={{ fontSize: "40px" }} />
              </a>
              <SignOut />
            </>
          }
        />
      </Layout.Header>

      <Layout.Content>{user ? <ChatRoom /> : <SignIn />}</Layout.Content>
    </Layout>
  );
}

const SignIn = () => (
  <Button
    className="sign-in"
    onClick={() => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())}
    type="primary"
  >
    Sign in with Google
  </Button>
);

const SignOut = () =>
  auth.currentUser && (
    <Button
      className="sign-out"
      onClick={() => auth.signOut()}
      variant="contained"
      color="primary"
      disableElevation
    >
      Sign Out
    </Button>
  );

function ChatRoom() {
  const bottomElement = useRef();
  const [formValue, setFormValue] = useState("");

  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(500);
  const [messages] = useCollectionData(query, { idField: "id" });

  useEffect(() => {
    bottomElement.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (e) => {
    const { uid, photoURL } = auth.currentUser;
    setFormValue("");
    messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} {...msg} />)}

        <span ref={bottomElement}></span>
      </main>

      <Form
        style={{ position: "sticky", bottom: "0", width: "100%" }}
        {...layout}
        layout="inline"
        onFinish={sendMessage}
        onChange={(e) => setFormValue(e.target.value)}
      >
        <Form.Item
          name="title"
          style={{ width: "80%", marginBottom: 0, marginRight: 0 }}
        >
          <Input placeholder="Type a message" value={formValue} allowClear />
        </Form.Item>
        <Form.Item
          /*{...tailLayout}*/ style={{
            marginBottom: 0,
            marginRight: 0,
            width: "20%",
          }}
        >
          <Button
            style={{ width: "100%" }}
            type="primary"
            htmlType="submit"
            disabled={!formValue}
          >
            Send
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

const ChatMessage = ({ text, uid, photoURL }) => {
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

export default App;
