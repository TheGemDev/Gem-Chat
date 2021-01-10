import React from "react";

import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Redirect } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  return loading ? null : user ? children : <Redirect to="/auth" />;
};

export default RequireAuth;
