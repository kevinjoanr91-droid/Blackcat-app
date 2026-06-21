export default function Dashboard() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#080808",
      fontFamily: "var(--font-dm-sans)",
    }}>
      <header style={{
        borderBottom: "1px solid rgba(201,168,76,0.12)",
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <span style={{
          fontFamily: "var(--font-bebas)",
          fontSize: 20,
          letterSpacing: 4,
          color: "#f0ede8",
        }}>
          BLACK<span style={{ color: "#c9a84c" }}>CAT</span>
        </span>
        <span style={{
          fontSize: 11,
          letterSpacing: 2,
          color: "rgba(240,237,232,0.4)",
          textTransform: "uppercase",
        }}>
          Dashboard
        </span>
      </header>

      <div style={{ maxWidth: 780, margin: "0 auto", padding: "32px 24px" }}>
        <div style={{
          border: "1px solid rgba(201,168,76,0.15)",
          background: "#141414",
          padding: "24px",
          marginBottom: 24,
        }}>
          <p style={{
            fontSize: 10, letterSpacing: 3,
            textTransform: "uppercase",
            color: "#c9a84c", marginBottom: 8,
          }}>
            Conexión con Supabase
          </p>
          <p style={{
            fontSize: 13,
            color: "rgba(240,237,232,0.7)",
          }}>
            Base de datos conectada — 12 tablas creadas ✅
          </p>
        </div>
      </div>
    </main>
  )
}