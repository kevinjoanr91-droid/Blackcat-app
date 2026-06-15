export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#080808",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "sans-serif",
    }}>
      <div style={{
        width: 40,
        height: 40,
        background: "#c9a84c",
        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        marginBottom: 24,
      }} />
      <h1 style={{
        fontSize: 48,
        letterSpacing: 8,
        color: "#f0ede8",
        fontWeight: 900,
        margin: 0,
      }}>
        BLACK<span style={{ color: "#c9a84c" }}>CAT</span>
      </h1>
      <p style={{
        color: "rgba(240,237,232,0.4)",
        letterSpacing: 4,
        fontSize: 11,
        marginTop: 12,
        textTransform: "uppercase",
      }}>
        Forja tu límite
      </p>
    </main>
  );
}