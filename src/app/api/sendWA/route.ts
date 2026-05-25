import { NextRequest, NextResponse } from "next/server";
import { waitUntil } from "@vercel/functions";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function POST(req: NextRequest) {
  const { phone, message, delay } = await req.json();

  if (!phone || !message) {
    return NextResponse.json(
      { success: false, message: "Missing data" },
      { status: 400 }
    );
  }

  const sendTask = async () => {
    if (delay) await new Promise((r) => setTimeout(r, delay));
    await fetch("https://api.fonnte.com/send", {
      method: "POST",
      headers: {
        Authorization: process.env.FONNTE_API_KEY!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ target: phone, message }),
    });
  };

  waitUntil(sendTask());

  return NextResponse.json({ success: true });
}