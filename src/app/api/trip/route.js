
export async function GET() {
    const credentials = btoa(process.env.PUBLIC_USER_SECRET);
    const url = 'http://127.0.0.1:8787/trip';

    const res = await fetch(url, {
      method:"GET",
      headers: {
        'Authorization': `Basic ${credentials}`,
      }, 
      cache: 'force-cache'
    });
  
    const text = await res.text(); // Await the response text
    console.log(text);
  
    if (res.ok) {
      const repo = JSON.parse(text);
      console.log(repo)
      
      return  repo  ;
    } else {
      return [ ]
    }


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
    description: params?.description 
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
    description:(params?.address) ? (params?.address):('None') ,
    links:params?.links ? (params?.links):("None"), 
    address:params?.address ? (params?.address):("None"), 
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
  if(res.ok){
    return res.status; 
  }
  return res.status; 




}

export async function POST(tripName) {

  
  
  

  const credentials = btoa(process.env.PUBLIC_USER_SECRET);

    const url = 'http://127.0.0.1:8787/trip?';


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
