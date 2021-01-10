import React from "react";

import { Button } from "antd";
import firebase, { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const SignIn = () => (
  <Button
    className="sign-in"
    onClick={() => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())}
    type="primary"
  >
    Sign in with Google
  </Button>
);

export const SignOut = () => {
  const [user, loading] = useAuthState(auth);
  return (
    !loading &&
    user && (
      <Button
        className="sign-out"
        onClick={() => firebase.auth().signOut()}
        type="primary"
      >
        Sign Out
      </Button>
    )
  );
};
