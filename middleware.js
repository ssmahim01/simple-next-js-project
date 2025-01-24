import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const session = await getKindeServerSession(req);

  if (!session.isAuthenticated()) {
    const loginUrl = new URL("/api/auth/login", req.url);
    loginUrl.searchParams.set("post_login_redirect_url", req.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// Protect Profile route
export const config = {
  matcher: ["/login", "register", "/profile"],
};