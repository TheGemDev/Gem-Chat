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
import Header from "./components/surfaces/demo";

import ChatRoomPage from "./pages/ChatRoom";
import SignInPage from "./pages/SignIn";

function App() {
  return (
    <Router>
      <Layout>
        <Header />
        <Divider />
        <Layout.Content>
          <Switch>
            <Route path='/auth'>
              <SignInPage />
            </Route>

            <Route path='/chat'>
              <RequireAuth>
                <ChatRoomPage />
              </RequireAuth>
            </Route>

            <Route path='/'>
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
