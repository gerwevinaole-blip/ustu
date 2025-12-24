import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Branches() {
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/branches")
      .then(res => setBranches(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="my-4">
      <h2 className="text-2xl font-bold mb-2">Филиалы</h2>
      <ul>
        {branches.map(b => (
          <li key={b.id}>{b.city} — {b.address} — {b.phone}</li>
        ))}
      </ul>
    </div>
  );
}
