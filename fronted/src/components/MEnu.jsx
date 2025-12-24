import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Menu() {
  const [menu, setMenu] = useState([]);
  const branchId = 1; // пока фиксируем первый филиал

  useEffect(() => {
    axios.get(`http://localhost:3000/api/menu/${branchId}`)
      .then(res => setMenu(res.data))
      .catch(err => console.log(err));
  }, [branchId]);

  return (
    <div className="my-4">
      <h2 className="text-2xl font-bold mb-2">Меню</h2>
      <ul>
        {menu.map(item => (
          <li key={item.id} className="mb-1">{item.name} — {item.price} сом</li>
        ))}
      </ul>
    </div>
  );
}
