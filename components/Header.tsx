import { WEDDING } from "@/lib/wedding";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 5,
        background: "rgba(251,250,246,.86)",
        backdropFilter: "blur(10px)",
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid rgba(23,51,40,.08)",
      }}
    >
      <span className="script" style={{ fontSize: 22, lineHeight: 1 }}>
        {WEDDING.groom} &amp; {WEDDING.bride}
      </span>
      <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: ".22em", color: "rgba(23,51,40,.5)" }}>
        24.10.26
      </span>
    </header>
  );
}
