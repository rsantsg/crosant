'use server'
import { auth, } from "firebase-admin";
import { customInitApp } from '../../../../lib/lib/firebase/auth';
import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// Init the Firebase SDK every time the server is called
customInitApp();

export async function POST(request: NextRequest, response: NextResponse) {
  //console.log("WERE HERE")
  const authorization = headers().get("Authorization");
  if (authorization?.startsWith("Bearer ")) {
    const idToken = authorization.split("Bearer ")[1].toString();
    
    
    console.log(idToken)
    //console.log(await auth().app)
    const decodedToken = await auth().verifyIdToken(idToken)

    if (decodedToken) {
      console.log( cookies())
      //console.log('loging route session decode')
      //Generate session cookie
      const expiresIn = 60 * 60 * 24 * 5 * 1000;
      const sessionCookie = await auth().createSessionCookie(idToken, {
        expiresIn,
      });

      const options = {
        name: "session",
        value: sessionCookie,
        maxAge:expiresIn,
       // sameSite: strict,
       httpOnly: true ,
        secure: true,
        path:'/'
      };

      //Add the cookie to the browser
      //cookies().set(options)
    

      //Add the cookie to the browser
      //console.log('loging route session cooking being set uo')
      cookies().set( options);    
      //console.log('#\n', "loging cookies ", cookies() )
       // console.log("Route: what is our cookie ", cookies().getAll())
       //return NextResponse.redirect("\44~/");
       //return NextResponse.json({}, { status: 200 });

    }
  }
  //console.log('loging route returning ')

  return NextResponse.json({}, { status: 200 });
}

export async function GET(request: NextRequest) {
    const session = cookies().get("session")?.value || "";
    //console.log("login GET: My current session ", session)
    //Validate if the cookie exist in the request
    if (!session) {
      //console.log('login GET: get loging no session')

      return NextResponse.json({ isLogged: false }, { status: 401 });
    }
  try{

  
    //Use Firebase Admin to validate the session cookie
    const decodedClaims = await auth().verifySessionCookie(session, true);
  
    if (!decodedClaims) {
      //console.log("Session decoding failed");
      return NextResponse.json({ isLogged: false }, { status: 401 });
    }
    //console.log("Session is valid");
    return NextResponse.json({ isLogged: true }, { status: 200 });
  } 
  catch(error){
    return NextResponse.json({ isLogged: false }, { status: 401 });


  }
  }
  