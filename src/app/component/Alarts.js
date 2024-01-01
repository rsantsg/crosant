'use client'
import React, { useState, useEffect } from 'react';
import { PiCheckCircle, PiX } from "react-icons/pi";
export default function CompletedTask(){
    const [displayAlart, setDisplayAlart] = useState(false); 
    const displayAlartHandler = ()=>{
        displayAlart(!displayAlart)
    }
     useEffect( ()=>{  
        if(displayAlart){
            const countDown = setTimeout(()=>{
                displayAlartHandler()
            },
            3000

                )
        }
       
     },[displayAlart])
    return(
      <div role="alert" class="rounded-xl border border-gray-100 bg-white p-4">
          <div class="flex items-start gap-4">
            <PiCheckCircle size={30} className='pt-1' color='green'></PiCheckCircle>
            <div class="flex-1">
              <strong class="block font-medium text-gray-900"> Changes saved </strong>
                <p class="mt-1 text-sm text-gray-700">Your product changes have been saved.</p>

              </div>
              <PiX size={20 } color='green'></PiX>



  
        </div>
      </div>

    )
}