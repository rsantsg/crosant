export const runtime = 'edge' 
import {get_Todo, get_Stop} from "../src/app/api/trip/route"
import LocationCard from "../src/app/component/LocationCard"


export default async function Page({params}) {
  const data = await get_Stop(params.slug)
  
  console.log(data)

  /*
     const data = await fetchData(params.slug)
     if(data.length === 0 ){
      return <div> NO Locations/Stop</div>
     }
     **/


     return(
      <div className="background-slay-100 grid grid-cols-4 shadow-sm ">
        <div className="grid-span-1 h-screen   border border-black ">
          <div className=" pt-2 flex z-10 align-baseline justify-center h-10 top-0 shadow-lg">
            Locations 
          </div>
          
          <div> 
            {
              //<LocationCard id={data[0].id}></LocationCard>
            }

          </div>

        </div>
      
      
       </div>
     ) 
}
