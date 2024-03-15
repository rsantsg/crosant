'use server'
//import { DeleteForm } from "../../../actions/deleteTrip"
//import {useState, useEffect} from 'react'
import { PiPencilCircle } from "react-icons/pi";
import { DeleteColumn } from '../../../../actions/deleteColumn';
import { getTrip } from '../../../../lib/supabaseClient';
import EditTrip from "../../../../actions/editTrip";
import { Suspense } from "react";
import { ok } from "assert";
import { Spinner } from 'flowbite-react';
export default  async function page(params) {
    console.log(params)
      let dat =  await getTrip(params.params.slug)

      let tripInfo = {}
      if( dat.status === 200){
         tripInfo = dat['data'][0]
      }

 
  return (
  <div>
  <Suspense fallback ={<Spinner aria-label="Default status example" />}>

<EditTrip tripInfo={tripInfo} ></EditTrip>

  </Suspense>
  </div>
  )
}

