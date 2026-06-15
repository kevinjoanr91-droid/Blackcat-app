export default function Dashboard() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#080808",
      fontFamily: "var(--font-dm-sans)",
    }}>
      {/* Header */}
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
          @kevinjoan1
        </span>
      </header>

      {/* Content */}
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "32px 24px" }}>

        {/* Plan activo */}
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
            Plan activo
          </p>
          <p style={{
            fontFamily: "var(--font-bebas)",
            fontSize: 28, letterSpacing: 3,
            color: "#f0ede8", margin: "0 0 4px 0",
          }}>
            Cross Compete
          </p>
          <p style={{
            fontSize: 12,
            color: "rgba(240,237,232,0.4)",
          }}>
            Vence el 15 de julio · 31 días restantes
          </p>
        </div>

        {/* WOD de hoy */}
        <div style={{
          border: "1px solid rgba(201,168,76,0.15)",
          background: "#141414",
          padding: "24px",
        }}>
          <p style={{
            fontSize: 10, letterSpacing: 3,
            textTransform: "uppercase",
            color: "#c9a84c", marginBottom: 20,
          }}>
            Pizarra de hoy
          </p>

          {/* Bloque */}
          <div style={{
            borderLeft: "2px solid #c9a84c",
            paddingLeft: 16,
            marginBottom: 20,
          }}>
            <p style={{
              fontFamily: "var(--font-bebas)",
              fontSize: 16, letterSpacing: 2,
              color: "#f0ede8", marginBottom: 8,
            }}>
              Fuerza
            </p>
            <p style={{
              fontSize: 13,
              color: "rgba(240,237,232,0.7)",
              lineHeight: 1.8,
            }}>
              Back Squat 5x5 @ 80%<br />
              Descanso 2-3 min entre series
            </p>
          </div>

          {/* Bloque 2 */}
          <div style={{
            borderLeft: "2px solid rgba(201,168,76,0.3)",
            paddingLeft: 16,
          }}>
            <p style={{
              fontFamily: "var(--font-bebas)",
              fontSize: 16, letterSpacing: 2,
              color: "#f0ede8", marginBottom: 8,
            }}>
              MetCon
            </p>
            <p style={{
              fontSize: 13,
              color: "rgba(240,237,232,0.7)",
              lineHeight: 1.8,
            }}>
              21-15-9<br />
              Thrusters 43kg<br />
              Pull-ups
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}