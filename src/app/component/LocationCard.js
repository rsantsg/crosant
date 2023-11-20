'use client'
import useSWR from 'swr'
import {get_Todo} from '../api/trip/route'
//const { data, error, isLoading } = useSWR("../api/trip", get_Todo(id))

export default function LocationCards ({id, name, description}){
    console.log("CARD ERRRPR ")
    return (
        <div className=" p-5  flex justify-center items-center rounded-lg bg-white h-20 shadow-md uppercase ">
            <div className=' flex justify-center items-center  pt-2 w-3/4  h-3/4 rounded-lg'>
                {name} 

            </div >
    
        </div>
    )
} 