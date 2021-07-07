import React from "react";


import { Join, SignIn } from "../../components/authbutton/Authbutton";
import { auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Redirect } from "react-router-dom";

const SignInPage: React.FC = () => {
  const [user] = useAuthState(auth);
  return user !== null ? (
    <Redirect to='/chat' />
  ) : (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}>
      <form>
        <p>Hello! Please sign in</p>
        <SignIn />
      </form>
    </div>
  );
};

export default SignInPage;
