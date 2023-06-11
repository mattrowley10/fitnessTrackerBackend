import { useState } from "react";
import { registerUser } from "../api/helpers";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Register() {
  const nav = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setLoggedIn } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await registerUser(username, password);
      console.log(result);
      if (result.success) {
        setUser(user);
        setLoggedIn(true);
        nav("/");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="register">
      <form id="registerForm" onSubmit={handleSubmit}>
        <div className="register-form">
          <h2>Register</h2>
          <br></br>
          <label name="username">Username:{""}</label>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <br></br>
          <label className="password">Password:</label>
          <input
            type="text"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button id="registerSubmit">Submit</button>
        </div>
      </form>
    </div>
  );
}
