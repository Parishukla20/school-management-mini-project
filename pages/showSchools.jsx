import { useEffect, useState } from "react";

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    fetch("/api/getSchools")
      .then((res) => res.json())
      .then((data) => setSchools(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Schools</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px"
      }}>
        {schools.map((s) => (
          <div key={s.id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "10px" }}>
            <img src={s.image} alt={s.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <h3>{s.name}</h3>
            <p>{s.address}</p>
            <p>{s.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
