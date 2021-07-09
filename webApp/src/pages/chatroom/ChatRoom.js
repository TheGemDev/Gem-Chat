import React from "react";

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Divider,
  chakra,
  Link,
  VisuallyHidden,
} from "@chakra-ui/react";

import "../App.css";

import MessagesList from "../../components/MessagesList";
import MessageInput from "../../components/MessageInput";

const ChatRoom = () => (
  <>
    <MessagesList />
    <MessageInput />
  </>
);

export default ChatRoom;
