import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import Apps from "./components/Header";
import Start from "./pages/start/Start.js";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "../screens/Home";

ReactDOM.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,

  document.getElementById("root")
);
