import React from "react";

import { Button } from "@chakra-ui/react";
import firebase, { auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const Join: React.FC = () => (
  <Button
    colorScheme={"red"}
    bg={"red.400"}
    rounded={"full"}
    px={10}
    _hover={{
      bg: "red.500",
    }}
    size={"lg"}
    onClick={() =>
      auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    }>
    Join the House
  </Button>
);

export const SignIn = () => (
  <Button
    variant={"outline"}
    colorScheme={"red"}
    size={"lg"}
    onClick={() =>
      auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    }>
    Sign In
  </Button>
);

export const SignOut = () => {
  const [user, loading] = useAuthState(auth);
  return (
    !loading &&
    user && (
      <Button
        variant={"outline"}
        colorScheme={"red"}
        size={"lg"}
        onClick={() =>
          auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
        }>
        Sign Out
      </Button>
    )
  );
};
