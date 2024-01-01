import {trip_Stops} from "../../api/trip/route"
import LocationCard from "../../component/LocationCard"
import Link from "next/link"
import { AddStop } from "../../actions/addStop"
import { get_Stop } from "../../api/trip/route"
import { redirect } from 'next/navigation'

export default async function  TripLayout({params, children }) {
    const data = await trip_Stops(params.slug)
    console.log(data)
    console.log("LOCATION data")

    /**
     <!--
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
-->

<div class="overflow-x-auto">
  <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
    <thead class="ltr:text-left rtl:text-right">
      <tr>
        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date of Birth</th>
        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Role</th>
        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Salary</th>
        <th class="px-4 py-2"></th>
      </tr>
    </thead>

    <tbody class="divide-y divide-gray-200">
      <tr>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">John Doe</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">Web Developer</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">$120,000</td>
        <td class="whitespace-nowrap px-4 py-2">
          <a
            href="#"
            class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            View
          </a>
        </td>
      </tr>

      <tr>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Jane Doe</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">Web Designer</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">$100,000</td>
        <td class="whitespace-nowrap px-4 py-2">
          <a
            href="#"
            class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            View
          </a>
        </td>
      </tr>

      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Gary Barlow</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Singer</td>
        <td clasName="whitespace-nowrap px-4 py-2 text-gray-700">$20,000</td>
        <td className="whitespace-nowrap px-4 py-2">
          <a
            href="#"
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            View
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</div>

     */


/*
    if(data.length > 0){
        console.log('===============')
        redirect(`/trip/${params.slug}/location/${data[0].id}/?name=${data[0].name}&description=${data[0].description}`)


    }
    **/ 
    return (
        <section>
            <div className="bg-slay-100  grid grid-cols-8 shadow-sm ">
                
                <div className="col-auto-start col-end-2 h-screen ">
                    <Link href={`/trip/${params.slug}`} className=" pt-2 flex z-10 align-baseline tb-2 justify-center h-10  bg-inherit border top-0 shadow-lg">
                        Locations 
                    </Link> 
                    
                    <div className=""> 
                        <AddStop id={params.slug}/>
                        <ul class="space-y-1">

                        {
                        //<LocationCard id={data[0].id}></LocationCard>
                        data.map((location)=>
                        <li>
                        <Link  
                        className='  pt-1'
                        href={
                            {pathname:`/trip/${params.slug}/location/${location.id}`
                            ,query:{
                                name:location.name, 
                                description:location.description,

                            }}}
                         key={location.id}
                         className="block  rounded-lg bg-transparent hover:bg-slate-100 px-4 py-2 text-sm font-medium text-gray-700"
                        >
                          {location.name}
                        </Link>
                        </li>
                        )
                      
                        }
                        </ul>
                        
                       
                

                    </div>
                    

                </div>
                <div className="flex  bg-blue-200   col-start-2     col-end-10">
                {children}

                </div>
                  
            </div>

        </section>
    )
  }