export const runtime = 'edge';

import { NextResponse } from "next/server";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    ANTHROPIC_API_KEY:       process.env.ANTHROPIC_API_KEY ? "SET (" + process.env.ANTHROPIC_API_KEY.slice(0,8) + "...)" : "MISSING",
    UPSTASH_REDIS_REST_URL:  process.env.UPSTASH_REDIS_REST_URL ? "SET" : "MISSING",
    UPSTASH_REDIS_REST_TOKEN:process.env.UPSTASH_REDIS_REST_TOKEN ? "SET" : "MISSING",
    GEMINI_API_KEY:          process.env.GEMINI_API_KEY ? "SET" : "MISSING",
    TELEGRAM_BOT_TOKEN:      process.env.TELEGRAM_BOT_TOKEN ? "SET" : "MISSING",
    CRON_SECRET:             process.env.CRON_SECRET ? "SET" : "MISSING",
    NODE_ENV:                process.env.NODE_ENV,
    VERCEL_ENV:              process.env.VERCEL_ENV,
  });
}
