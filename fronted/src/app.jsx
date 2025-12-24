import React from "react";
import Menu from "./components/Menu";
import Branches from "./components/Branches";
import OrderForm from "./components/OrderForm";

export default function App() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">Устукан</h1>
      <Branches />
      <Menu />
      <OrderForm />
    </div>
  );
}
