import React from "react";

import { Button } from "@material-ui/core";
import firebase, { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const SignIn = () => (
  <Button
    className='sign-in'
    onClick={() => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())}
    variant='outlined'
    color='primary'>
    Sign in with Google
  </Button>
);

export const SignOut = () => {
  const [user, loading] = useAuthState(auth);
  return (
    !loading &&
    user && (
      <Button
        className='sign-out'
        onClick={() => firebase.auth().signOut()}
        variant='outlined'
        color='primary'>
        Sign Out
      </Button>
    )
  );
};
