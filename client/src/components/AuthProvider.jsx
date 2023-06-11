import React from "react";
import { createContext, useState, useEffect } from "react";
import { getMe } from "../api/helpers";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ id: null, username: "Guest" });
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    async function fetchMe() {
      try {
        const { user } = await getMe();
        setUser(user);
        setLoggedIn(true);
      } catch (error) {
        setUser({ username: "Guest" });
      }
    }
    fetchMe();
  }, [loggedIn]);
  const contextValue = {
    user,
    setUser,
    loggedIn,
    setLoggedIn,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
