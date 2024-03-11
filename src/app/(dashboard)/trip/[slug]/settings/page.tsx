'use server'
//import { DeleteForm } from "../../../actions/deleteTrip"
//import {useState, useEffect} from 'react'
import { PiPencilCircle } from "react-icons/pi";
import { DeleteColumn } from '../../../../actions/deleteColumn';
import { getTrip } from '../../../../lib/supabaseClient';
import DisplaySetting from "./displayData";
import { Suspense } from "react";
export default  async function page(params) {
      let dat =  await getTrip(params.params.slug)
      console.log(dat['data'][0])
      const tripInfo = dat['data'][0]

 /** 
    const [tripInfo, setTripInfo] = useState({
      name:params.searchParams.name, 
      description: params.searchParams.description, 
      from: params.searchParams.from, 
      to: params.searchParams.to

    }) 

  const dataHandler = async ()=>{
    "use server"
     await getTrip()

  }
   
    

  const [tempInfo , setTempInfo] =  useState({
      name:params.searchParams.name, 
      description: params.searchParams.description, 
      from: params.searchParams.from, 
      to: params.searchParams.to

    })
  const [edit,setEdit] = useState(false)

*/
  
console.log(params)
  return (
  <>
  <Suspense fallback ={<h1>loading...</h1>}>
      <DisplaySetting tripInfo={tripInfo}> </DisplaySetting>

  </Suspense>
  <DeleteColumn id={params.params.slug} table="trips" column="id"></DeleteColumn>
  </>
  )
}

