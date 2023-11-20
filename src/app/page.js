import Card from './component/Card'
//import Loading from './component/Loading'
import PopupForm from './component/PopForm'
//import { getServerSideProps } from 'next'
export const runtime = "edge"
import { GET } from './api/trip/route';
import {POST} from './api/trip/route'
import { AddTrip } from './actions/addTrip';




/*
const fetchTrips = async(url)=>{
    
    fetch( 'https://api.crosant.com/trip', 
    {
      method: "POST",
      credentials: "ron:SW_nvgm_U@1", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify('New York')
    }
    )

  
}
**/


//const data = [{'id':1, 'name':'New York'}, {'id':2, 'name':"End of Year Trip"}, {'id':3, 'name':'New York'}, {'id':4, 'name':"End of Year Trip"}, {'id':5, 'name':'New York'}, {'id':6, 'name':"End of Year Trip"},{'id':7, 'name':'New York'}, {'id':8 , 'name':"End of Year Trip"},{'id':7, 'name':'New York'}, {'id':8 , 'name':"End of Year Trip"}]
export default async function Page() {
  const data = await GET()
 
  
//          <PopupForm createTripHandler={createTripHandler()} name={undefined}></PopupForm>

  return (
    <main className="   float-left w-10/12   h-screen   bg-blue-500 ">
      <div type="main" className="  z-10 top-0   font-mono flex  flex-wrap overflow-y-auto">

          {data.map((info) => <Card key={info.id} pid={info.id} name={info.name}></Card> )}
          <AddTrip className="pt-10"/>


  
      </div>

    </main>
  )
}
