'use client'
import {PiPlusThin} from "react-icons/pi";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import { useState, useEffect } from "react";
import { experimental_useFormState as useFormState } from 'react-dom'
import { createTrip } from './action'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
const initialState = {
  message: null,
}

async function performAsyncOperation() {
  // Simulate an asynchronous operation
  return new Promise(resolve => setTimeout(resolve, 2000));
}

function SubmitButton({  onClose }) {
  const { pending } = useFormStatus();

  useEffect(()=>{
    if(pending){
      onClose()
    }
  })

  return (
    <button

      type="submit"
      disabled={pending}
 
    >
     create 
    </button>
  );
}
//Combine popForm with AddTrip. put everything that is currently here into the popup and add card into trigger.
export function AddTrip() {
  const handleSubmit = async () => {
    // Your form submission logic here, for example:
    console.log('Performing form submission...');
    console.log('Form submission complete');
  };const [state, formAction] = useFormState(createTrip, initialState)



  return( 
    <Popup className="h-[500px] w-[500px]" trigger={
      <div className="p-5  rounded-xl border-solid border-black  ">
          <div className="   hover:cursor-pointer flex justify-center items-center rounded-lg shadow-md h-[200px] w-[175px] bg-slate-50">    
            <PiPlusThin   color='black' size={50}>   </PiPlusThin> 

          </div>
      </div>
  } modal position="right center">
    { close => (
         <div className='flex justify-center  h-full w-full rounded-md'> 
            <form className=' border border-solid relative h-[100%] w-[60%] ' action={formAction}>
               
               <label className=' items-center absolute inset-x-0 top-5 border border-solid  h-10 w-[100%] text-center text-3xl   ' htmlFor="trip">Create a new trip </label>
               <div className=' w-[100%] border border-solid h-1/6 bg-slate- absolute top-1/2   '>
                 <label className='text-black uppercase'>Trip name </label>
 
                 <input className=' bg-slate-100 absolute bottom-0  ' placeholder='new trip' type="text" id="trip" name="trip" required />
 
               </div> 
               <div  className = " absolute bottom-0 right-5 h-10" > 
                      <SubmitButton onClose={close}/>
                </div>
               
               <p aria-live="polite" className="sr-only" role="status">
                 {() => close()}
               </p>
             </form>
       
       </div>

    )
    }

   
    </Popup>




)

}


