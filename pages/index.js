import React from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "80px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f5f5",
        height: "100vh",
        paddingTop: "100px",
      }}
    >
      <h1 style={{ color: "#222" }}>🎓 Welcome to My School Project</h1>
      <p style={{ color: "#555", fontSize: "18px" }}>
        Manage your schools easily with the options below.
      </p>

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {/* Add School Button */}
        <button
          onClick={() => router.push("/addSchool")}
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            padding: "12px 25px",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          ➕ Add School
        </button>

        {/* Show School Button */}
        <button
          onClick={() => router.push("/showSchools")}
          style={{
            backgroundColor: "#2196F3",
            color: "white",
            border: "none",
            padding: "12px 25px",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          📋 Show Schools
        </button>
      </div>
    </div>
  );
}
