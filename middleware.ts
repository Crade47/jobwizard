import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware(
  async (auth, req) => {
    console.log("In the middle ware");
    console.log(`is protected: ${isProtectedRoute(req)}`);
    if (isProtectedRoute(req)) await auth.protect();
  },
);

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    // Always run for API routes
    "/((?!.*\\..*|_next).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
};
