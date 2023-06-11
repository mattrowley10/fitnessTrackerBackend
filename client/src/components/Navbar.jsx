// import React from "react";
// import { useState } from "react";
import { useNavigate } from "react-router";
// import useAuth from "../hooks/useAuth";

export default function Navbar() {
  const nav = useNavigate();
  //   const { user, token } = useAuth();
  return (
    <div className="navbar">
      <h1>Fitness Tracker</h1>
      <ul className="navlinks">
        <li>
          <button className="link" onClick={() => nav("/")}>
            Home
          </button>
        </li>

        <li>
          <button className="link" onClick={() => nav("/Profile")}>
            Profile
          </button>
        </li>

        <li>
          <button className="link" onClick={() => nav("/Routines")}>
            Routines
          </button>
        </li>
        <li>
          <button className="link" onClick={() => nav("/Activities")}>
            Activities
          </button>
        </li>
        <li>
          <button className="link" onClick={() => nav("/Login")}>
            Login
          </button>
        </li>
        <li>
          <button className="link" onClick={() => nav("/Register")}>
            Register
          </button>
        </li>
      </ul>
    </div>
  );
}
