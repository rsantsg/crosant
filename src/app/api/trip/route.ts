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
async function getDash(userUid){
  
  return []; 
}

export async function delete_Trip(tripID){
  const credentials = btoa(process.env.PUBLIC_USER_SECRET)
  console.log(tripID)
  const url = `http://127.0.0.1:8787/trip/${tripID}`;


  const res = await fetch(url
  , {
    method: "DELETE",
    headers: {
      'Authorization': `Basic ${credentials}`,
      "Content-Type": "application/json",

    }, 

    mode: 'cors',
  });


  if (res.ok) {
    console.log("SUCCESS")
    
    return  res.ok  ;
  } else {
    return res.status
  }


}
export async function postLocation(params){
  const credentials = btoa(process.env.PUBLIC_USER_SECRET);
  const url = `http://127.0.0.1:8787/trip/${params.trip_id}/location?` +new URLSearchParams({
    name:params.name, 
    description: params?.description ?? "None"
  })
  const headers = {
    method:"POST",
    headers: {
      'Authorization': `Basic ${credentials}`,
      "Content-Type": "application/json",

    }, 

    mode: 'cors',
  }
  const res = await fetch(url, headers)
  return res.status; 



  

}
export async function postTodo( params){
  const credentials = btoa(process.env.PUBLIC_USER_SECRET);
  const url = `http://127.0.0.1:8787/trip/location/${params.location_id}/todo?` +new URLSearchParams({
    name: params.name, 
    description: params?.address ?? 'None',
    links:params?.links ??"None", 
    address:params?.address ?? "None", 
    location_id: params.location_id, 
   })
   console.log(url)
  const headers = {
    method:"POST",
    headers: {
      'Authorization': `Basic ${credentials}`,
      "Content-Type": "application/json",

    }, 

    mode: 'cors',
  }
  const res = await fetch(url  , headers)
  console.log(res.status)
  return res.status; 




}


export async function get_Todo(params){ 
  const credentials = btoa(process.env.PUBLIC_USER_SECRET);

  const url = `http://127.0.0.1:8787/trip/location/${params}/todo`;
  const headers = 
  {
    method: "GET",
    headers: {
      'Authorization': `Basic ${credentials}`,

    }, 
    next: {tags:[`L${params}`]} 


  }
    const res=  await fetch(url,  {
      method: "GET",
      headers: {
        'Authorization': `Basic ${credentials}`,
      }, 
      cache: 'no-store'
    });
    if(res.ok){
      const text = await res.text(); // Await the response text


      return JSON.parse(text)
    }
  
 

}
export async function get_Stop(params){
  const credentials = btoa(process.env.PUBLIC_USER_SECRET);
  const url = `http://127.0.0.1:8787/trip/location/${params}`;
  const headers = 
  {
    method: "GET",
    headers: {
      'Authorization': `Basic ${credentials}`,
      "Content-Type": "application/json",

    }, 

    mode: 'cors',
  }
  try{
    const res=  await fetch(url, headers )
    if(res.ok){
      const text = await res.text(); // Await the response text


      return JSON.parse(text)
    }
  }
  catch(error)  {
    return 
  }
  

} 
 export async function trip_Stops(params){
  const credentials = btoa(process.env.PUBLIC_USER_SECRET);

  const url = `http://127.0.0.1:8787/trip/${params}/locations`;
  const headers = 
  {
    method: "GET",
    headers: {
      'Authorization': `Basic ${credentials}`,
      "Content-Type": "application/json",

    }, 

    mode: 'cors',
  }
  try{
    const res=  await fetch(url, headers )
    if(res.ok){
      const text = await res.text(); // Await the response text


      return JSON.parse(text)
    }
  }
  catch(error)  {
    return error 
  }

 }
