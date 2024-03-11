'use server'
import { NextRequest, NextResponse } from "next/server";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "../../lib/database.type";
import { cookies } from 'next/headers'

import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
export async function GET(request: NextRequest) {
  const cookieStore = cookies()
  console.log('cookie', cookieStore)
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
  //const supabase = createServerComponentClient({cookies });

  try{
    
    let {data, error}  = await supabase.from("trips").select()
    console.log('data? ', data)
    return  Response.json({body:data},{status:201})
    

  }
  catch(e){
    
    return  NextResponse.json(JSON.stringify(e), { status: 404 })

  }
 
    


} 
export async function POST(tripName) {

  
  
  

  const credentials = btoa(process.env.PUBLIC_USER_SECRET);
  return  NextResponse.json(JSON.stringify("ERRO"), { status: 404 })

   /* const url = 'http://127.0.0.1:8787/trip?';


          const res = await fetch(url+ new URLSearchParams({
          name: tripName
      })
        , {
          method: "POST",
          headers: {
            'Authorization': `Basic ${credentials}`,
            "Content-Type": "application/json",
  
          }, 
  
          mode: 'cors',
          next:{ 
            tags:['trip']
          }
        });
  
  
        if (res.ok) {
              const text = await res.text(); 

          return JSON.parse(text)  ;
        } else {
          return res.status
        }
        **/
 }







