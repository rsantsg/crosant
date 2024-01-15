'use client'
import useSWR from 'swr'
//const { data, error, isLoading } = useSWR("../api/trip", get_Todo(id))

export default function LocationCards ({id, name, description}){
    console.log("CARD ERRRPR ")
    return (
        <div className=" flex  justify-center  border pt-1 h-10  bg-inherit shadow-md uppercase ">
            <div className=' flex justify-center items-center     rounded-lg'>
                {name} 

            </div >
    
        </div>
    )
} 