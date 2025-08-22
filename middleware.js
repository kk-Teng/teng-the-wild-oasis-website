import { auth } from "@/app/_lib/auth";
import { NextResponse } from "next/server";

// export async function middleware(request) {
//     const session = await auth()
//     if (session === null) {
//         const url = request.nextUrl.clone()
//         url.pathname = '/login'
//         return NextResponse.redirect(url)
//     }
// }

export const middleware = auth

export const config = {
    matcher: "/account/:path*"
}