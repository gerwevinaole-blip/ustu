import React from "react";
import axios from "axios";

export default function OrderStatus({ order, refresh }) {
  const updateStatus = (status) => {
    axios.post("http://localhost:3000/api/admin/order/status", { id: order.id, status })
      .then(() => refresh())
      .catch(err => console.log(err));
  };

  return (
    <div className="flex gap-1">
      <button onClick={() => updateStatus("готовится")} className="bg-yellow-500 px-2 py-1 text-white rounded">Готовится</button>
      <button onClick={() => updateStatus("доставляется")} className="bg-blue-500 px-2 py-1 text-white rounded">Доставляется</button>
      <button onClick={() => updateStatus("завершён")} className="bg-green-500 px-2 py-1 text-white rounded">Завершён</button>
    </div>
  );
}
