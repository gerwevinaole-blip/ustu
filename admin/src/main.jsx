import React, { useState } from "react";
import Login from "./components/Login";
import Orders from "./components/Orders";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Админка Устукана</h1>
      {!loggedIn ? (
        <Login onSuccess={() => setLoggedIn(true)} />
      ) : (
        <Orders />
      )}
    </div>
  );
}
