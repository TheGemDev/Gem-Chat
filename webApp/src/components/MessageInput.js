import React, { useState } from "react";

import { Form, Input } from "antd";
import { TextField, Button, IconButton, makeStyles } from "@material-ui/core";
import firebase, { auth, firestore } from "../utils/firebase";
import { SendOutlined } from "@ant-design/icons";
import SendIcon from "@material-ui/icons/Send";
import { Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));
const { TextArea } = Input;
const MessageInput = () =>
{
  
  const classes = useStyles();

  const [message, setMessage] = useState("");
  const messagesRef = firestore.collection("messages");
  const sendMessage = () => {
    setMessage("");
    const { uid, photoURL, displayName, email } = auth.currentUser;
    messagesRef.add({
      text: message,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      displayName,
      photoURL,
      email,
    });
  };

  return (
    <Form
      style={{ position: "sticky", bottom: "0", width: "100%" }}
      layout='inline'
      onFinish={sendMessage}>
      <Form.Item
        name='message'
      //style={{ width: "80%", marginBottom: 0, marginRight: 0 }}
      >
        <TextField
          multiline
          rowsMax={3}
          variant='outlined'
          placeholder='Type a message'
          value={message}
          allowClear
          labelWidth={60}
          className={ classes.margin }
          onChange={(e) => setMessage(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        style={{
          marginBottom: 0,
          marginRight: 0,
          width: "20%",
        }}>
        <IconButton
          color='primary'
          style={{}}
          htmlType='submit'
          disabled={!message}>
          <SendIcon />
        </IconButton>
      </Form.Item>
    </Form>
  );
};

export default MessageInput;
