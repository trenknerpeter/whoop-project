import { NextResponse, type NextRequest } from "next/server";
import { WHOOP_REFERRAL_URL } from "@/lib/site";

// Referral click-out redirect.
// Logs the click (source page) so referral interest is countable, then 302s to
// Peter's real Whoop referral URL. Swap the console.log for a real counter
// (Vercel KV / analytics event) once traffic justifies it.
export function GET(request: NextRequest) {
  const src = request.nextUrl.searchParams.get("src") ?? "unknown";
  console.log(`[referral-click] src=${src} ts=${new Date().toISOString()}`);

  return NextResponse.redirect(WHOOP_REFERRAL_URL, {
    status: 302,
    headers: { "Cache-Control": "no-store" },
  });
}
