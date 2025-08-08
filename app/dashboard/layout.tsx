import React from "react";

function Navbar() {
  return (
    <nav style={{
      background: "#1976d2",
      color: "#fff",
      padding: "1rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <div style={{ fontWeight: "bold" }}>Dashboard</div>
      <div>
        <a href="./" style={{ color: "#fff", marginRight: "1rem" }}>Profile</a>
        <a href="/logout" style={{ color: "#fff" }}>Logout</a>
      </div>
    </nav>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      </>
  );
}