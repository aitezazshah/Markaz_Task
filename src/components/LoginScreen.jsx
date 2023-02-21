import React from "react";
import { useState } from "react";
import "../styles/LoginScreen.css";

function LoginScreen() {
     const [username, setUsername] = useState("");
     const [password, setPassword] = useState("");
     const handleLogin = (e) => {
       e.preventDefault();
       console.log(username, password);
     };
     
  return (
    <div className="main-container">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="username_fields">
            <label className="username">Username:</label>
            <input
              type="text"
              className="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="password_fields">
            <label className="password">Password:</label>
            <input
              type="password"
              className="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login_btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;
