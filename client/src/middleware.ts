import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const privatePaths = ["/home/me", "/home/products/checkout"];
const AdminprivatePaths = ["/admin", "/admin/products"];
const authPaths = ["/home/login", "/home/register"];
const adminPaths = ["/admin/login"];
const productEditRegex = /^\/products\/\d+\/edit$/;


// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionToken = request.cookies.get("sessionToken")?.value;
  // Chưa đăng nhập thì không cho vào private paths
  if (privatePaths.some((path) => pathname.startsWith(path)) && !sessionToken) {
    return NextResponse.redirect(new URL("/home/login", request.url));
  }
  // Chưa đăng nhập thì không cho vào private paths
  if (privatePaths.some((path) => pathname.startsWith(path)) && !sessionToken) {
    return NextResponse.redirect(new URL("/home/login", request.url));
  }
  // Đăng nhập rồi thì không cho vào login/register nữa
  if (authPaths.some((path) => pathname.startsWith(path)) && sessionToken) {
    return NextResponse.redirect(new URL("/home/me", request.url));
  }
  if (pathname.match(productEditRegex) && !sessionToken) {
    return NextResponse.redirect(new URL("/home/login", request.url));
  }
  
  // Chưa đăng nhập admin thì không cho vào admin private paths
  if (
    AdminprivatePaths.some((path) => pathname.startsWith(path)) &&
    !sessionToken
  ) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }
  //Đăng nhập rồi thì không cho vào login/register nữa
  if (adminPaths.some((path) => pathname.startsWith(path)) && sessionToken) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }
  if (pathname.match(productEditRegex) && !sessionToken) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }
  if (adminPaths.some((path) => pathname.startsWith(path)) && sessionToken) {
    return NextResponse.redirect(new URL("/admin/products", request.url));
  }
  if (pathname.match(productEditRegex) && !sessionToken) {
    return NextResponse.redirect(new URL("/admin/products", request.url));
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/home/me",
    "/home/login",
    "/home/register",
    "/products/:path*",
    "/admin",
    "/admin/products",
    "/checkout/:path*",
  ],
};
