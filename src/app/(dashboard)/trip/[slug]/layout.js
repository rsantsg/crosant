'use server'
//import {trip_Stops} from "../../api/trip/route"
import Link from "next/link"
import { AddStop } from "../../../actions/addStop"
//import { get_Stop } from "../../api/trip/route"
//import { redirect } from 'next/navigation'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Suspense } from "react";
async function LoadData() {
  const supabase = createServerComponentClient({ cookies });
  //Uncomment for production. 
  //let {data, error}  = await supabase.from('locations').select().eq('id', params['slug'])
  let data = []


  return (
    <section>

      {
        //<LocationCard id={data[0].id}></LocationCard>
        data.map((location) =>
          <li>
            <Link
              className='  pt-1'
              href={
                {
                  pathname: `/trip/${params.slug}/location/${location.id}`
                  , query: {
                    name: location.name,
                    description: location.description,

                  }
                }}
              key={location.id}
              className="block  rounded-lg bg-transparent hover:bg-slate-100 px-4 py-2 text-sm font-medium text-gray-700"
            >
              {location.name}
            </Link>
          </li>
        )

      }
    </section>
  )
}
function InnerNav ({data}){
  return(
    <section>
           {
              data.map((linking) => {
                <Link
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
             <Link href={`/trip/${params.slug}`} className=" pt-2  z-10 align-baseline w-100 justify-center h-10  bg-inherit border top-0 shadow-lg">
            Locations
          </Link>
           <Link
        href={`/trip/${params.slug}/settings`}
        className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
      >
        Settings
      </Link>

      <a
        href="#"
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
            <AddStop id={params.slug} />
            <ul class="space-y-1">
              <Suspense>
                <LoadData />
              </Suspense>

            </ul>
          </div>
        </div>
        <div className="flex     col-start-2     col-end-10">
          {children}

        </div>

      </div>

    </section>
  )
}