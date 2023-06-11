import React from "react";
import { createContext, useState, useEffect } from "react";
import { getToken } from "../api/helpers";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [id, setId] = useState("");
  const [routines, setRoutines] = useState([]);
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    async function getRegistered() {
      const apiResponse = await getToken(token);
      console.log("response from /users/me", apiResponse);
    }
    if (token) {
      getRegistered();
    }
  }, [token]);
  const contextValue = {
    token,
    setToken,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
