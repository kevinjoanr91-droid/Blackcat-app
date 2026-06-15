export default function Login() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#080808",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-dm-sans)",
    }}>
      <div style={{
        width: 32,
        height: 32,
        background: "#c9a84c",
        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        marginBottom: 20,
      }} />
      <h1 style={{
        fontFamily: "var(--font-bebas)",
        fontSize: 32,
        letterSpacing: 6,
        color: "#f0ede8",
        margin: "0 0 32px 0",
      }}>
        BLACK<span style={{ color: "#c9a84c" }}>CAT</span>
      </h1>

      <div style={{
        width: "100%",
        maxWidth: 360,
        padding: "32px",
        border: "1px solid rgba(201,168,76,0.15)",
        background: "#141414",
      }}>
        <p style={{
          fontSize: 10,
          letterSpacing: 3,
          textTransform: "uppercase",
          color: "#c9a84c",
          marginBottom: 24,
          textAlign: "center",
        }}>
          Iniciar sesión
        </p>

        <div style={{ marginBottom: 16 }}>
          <input
            type="email"
            placeholder="Correo electrónico"
            style={{
              width: "100%",
              background: "#080808",
              border: "1px solid rgba(201,168,76,0.15)",
              color: "#f0ede8",
              padding: "12px 16px",
              fontSize: 13,
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ marginBottom: 24 }}>
          <input
            type="password"
            placeholder="Contraseña"
            style={{
              width: "100%",
              background: "#080808",
              border: "1px solid rgba(201,168,76,0.15)",
              color: "#f0ede8",
              padding: "12px 16px",
              fontSize: 13,
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        <button style={{
          width: "100%",
          background: "#c9a84c",
          color: "#080808",
          border: "none",
          padding: "14px",
          fontSize: 11,
          letterSpacing: 3,
          textTransform: "uppercase",
          fontWeight: 600,
          cursor: "pointer",
          fontFamily: "var(--font-dm-sans)",
        }}>
          Entrar
        </button>

        <p style={{
          textAlign: "center",
          fontSize: 11,
          color: "rgba(240,237,232,0.3)",
          marginTop: 20,
          letterSpacing: 1,
        }}>
          ¿No tienes cuenta?{" "}
          <span style={{ color: "#c9a84c", cursor: "pointer" }}>
            Regístrate
          </span>
        </p>
      </div>
    </main>
  );
}