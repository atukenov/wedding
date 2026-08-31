import { WEDDING } from "@/lib/wedding";

export default function Organizers() {
  return (
    <section style={{ padding: "32px 24px 0", textAlign: "center" }}>
      <div className="eyebrow">Организаторы</div>
      <div className="script" style={{ marginTop: 14, fontSize: 44, lineHeight: 1.15, color: "var(--green-700)" }}>
        {WEDDING.organizers}
      </div>
      <p style={{ marginTop: 10, font: "400 13px/1.6 var(--font-manrope), sans-serif", color: "rgba(23,51,40,.55)" }}>
        С любовью встретят каждого гостя
      </p>
    </section>
  );
}
