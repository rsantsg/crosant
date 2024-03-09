
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { user },
  } = await supabase.auth.getUser()
  // if user is signed in and the current path is / redirect the user to /account
  //console.log('in here :( ', req.nextUrl.origin, " :( ", req.nextUrl.pathname)

  if (user && `${req.nextUrl.pathname}`=== `/login`) {

    return NextResponse.redirect(new URL('/', req.url))
  }
  

  // if user is not signed in and the current path is not / redirect the user to /
  //console.log('req.nextUrl.pathname = ', req.nextUrl.pathname )
  if (!user && req.nextUrl.pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return res
}

export const config = {
  matcher: ['/', '/login'],
}