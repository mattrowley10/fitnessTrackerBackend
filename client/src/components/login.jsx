import { useState } from "react";
import "../App.css";
import useAuth from "../hooks/useAuth";
import { loginUser } from "../api/helpers";
import { useNavigate } from "react-router";

export default function Login() {
  const nav = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, setLoggedIn } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await loginUser(username, password);
      console.log("Result in component: ", result);
      if (result.success) {
        setUser(result.data);
        setLoggedIn(true);
        nav("/");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div className="login-form">
          <h2 className="login-header">Login</h2>
          <br></br>
          <label name="username">Username:</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br></br>
          <br></br>
          <label className="password">Password:</label>
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
