'use client'
import {PiPlusThin} from "react-icons/pi";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import { useEffect, useState} from "react";
import { experimental_useFormState as useFormState } from 'react-dom'
import { SignIn } from './action'
//import { getUser } from "../../../lib/lib/getUser"
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
//import Stop from '../component/Stops'
const overlayStyle = { background: 'rgba(0,0,0,0)' };
const arrowStyle = { color: '#000' };
const initialState = {
  message: null,
}


function SubmitButton(pending) {
  
 

  return (

    <button className =' z-100 border border-solid border-black rounded-sm' type="submit" aria-disabled={pending}>


     create 
    </button>
  );
}
const ChildComponent = ({ index }) => {
  return (
    <div>
      {/* Your content for each child component */}
      <p>Child {index}</p>
    </div>
  );
};
//Combine popForm with AddTrip. put everything that is currently here into the popup and add card into trigger.
export function UserLogin() {
 
  

  const contentStyle = {
    background: '#FFFF',
    width: '40%',
   // height: `${20 + childCount * 5}%`, // Adjust the multiplier as needed
   height:'27.25%',
    borderRadius: '0.375rem',
  };
  const newStop = ()=>{ 
    return( 
      <div className="bg-black h-10 z-50" >
        <input type="text" id="name" name="name" required />
        <input type="text" id="description" name="description"  />
        <input type="text" id= 'trip_id' name= 'trip_id'  className='hidden' /> 

      </div>
    )

  }

  /*
  const handleSubmit = async () => {
    // Your form submission logic here, for example:
    console.log('Performing form submission...');
    console.log('Form submission complete');
  };
  **/
  const [state, formAction] = useFormState(SignIn, initialState)
  const { pending } = useFormStatus();


  return( 

           <div className="rounded-lg  p-8 shadow-lg lg:col-span-3 lg:p-6">
            <div className="space-y-1  w-full frex justify-center items-center ">
              <label className=' justify-center items-center uppercase text-xl font-bold' htmlFor="todo">Create a New Trip</label>
            </div>
 
            <form action={formAction} className="space-y-4 pt-6">
              <div>
                <label className="sr-only " htmlFor="email">Name</label>
                <input
                  className="w-full rounded-lg border border-solid p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  name='email'
                  id="email"
                  required
                />
                 <label className="sr-only " htmlFor="password">Password</label>
                <input
                  className="w-full rounded-lg border border-solid p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  name='password'
                  id="password"
                  required
                />

                <div className="mt-4">
              <SubmitButton pending = {pending} />
              </div>
              </div>
              </form>
           </div>





)

}


