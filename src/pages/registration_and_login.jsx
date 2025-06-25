import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/registration_and_login.scss";

function Registration_and_Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password_hash, setPassword_hash] = useState("");
  const [message, setMessage] = useState("");

  const [checkout, setCheckout] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/registration",
        { username, email, password_hash, role_id: 1 }
      );
      setMessage("Регистрация удалась");
      navigate("/home", { replace: true });
    } catch (error) {
      setMessage("Регистрация не удалась");
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        username,
        email,
        password_hash,
      });
      console.log("response.data", response.data);
      // здесь записывается пользователь в localStorage
      const user = { user_id: response.data.user_id, username: username };
      localStorage.setItem("user", JSON.stringify(user));
      const user_user_string = localStorage.getItem("user");
      const user_user = JSON.parse(user_user_string);
      console.log("id пользователя, который зашел", user_user.user_id.user_id);
      setMessage("Вход открыт");
      navigate("/home", { replace: true });
    } catch (error) {
      setMessage("Ошибка входа");
    }
  };

  return (
    <>
      <div className="conteiner">
        <div className="card">
          <h1>Вход</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value.trim())}
          />
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value.trim())}
          />
          <input
            type="password"
            placeholder="Password"
            value={password_hash}
            onChange={(e) => setPassword_hash(e.target.value.trim())}
          />

          <button onClick={handleLogin} className="login_in">
            Вход
          </button>

          <button onClick={handleRegister}>Регистрация</button>

          <p className="error_massage">{message}</p>
        </div>
      </div>
    </>
  );
}

export default Registration_and_Login;
