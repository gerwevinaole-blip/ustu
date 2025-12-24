import React, { useState } from "react";
import axios from "axios";

export default function OrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = () => {
    const order = {
      customer_name: name,
      phone,
      address,
      items: [],
      total: 0,
      branch_id: 1
    };
    axios.post("http://localhost:3000/api/order", order)
      .then(res => alert("Заказ создан! ID: " + res.data.order_id))
      .catch(err => console.log(err));
  };

  return (
    <div className="my-4">
      <h2 className="text-2xl font-bold mb-2">Оформить заказ</h2>
      <input placeholder="Имя" value={name} onChange={e=>setName(e.target.value)} className="border p-1 m-1"/>
      <input placeholder="Телефон" value={phone} onChange={e=>setPhone(e.target.value)} className="border p-1 m-1"/>
      <input placeholder="Адрес" value={address} onChange={e=>setAddress(e.target.value)} className="border p-1 m-1"/>
      <button onClick={handleSubmit} className="ml-2 mt-2">Заказать</button>
    </div>
  );
}
