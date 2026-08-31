"use client";

import { useEffect, useState } from "react";
import { WEDDING } from "@/lib/wedding";

const pad = (n: number) => String(n).padStart(2, "0");

function parts(ms: number) {
  const d = Math.max(0, ms);
  return {
    dd: String(Math.floor(d / 86400000)),
    hh: pad(Math.floor(d / 3600000) % 24),
    mm: pad(Math.floor(d / 60000) % 60),
    ss: pad(Math.floor(d / 1000) % 60),
  };
}

export default function Countdown() {
  const target = WEDDING.date.getTime();
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setLeft(target - Date.now());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  const p = parts(left ?? 0);
  const cells: [string, string][] = [
    [p.dd, "дней"],
    [p.hh, "часов"],
    [p.mm, "минут"],
    [p.ss, "секунд"],
  ];

  return (
    <section style={{ padding: "0 24px" }}>
      <div className="eyebrow" style={{ textAlign: "center" }}>
        До торжества осталось
      </div>
      <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
        {cells.map(([value, label]) => (
          <div
            key={label}
            style={{
              flex: 1,
              textAlign: "center",
              padding: "15px 4px",
              border: "1px solid rgba(23,51,40,.16)",
              borderRadius: 14,
            }}
          >
            <div
              className="serif"
              style={{ font: "300 30px/1 var(--font-cormorant), serif", color: "var(--green-700)", fontVariantNumeric: "tabular-nums" }}
            >
              {left === null ? "—" : value}
            </div>
            <div style={{ marginTop: 6, font: "400 9px/1 var(--font-manrope), sans-serif", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--muted-2)" }}>
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
