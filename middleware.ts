import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { getServerUser } from "./lib/auth";

const isProtectedRoute = createRouteMatcher([
  "/candidate(.*)",      // Protect /candidate and all its subroutes
  "/recruiter(.*)",      // Optional: protect another section
]);

const isPublicRoute = createRouteMatcher([
  "/sign-out",            // Allow access to signout route
  "/api/auth/clear-cookies", // Allow access to clear-cookies API
]);

export default clerkMiddleware(async (auth, req) => {
  const url = req.nextUrl;

  // Handle sign-out route - clear JWT cookie
  if (url.pathname === "/sign-out") {
    const response = NextResponse.next();
    
    // Clear the JWT cookie
    response.cookies.delete("user-token");
    
    return response;
  }

  // Allow access to public routes (like signout)
  
  // ✅ Redirect signed-in users away from `/` to `/dashboard`
  const { userId } = await auth();
  if (url.pathname === "/" && userId) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (isPublicRoute(req)) {
    return NextResponse.next();
  }
  
  const serverUser = await getServerUser();
  if (isProtectedRoute(req)) {
    console.log("UserId form Middleware", userId, serverUser);

    if (!userId || !serverUser) {
      return NextResponse.redirect(new URL("/sign-out", req.url));
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
