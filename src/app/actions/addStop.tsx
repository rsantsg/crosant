'use client'
import {PiPlusThin} from "react-icons/pi";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import {  useEffect, useState } from "react";
import { experimental_useFormState as useFormState } from 'react-dom'
import { createStop } from './action'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
const initialState = {
  message: null,
}
const overlayStyle = { background: 'rgba(0,0,0,0.5)' };
const arrowStyle = { color: '#000' };
const contentStyle = {
  background: '#FFFF',
  width: '40%',
  height: `${41 }%`, // Adjust the multiplier as needed
  borderRadius: '0.375rem',
};

function SubmitButton({  onClose }) {
  const { pending } = useFormStatus();

  useEffect(()=>{
    if(pending){
      onClose()
    }
  })

  return (
    <button
    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
      type="submit"
      disabled={pending}
 
    >
     create 
    </button>
  );
}
export function AddStop({id}){
    const [state, formAction] = useFormState(createStop, initialState)
    const [description, setDescription] = useState('');
    const eventHandler = (event)=>{
      setDescription(event.target.value)
      console.log(description)  
      }
        return( 
          <Popup  trigger={
            <div className="  border-solid  border-black  ">
                <div className="   hover:cursor-pointer flex justify-center items-center shadow-md  bg-slate-50 h-14 ">    
                  <PiPlusThin   color='black' size={15}>   </PiPlusThin> 
      
                </div>
            </div>
        } modal position="right center" contentStyle={contentStyle}  overlayStyle={overlayStyle} arrowStyle={arrowStyle}>
    
          { close => (
            /*
          
            <form action={formAction} clasName="mt-8 grid grid-cols-6 ">
              <label htmlFor="stop">Enter Task</label>
              <div class="col-span-6 sm:col-span-3">
              <label for="FirstName" class="block text-sm font-medium text-gray-700">
              Name
            </label>


              <input 
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                placeholder="Task name"
                type="text" id="name" name="name"  />
                
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label for="LastName" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
               id="description"
                name='description'
                className="mt-2 pt-1 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
              onChange={eventHandler}
              rows="4"
              type="text"

              placeholder="Enter any additional order notes..."
            ></textarea>


            {
              /*
            <input
            placeholder="Description"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            type="text" id="description" name="description"  />
          *  
          }
            </div>

            <div class="col-span-6 pt-1">
                <input type="text" id= 'trip_id' name= 'trip_id' value={id} className='hidden' /> 
            </div>    
                <div className="col-span-7 right-0 sm:flex sm:items-center bg-slate-200 sm:gap-4">
                  <SubmitButton onClose={close } />
                </div>
                <p aria-live="polite" className="sr-only" role="status">
                    {state?.message}
                </p>

        </form> 
        */
        <div className="rounded-lg transparent p-8 shadow-lg lg:col-span-3 lg:p-6">
        <div className="space-y-1  w-full frex justify-center items-center ">
        <label className='frex justify-center items-center uppercase text-xl font-bold' htmlFor="todo">Create a new Stop</label>

        </div>

      <form action={formAction} className="space-y-4 pt-6">
        <div>
          <label className="sr-only" for="name">Name</label>
          <input
            className="w-full rounded-lg border-gray-200 p-3  border border-solidp-2 text-sm"
            placeholder="Name"
            type="text"
            name='name'
            id="name"
            required
          />
        </div>
        <div>
            <label className="sr-only" for="message">Message</label>
            <input type="text" id= 'id' name= 'id' value={id} className='hidden' /> 

            <textarea
              className="w-full rounded-lg border-gray-200   border border-solid p-3 text-sm"
              placeholder="Message"
              rows="4"
              name='description'
              id="description"
            ></textarea>
          </div>
          <div className="mt-4">
            <SubmitButton onClose={close} />
          </div>
        </form>
        </div>
          )} 
          </Popup>

    )

        

    

}