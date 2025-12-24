import React, { useEffect, useState } from "react";
import axios from "axios";
import OrderStatus from "./OrderStatus";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = () => {
    axios.get("http://localhost:3000/api/admin/orders")
      .then(res => setOrders(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Заказы</h2>
      <table className="border w-full">
        <thead>
          <tr className="border">
            <th className="border px-2">ID</th>
            <th className="border px-2">Имя</th>
            <th className="border px-2">Телефон</th>
            <th className="border px-2">Адрес</th>
            <th className="border px-2">Сумма</th>
            <th className="border px-2">Статус</th>
            <th className="border px-2">Действия</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} className="border">
              <td className="border px-2">{order.id}</td>
              <td className="border px-2">{order.customer_name}</td>
              <td className="border px-2">{order.phone}</td>
              <td className="border px-2">{order.address}</td>
              <td className="border px-2">{order.total}</td>
              <td className="border px-2">{order.status}</td>
              <td className="border px-2">
                <OrderStatus order={order} refresh={fetchOrders} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
