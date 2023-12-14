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
 
    >
     create 
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
    console.log(  `id ${id}`)
    const [state, formAction] = useFormState(createTodo, initialState)
    return(
      <Popup className="h-[500px] w-[500px]" trigger={
              <PiPlusThin   color='black' size={20}>   </PiPlusThin> 
  
         
    } modal position="right top">
      {close =>(
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

      )}
          </Popup>

      
        
    )


}