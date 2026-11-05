import { NextResponse, type NextRequest } from "next/server";
import { WHOOP_AFFILIATE_URL } from "@/lib/site";

// Affiliate click-out redirect.
// Logs the click (source page) so click-outs are countable, then 302s to
// Peter's Whoop affiliate URL. Swap the console.log for a real counter
// (Vercel KV / analytics event) once traffic justifies it.
export function GET(request: NextRequest) {
  const src = request.nextUrl.searchParams.get("src") ?? "unknown";
  console.log(`[affiliate-click] src=${src} ts=${new Date().toISOString()}`);

  return NextResponse.redirect(WHOOP_AFFILIATE_URL, {
    status: 302,
    headers: { "Cache-Control": "no-store" },
  });
}
