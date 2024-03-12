import {trip_Stops} from "../../api/trip/route"
import LocationCard from "../../component/LocationCard"
import Link from "next/link"
import { AddStop } from "../../actions/addStop"
export default async function  TripLayout({params, children }) {
    const data = await trip_Stops(params.slug)
    console.log(params.slug)
    console.log("LOCATION data")
    
    
    return (
        <section>
            <div className="bg-slay-100  grid grid-cols-8 shadow-sm ">
                
                <div className="col-auto-start col-end-2 h-screen   rounded-lg ">
                    <div className=" pt-2 flex z-10 align-baseline rounded-lg tb-2 justify-center h-10 top-0 shadow-lg">
                        Locations 
                    </div>
                
                    <div className="pt-2"> 
                        <AddStop id={params.slug}/>
                        {
                        //<LocationCard id={data[0].id}></LocationCard>
                        data.map((location)=>
                        <Link  
                        className=' p-1'
                        href={
                            {pathname:`/trip/${params.slug}/location/${location.id}`
                            ,query:{
                                name:location.name, 
                                description:location.description

                            }}}
                         key={location.id}
                        >
                            <LocationCard key={location.id} id={location.id}  name={location.name}></LocationCard>
                        </Link>
                        )
                        }
                

                    </div>
                    

                </div>
                <div className="flex  bg-blue-200   col-start-2     col-end-10">
                {children}

                </div>
                  
            </div>

        </section>
    )
  }