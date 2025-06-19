import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",      // Protect /dashboard and its subroutes
  "/recruiter(.*)",      // Optional: protect another section
]);

export default clerkMiddleware(async (auth, req) => {

  const { userId } = await auth();
   const url = req.nextUrl;


   // ✅ Redirect signed-in users away from `/` to `/dashboard`

  if (url.pathname === "/" && userId) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (isProtectedRoute(req)) {
    console.log("UserId form Middleware", userId);
    if (!userId) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  // Otherwise continue
  return NextResponse.next();
});

export const config = {
  matcher: [
    // Always run on these routes
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
