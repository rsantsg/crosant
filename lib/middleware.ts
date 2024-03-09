'use server'
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest, response: NextResponse) {
  const session =  request.cookies.get("session")
  //console.log('Middleware the cookie ', request.headers)

  
  console.log('\nMiddleware the response', session )

  //console.log('\nMiddleware the request', request.cookies )

  //console.log('\nMiddleware the session', request.cookies )

  //console.log('\n\nMiddleware the headers', request.headers )



  //Return to /login if don't have a session
  if (!session) {
    //console.log("from the middle ware no session ", )
    return NextResponse.redirect(new URL("/(login)", request.url));
  }

  //Call the authentication endpoint
  const responseAPI =await fetch(`${request.nextUrl.origin}/api/login`, {
    headers: {
      Cookie: `session=${session?.value}`,
    },
  });

  //Return to /login if token is not authorized
  if (responseAPI.status !== 200) {
    //console.log("from the middle ware the api status is not working")

    return NextResponse.redirect(new URL("/(login)", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/",
  ],
  //source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
