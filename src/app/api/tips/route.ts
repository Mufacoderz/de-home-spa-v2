import { NextRequest, NextResponse } from "next/server";
import { generateTips } from "@/lib/ai/tips";

export async function POST(req: NextRequest) {
  const { keluhan } = await req.json();

  if (!keluhan) {
    return NextResponse.json(
      { success: false, message: "Keluhan tidak ada" },
      { status: 400 }
    );
  }

  const result = await generateTips(keluhan);
  console.log(result.data);
  return NextResponse.json(result);
}