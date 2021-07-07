import React from "react";
import "./App.css";

import { Layout, Divider } from "antd";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import RequireAuth from "./utils/RequireAuth";
//import Header from "./components/surfaces/demo";

import ChatRoom from "./pages/chatroom/ChatRoom";
//import SignInPage from "./pages/SignIn";
import Start from "./pages/start/Start";

function App() {
  return (
    <Router>
      <Layout>
        {/*<Header />*/}
        <Divider />
        <Layout.Content>
          <Switch>
            <Route path="/auth">
              <ChatRoom />
            </Route>

            <Route path="/chat">
              <RequireAuth>
                <ChatRoom />
              </RequireAuth>
            </Route>

            <Route path="/">
              <Redirect
                to={{
                  pathname: "/chat",
                }}
              />
            </Route>
          </Switch>
        </Layout.Content>
      </Layout>
    </Router>
  );
}

export default App;
