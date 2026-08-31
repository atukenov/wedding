"use client";

import { useState } from "react";
import { WEDDING } from "@/lib/wedding";

type Who = "solo" | "duo";

export default function Rsvp() {
  const [name, setName] = useState("");
  const [who, setWho] = useState<Who | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const chip = (active: boolean) => ({
    flex: 1,
    padding: "15px 8px",
    borderRadius: 12,
    border: `1px solid ${active ? "var(--green-900)" : "transparent"}`,
    background: active ? "var(--green-900)" : "var(--paper-3)",
    color: active ? "#f3f1e9" : "rgba(23,51,40,.7)",
    font: "500 12px/1 var(--font-manrope), sans-serif",
    cursor: "pointer",
  });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !who) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), who }),
      });
      if (!res.ok) throw new Error("bad response");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  const valid = name.trim().length > 1 && who !== null;

  return (
    <section style={{ marginTop: 32, padding: "34px 24px 40px", background: "var(--paper-2)" }}>
      <div style={{ padding: "24px 20px", borderRadius: 22, background: "#fff" }}>
        <h2 className="serif" style={{ margin: 0, font: "300 28px/1.2 var(--font-cormorant), serif" }}>
          Вы придёте?
        </h2>

        {status === "done" ? (
          <div style={{ marginTop: 18, animation: "rise .5s ease both" }}>
            <div className="serif" style={{ font: "300 24px/1.3 var(--font-cormorant), serif", color: "var(--green-700)" }}>
              Ответ принят
            </div>
            <p style={{ marginTop: 8, font: "400 13px/1.6 var(--font-manrope), sans-serif", color: "rgba(23,51,40,.65)" }}>
              {name} · {who === "duo" ? "с парой" : "один(а)"}
            </p>
          </div>
        ) : (
          <form onSubmit={submit} style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 12 }}>
            <p style={{ margin: 0, font: "400 12px/1.6 var(--font-manrope), sans-serif", color: "var(--muted)" }}>
              Пожалуйста, ответьте до {WEDDING.rsvpDeadline}
            </p>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Имя и фамилия"
              aria-label="Имя и фамилия"
              style={{
                width: "100%",
                padding: "15px 16px",
                background: "var(--paper-3)",
                border: "1px solid transparent",
                borderRadius: 12,
                color: "var(--green-900)",
                font: "400 14px/1 var(--font-manrope), sans-serif",
                outline: "none",
              }}
            />
            <div style={{ display: "flex", gap: 10 }}>
              <button type="button" onClick={() => setWho("solo")} style={chip(who === "solo")} aria-pressed={who === "solo"}>
                Один(а)
              </button>
              <button type="button" onClick={() => setWho("duo")} style={chip(who === "duo")} aria-pressed={who === "duo"}>
                С парой
              </button>
            </div>
            <button
              type="submit"
              disabled={!valid || status === "sending"}
              style={{
                marginTop: 2,
                padding: 17,
                border: "none",
                borderRadius: 12,
                background: valid ? "var(--green-900)" : "rgba(23,51,40,.25)",
                color: "#f3f1e9",
                font: "600 12px/1 var(--font-manrope), sans-serif",
                letterSpacing: ".2em",
                textTransform: "uppercase",
                cursor: valid ? "pointer" : "not-allowed",
                transition: "background .2s",
              }}
            >
              {status === "sending" ? "Отправляем…" : "Подтвердить"}
            </button>
            {status === "error" && (
              <p style={{ margin: 0, font: "400 12px/1.5 var(--font-manrope), sans-serif", color: "#a3402f" }}>
                Не удалось отправить. Попробуйте ещё раз.
              </p>
            )}
          </form>
        )}
      </div>

      <div
        style={{
          marginTop: 26,
          textAlign: "center",
          font: "400 10px/1.6 var(--font-manrope), sans-serif",
          letterSpacing: ".24em",
          textTransform: "uppercase",
          color: "rgba(23,51,40,.32)",
        }}
      >
        {WEDDING.groom} &amp; {WEDDING.bride} · 2026
      </div>
    </section>
  );
}
