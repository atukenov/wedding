const SWATCHES = ["#173328", "#2f6b52", "#a9cfb8", "#fbfaf6"];

export default function DressCode() {
  return (
    <section style={{ padding: "24px 24px 0" }}>
      <div
        style={{
          padding: 22,
          border: "1px solid rgba(23,51,40,.14)",
          borderRadius: 20,
          textAlign: "center",
          background: "var(--paper-3)",
        }}
      >
        <div className="eyebrow">Дресс-код</div>
        <div className="serif" style={{ marginTop: 14, font: "300 22px/1.35 var(--font-cormorant), serif" }}>
          Вечерний · тёмно-зелёный,
          <br />
          изумруд, белый
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 18 }}>
          {SWATCHES.map((c) => (
            <span
              key={c}
              style={{
                width: 26,
                height: 26,
                borderRadius: "50%",
                background: c,
                border: c === "#fbfaf6" ? "1px solid rgba(23,51,40,.18)" : "none",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
