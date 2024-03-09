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
    
    let {data, error}  = await supabase.from("locations").select()
    console.log('data? ', data)
    return  Response.json({body:data},{status:201})
    

  }
  catch(e){
    
    return  NextResponse.json(JSON.stringify(e), { status: 404 })

  }
 
    


} 