'use client'
import useSWR from 'swr'
import {get_Todo} from '../api/trip/route'
//const { data, error, isLoading } = useSWR("../api/trip", get_Todo(id))

export default function LocationCards ({id, name, description}){
    console.log("CARD ERRRPR ")
    return (
        <div className=" flex  justify-center  z-100 h-10 w-11/12   rounded-lg bg-white shadow-md uppercase ">
            <div className=' flex justify-center items-center     rounded-lg'>
                {name} 

            </div >
    
        </div>
    )
} 