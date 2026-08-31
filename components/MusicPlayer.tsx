"use client";

import { useEffect, useRef, useState } from "react";
import { WEDDING } from "@/lib/wedding";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const userPausedRef = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    if (!WEDDING.music) {
      setAvailable(false);
      return;
    }

    const audio = new Audio(WEDDING.music);
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0.55;
    audioRef.current = audio;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onError = () => setAvailable(false);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("error", onError);

    const start = () => {
      if (userPausedRef.current) return;
      audio.play().catch(() => {
        /* blocked until a user gesture — the listeners below handle it */
      });
    };

    // Try immediately; browsers block audio-with-sound until the visitor
    // interacts, so also start on the first gesture anywhere on the page.
    start();

    const events = ["pointerdown", "keydown", "touchstart", "scroll"] as const;
    const kick = () => {
      start();
      events.forEach((e) => window.removeEventListener(e, kick));
    };
    events.forEach((e) => window.addEventListener(e, kick, { passive: true }));

    return () => {
      events.forEach((e) => window.removeEventListener(e, kick));
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("error", onError);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  if (!available) return null;

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      userPausedRef.current = false;
      audio.play().catch(() => {});
    } else {
      userPausedRef.current = true;
      audio.pause();
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={playing ? "Выключить музыку" : "Включить музыку"}
      aria-pressed={playing}
      title={playing ? "Выключить музыку" : "Включить музыку"}
      style={{
        position: "fixed",
        bottom: 20,
        right: "max(16px, calc(50% - 236px))",
        zIndex: 60,
        width: 44,
        height: 44,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        color: playing ? "var(--green-700)" : "var(--muted-2)",
        background: "rgba(251,250,246,.9)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1px solid rgba(23,51,40,.16)",
        boxShadow: "0 4px 16px rgba(23,51,40,.14)",
        transition: "color .2s ease",
      }}
    >
      {playing ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      )}
    </button>
  );
}
