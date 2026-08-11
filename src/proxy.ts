import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SITE_URL } from "@/lib/site";

/**
 * In production, send any *.vercel.app hit to the canonical domain so
 * shared links and crawlers land on feigeworks.com — not a Vercel URL.
 * Preview deployments are left alone so PR review still works.
 */
export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const isVercelHost = host.endsWith(".vercel.app");
  const isProduction = process.env.VERCEL_ENV === "production";

  if (isProduction && isVercelHost) {
    const destination = new URL(
      request.nextUrl.pathname + request.nextUrl.search,
      SITE_URL,
    );
    return NextResponse.redirect(destination, 308);
  }

  return NextResponse.next();
}

export const proxyConfig = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon|apple-icon|opengraph-image|brand/).*)",
  ],
};
