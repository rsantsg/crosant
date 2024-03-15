'use server'
import Link from "next/link"
//import { redirect } from 'next/navigation'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Suspense } from "react";
async function LoadData({slug}) {
  const supabase = createServerComponentClient({ cookies });
  //Uncomment for production. 
  //let {data, error}  = await supabase.from('locations').select().eq('id', params['slug'])
  //let data = []
  
  const data = [{'id':1, 'name':'New York', 'description': "LMASOSD ASDAS", 'from': 'DC ', "to":'New Yor'}, {'id':2, 'name':"End of Year Trip"}, {'id':3, 'name':'New York'}, {'id':4, 'name':"End of Year Trip"}, {'id':5, 'name':'New York'}, {'id':6, 'name':"End of Year Trip"},{'id':7, 'name':'New York'}, {'id':8 , 'name':"End of Year Trip"},{'id':7, 'name':'New York'}, {'id':8 , 'name':"End of Year Trip"}]


  return (
    <section>

      {
        //<LocationCard id={data[0].id}></LocationCard>
        data.map((location) =>
          <li               key={location.id}
>
            <Link
              href={
                {
                  pathname: `/trip/${slug}/location/${location.id}`
                  , query: {
                    name: location.name,
                    description: location.description,

                  }
                }}
              className="block pt-1 rounded-lg bg-transparent hover:bg-slate-100 px-4 py-2 text-sm font-medium text-gray-700"
            >
              {location.name}
            </Link>
          </li>
        )

      }
    </section>
  )
}
/*
function InnerNav ({data}){
  return(
    <section>
           {
              data.map((linking) => {
                <Link
                key={linking.id}
                  href={{
                    pathname: linking.pathname,
                  }}

                  className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                >
                  {linking.name}
                </Link>

              })}
    </section>
       
  )
}
**/
export default async function TripLayout({ params, children }) {


  /*
      if(data.length > 0){
          console.log('===============')
          redirect(`/trip/${params.slug}/location/${data[0].id}/?name=${data[0].name}&description=${data[0].description}`)
  
  
      }name
      **/
  const linkPath = [ {name: 'Settings',pathname:`/trip/${params.slug}/settings` },{name: 'Locations', pathname:'#'},{name:'Map',pathname:`/trip/${params.slug}/map`}, {name: '', pathname:'#'}]
  
  return (
    <section>
       <nav className="flex gap-6" aria-label="Tabs">
           
           <Link
        href={`/trip/${params.slug}/settings`}
        className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
      >
        Settings
      </Link>

      <a
        href={`/trip/${params.slug}/location`}
        className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
      >
        Locations
      </a>

      <Link
        href={`/trip/${params.slug}/map`}
        className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
      >
        Map
      </Link>

      <a
        href="#"
        className="shrink-0 rounded-lg bg-gray-100 p-2 text-sm font-medium text-gray-700"
        aria-current="page"
      >
        Finance
      </a>
        </nav>
      <div className="bg-slay-100  grid grid-cols-8 shadow-sm ">

        <div className="">
      
       

          <div className="col-auto-start col-end-2 h-screen ">
          
          </div>
        </div>
        <div className="flex     col-start-2     col-end-10">
          {children}

        </div>

      </div>

    </section>
  )
}