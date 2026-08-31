import { WEDDING } from "@/lib/wedding";

function Card({ icon, label, title, sub }: { icon: React.ReactNode; label: string; title: string; sub: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 16,
        alignItems: "flex-start",
        padding: 20,
        border: "1px solid var(--line)",
        borderRadius: 20,
        background: "#fff",
      }}
    >
      <div
        style={{
          flex: "none",
          width: 44,
          height: 44,
          borderRadius: "50%",
          background: "var(--green-50)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </div>
      <div>
        <div style={{ font: "500 11px/1 var(--font-manrope), sans-serif", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--muted-2)" }}>
          {label}
        </div>
        <div className="serif" style={{ marginTop: 7, font: "300 23px/1.2 var(--font-cormorant), serif" }}>
          {title}
        </div>
        <div style={{ marginTop: 3, font: "400 13px/1.5 var(--font-manrope), sans-serif", color: "var(--muted)" }}>{sub}</div>
      </div>
    </div>
  );
}

export default function Details() {
  return (
    <section style={{ padding: "30px 24px 0", display: "flex", flexDirection: "column", gap: 14 }}>
      <Card
        icon={<span className="serif" style={{ font: "300 19px/1 var(--font-cormorant), serif", color: "var(--green-700)" }}>24</span>}
        label="Дата"
        title={WEDDING.dateLabel}
        sub={WEDDING.dayLabel}
      />
      <Card
        icon={
          <span
            style={{
              width: 12,
              height: 12,
              border: "2px solid var(--green-700)",
              borderRadius: "50% 50% 50% 0",
              transform: "rotate(-45deg)",
            }}
          />
        }
        label="Место"
        title={WEDDING.venue}
        sub={
          WEDDING.mapUrl ? (
            <a href={WEDDING.mapUrl} target="_blank" rel="noreferrer">
              {WEDDING.address}
            </a>
          ) : (
            WEDDING.address
          )
        }
      />
    </section>
  );
}
