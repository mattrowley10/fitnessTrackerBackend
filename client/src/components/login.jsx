import { useState } from "react";
import "../App.css";
import useAuth from "../hooks/useAuth";
import { loginUser } from "../api/helpers";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await loginUser(username, password);
      console.log("Result in component: ", result);
      setToken(result.data.token);
      localStorage.setItem("token", result.data.token);
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
