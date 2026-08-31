import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: Request) {
  let body: { name?: string; who?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad json" }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const who = body.who === "duo" ? "с парой" : "один(а)";
  if (name.length < 2 || name.length > 80) {
    return NextResponse.json({ ok: false, error: "bad name" }, { status: 400 });
  }

  const text = `Новый ответ на приглашение:\n${name} — ${who}`;

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (token && chatId) {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });
    if (!res.ok) {
      return NextResponse.json({ ok: false, error: "delivery failed" }, { status: 502 });
    }
  } else {
    console.log("[RSVP]", text);
  }

  return NextResponse.json({ ok: true });
}
