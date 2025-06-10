import React, { useState } from "react";
import axios from "axios";

function Registration_and_Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password_hash, setPassword_hash] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/registration",
        { username, email, password_hash }
      );
      setMessage(response.data.data);
    } catch (error) {
      setMessage("Registration failed");
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        username,
        email,
        password_hash,
      });
      setMessage(response.data.data);
    } catch (error) {
      setMessage("Login failed");
    }
  };

  return (
    <>
      <div>
        <h1>Registration and Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password_hash}
          onChange={(e) => setPassword_hash(e.target.value)}
        />
        <button onClick={handleRegister}>Register</button>
        <button onClick={handleLogin}>Login</button>
        <p>{message}</p>
      </div>
    </>
  );
}

export default Registration_and_Login;
