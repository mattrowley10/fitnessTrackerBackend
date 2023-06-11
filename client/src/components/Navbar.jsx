// import React from "react";
// import { useState } from "react";
import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import { logout } from "../api/helpers";

export default function Navbar() {
  const nav = useNavigate();
  const { loggedIn } = useAuth();
  async function handleLogout(e) {
    e.preventDefault();
    window.alert("You are Logged Out!");
    window.location.reload(false);
    const result = await logout();
    console.log(result);
  }
  return (
    <div className="navbar">
      <h1>Fitness Tracker</h1>
      <ul className="navlinks">
        <li>
          <button className="link" onClick={() => nav("/")}>
            Home
          </button>
        </li>
        {loggedIn && (
          <li>
            <button className="link" onClick={() => nav("/Profile")}>
              Profile
            </button>
          </li>
        )}
        {loggedIn && (
          <li>
            <button className="link" onClick={() => nav("/Routines")}>
              Routines
            </button>
          </li>
        )}
        {loggedIn && (
          <li>
            <button className="link" onClick={() => nav("/Activities")}>
              Activities
            </button>
          </li>
        )}
        {loggedIn && (
          <li>
            <button className="link" onClick={handleLogout}>
              Logout
            </button>
          </li>
        )}
        {!loggedIn && (
          <li>
            <button className="link" onClick={() => nav("/Login")}>
              Login
            </button>
          </li>
        )}
        {!loggedIn && (
          <li>
            <button className="link" onClick={() => nav("/Register")}>
              Register
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}
