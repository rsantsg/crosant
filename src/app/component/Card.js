
'use client'
export const runtime = "edge"
import Link from 'next/link';
import { Suspense } from 'react';
import { PiPlusThin } from "react-icons/pi";
import Loading from './Loading';
import { query } from 'firebase/firestore';

export default function Cards({ image, data, pid  }) {
    // as={`/Trip/${pid}`}
    if(data.dates !== null || data.dates!== undefined ){
        const temp = new Date(String(data.dates[0].start).split("-"));
    console.log("Hello?! ",  data.dates[0].start.split('-'))



    }
    const tempEnd = data.dates[0].end.split('-')
    const endDay = tempEnd[2].split('T')
     const tempStart = data.dates[0].start.split('-')
    const startDay = tempEnd[2].split('T')
    
    const Months = ["January", "Febuary", "March", "April", "Maya","June","Julie", "August","September","October","November","December"]
    return (
  

        <div className="p-5  border-solid border-black   ">
          
                <Link 
                className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg   p-5   border-solid border-black hover:cursor-pointer flex justify-center items-center lg:h-[250px] w-[300px] bg-slate-50 hover:bg-slate-200 sm:h-[100] w[150]  " 

                    href={
                        {
                            pathname :  `/trip/${data.id}/settings` ,
                  
                    }}
                    
                   
                key={data.id}
                >
                <article >
  <img
    alt=""
    src="https://images.unsplash.com/photo-1545063168-0e149bddf68c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    className="absolute inset-0 h-2/3 w-full object-cover"
  />
   

  </article>
    
                                    
<div className=" pl-30  absolute left-0 bg-gradient-to-t pt-32 ">
    <div className="p-2 sm:p-2">

        <h3 className=" text-lg text-black">{data.name}</h3>

        <h4 className='flow-root text-sm '>{` ${Months[Number(tempStart[1])-1]} ${startDay[0]} ${tempStart[0].replaceAll("\"", "")} - ${Months[Number(tempEnd[1])-1]} ${endDay[0]}  ${tempEnd[0].replaceAll("\"", "")}`}</h4>
    </div>
  </div>


                </Link>
        </div>


    )
}