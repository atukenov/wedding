import { WEDDING } from "@/lib/wedding";

export default function Hero() {
  return (
    <section style={{ padding: "34px 24px 30px", textAlign: "center" }}>
      <div style={{ position: "relative", margin: "0 auto", width: 262, height: 348 }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            border: "1px solid rgba(23,51,40,.18)",
            borderRadius: "131px 131px 18px 18px",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 12,
            borderRadius: "119px 119px 12px 12px",
            overflow: "hidden",
            background: "linear-gradient(165deg,#e3ebe4,#f4f2ec)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 14,
          }}
        >
          {WEDDING.heroVideo ? (
            <video
              src={WEDDING.heroVideo}
              poster={WEDDING.heroPoster || undefined}
              autoPlay
              muted
              loop
              playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(100deg,transparent 35%,rgba(255,255,255,.75) 50%,transparent 65%)",
                  backgroundSize: "220% 100%",
                  animation: "wipe 4.5s linear infinite",
                }}
              />
              <div
                style={{
                  position: "relative",
                  width: 46,
                  height: 46,
                  borderRadius: "50%",
                  border: "1px solid rgba(23,51,40,.28)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: 0,
                    height: 0,
                    marginLeft: 4,
                    borderLeft: "12px solid rgba(23,51,40,.45)",
                    borderTop: "8px solid transparent",
                    borderBottom: "8px solid transparent",
                  }}
                />
              </div>
              <div
                style={{
                  position: "relative",
                  font: "400 9px/1.8 ui-monospace,Menlo,monospace",
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  color: "rgba(23,51,40,.5)",
                  maxWidth: 150,
                }}
              >
                видео 9:16
                <br />
                положите файл в public/
                <br />
                и укажите путь в lib/wedding.ts
              </div>
            </>
          )}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: -8,
            left: -14,
            width: 54,
            height: 54,
            borderRadius: "0 50% 0 50%",
            background: "var(--green-700)",
            opacity: 0.16,
            animation: "drift 9s ease-in-out infinite alternate",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 6,
            right: -16,
            width: 38,
            height: 38,
            borderRadius: "0 50% 0 50%",
            background: "var(--green-700)",
            opacity: 0.14,
            animation: "drift 11s ease-in-out infinite alternate-reverse",
          }}
        />
      </div>

      <h1 className="serif" style={{ margin: "30px 0 0", font: "300 56px/1 var(--font-cormorant), serif" }}>
        {WEDDING.groom}
      </h1>
      <div className="script" style={{ margin: "2px 0", fontSize: 28, lineHeight: 1, color: "var(--green-700)" }}>
        и
      </div>
      <div className="serif" style={{ font: "300 56px/1 var(--font-cormorant), serif" }}>
        {WEDDING.bride}
      </div>
      <p style={{ margin: "20px auto 0", maxWidth: 280, font: "400 13px/1.7 var(--font-manrope), sans-serif", color: "var(--muted)", textWrap: "pretty" }}>
        Дорогие друзья и близкие! Мы будем счастливы разделить с вами самый важный день нашей жизни.
      </p>
    </section>
  );
}
