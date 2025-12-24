import React, { useState } from "react";
import axios from "axios";

export default function Login({ onSuccess }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    axios.post("http://localhost:3000/api/admin/login", { login, password })
      .then(res => {
        if (res.data.success) {
          onSuccess();
        } else {
          alert("Ошибка входа");
        }
      })
      .catch(() => alert("Неверный логин или пароль"));
  };

  return (
    <div className="max-w-sm mx-auto">
      <input placeholder="Логин" value={login} onChange={e => setLogin(e.target.value)} className="border p-1 m-1 w-full"/>
      <input placeholder="Пароль" type="password" value={password} onChange={e => setPassword(e.target.value)} className="border p-1 m-1 w-full"/>
      <button onClick={handleLogin} className="ml-1 mt-2 w-full">Войти</button>
    </div>
  );
}
