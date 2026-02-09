import { NextResponse } from "next/server";

export function middleware(request) {
  const response = NextResponse.next();

  if (request.nextUrl.pathname.startsWith("/_next/static")) {
    response.headers.set(
      "Cache-Control",
      "public, max-age=31536000, immutable"
    );
  }

  if (request.nextUrl.pathname.startsWith("/_next/image")) {
    response.headers.set(
      "Cache-Control",
      "public, max-age=31536000, immutable"
    );
  }

  response.headers.set("X-DNS-Prefetch-Control", "on");
  response.headers.set("X-Content-Type-Options", "nosniff");

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
