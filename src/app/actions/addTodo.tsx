'use client'
import { experimental_useFormState as useFormState } from 'react-dom'
import { createTodo } from './action'
import {PiPlusThin} from "react-icons/pi";
import {  useEffect } from "react";

import Popup from 'reactjs-popup';
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
const initialState = {
  message: null,
}
const overlayStyle = { background: 'rgba(0,0,0,0.5)' };
const arrowStyle = { color: '#000' };
const contentStyle = {
  background: '#FFFF',
  width: '40%',
  height: `${60 }%`, // Adjust the multiplier as needed
  borderRadius: '0.375rem',
};
/*
function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button type="submit" aria-disabled={pending}>
      Add
    </button>
  )
}
**/
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
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"

 
    >
     Create
    </button>
  );
}
/**
 <!--
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
-->

<label
  for="UserEmail"
  class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
>
  <input
    type="email"
    id="UserEmail"
    placeholder="Email"
    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
  />

  <span
    class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
  >
    Email
  </span>
</label>

 */
export function AddTodo({id}){
    const [state, formAction] = useFormState(createTodo, initialState)
    
    
    return(
      <Popup trigger={
        <div className="p-5  rounded-xl border-solid border-black  ">

              <PiPlusThin   color='black' size={20}>   </PiPlusThin> 
  
         </div>
    } modal  position="right center" contentStyle={contentStyle}  overlayStyle={overlayStyle} arrowStyle={arrowStyle}>
      { close =>(
        /*
        <div className='flex bg-white justify-center  h-full w-full rounded-md'> 

          <form className='  relative h-[100%] w-[60%] ' action={formAction}>  
            <label htmlFor="todo">Enter Todo</label>
            
              <input 
                className="  peer h-8 w-full border-none bg-transparent p-0  focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                placeholder='Name'
                type="text" id="todo" name="name" required />
              <input
                className=" peer h-8 w-full border-none bg-transparent p-0  focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                placeholder='description'
                type="text" id="description" name="description"  />
              <input 
                className=" peer h-8 w-full border-none bg-transparent p-0  focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                placeholder='Link'
                type="text" id="links" name="links"  />
              <input 
                className="peer h-8 w-full border-none bg-transparent p-0  focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                placeholder='address'
                type="text" id="address" name="address"  />
              <input
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                type="text" id= 'location_id' name= 'location_id' value={id} className='hidden' /> 
                                <input type="text" id= 'trip_id' name= 'location_id' value={id} className='hidden' /> 

              <SubmitButton onClose={close} />
              <p aria-live="polite" className="sr-only" role="status">
                  {() => close()}

              </p>

          </form> 
        </div>
        */ 
        <div className="rounded-lg transparent p-8 shadow-lg lg:col-span-3 lg:p-6">
          <div className="space-y-1  w-full frex justify-center items-center ">
          <label className='frex justify-center items-center uppercase text-xl font-bold' htmlFor="todo">Create a new Todo</label>

          </div>

        <form action={formAction} className="space-y-4 pt-6">
          <div>
            <label className="sr-only" for="name">Name</label>
            <input
              className="w-full rounded-lg border-gray-200   border border-solid p-3 text-sm"
              placeholder="Name"
              type="text"
              name='name'
              id="name"
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" for="email">Email</label>
              <input
                className="w-full rounded-lg border-gray-200   border border-solid p-3 text-sm"
                placeholder="Address"
                name='address'
              />
            </div>

            <div>
              <label className="sr-only" for="phone">Phone</label>
              <input
                className="w-full rounded-lg border-gray-200   border border-solid p-3 text-sm"
                placeholder="Links"
                type="text"
                name='links'
                id="phone"
              />
            </div>
          </div>

     
          <div>
            <label className="sr-only" for="message">Message</label>
            <input type="text" id= 'trip_id' name= 'location_id' value={id} className='hidden' /> 

            <textarea
              className="w-full rounded-lg border-gray-200   border border-solid p-3 text-sm"
              placeholder="Message"
              rows="8"
              name='description'
              id="description"
            ></textarea>
          </div>

          <div className="mt-4">
          <SubmitButton onClose={close} />
          
          
            {
              /*
  <button
              type="submit"
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
              Send Enquiry
            </button>
              */
            }

          
          </div>
          </form> 
        </div>
      )
      }
          </Popup>

      
        
    )


}