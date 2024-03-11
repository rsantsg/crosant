'use client'
import {PiPlusThin} from "react-icons/pi";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import {  useEffect, useState } from "react";
import {  useFormState } from 'react-dom'
import { createStop } from './action'
import {  useFormStatus } from 'react-dom'
const initialState = {
  message: null,
}
const overlayStyle = { background: 'rgba(0,0,0,0.5)' };
const arrowStyle = { color: '#000' };
const contentStyle = {
  background: '#FFFF',
  width: '40%',
  height: `${56.25 }%`, // Adjust the multiplier as needed
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
          
          
        <div className="rounded-lg transparent p-8 shadow-lg lg:col-span-3 lg:p-6">
        <div className="space-y-1  w-full frex justify-center items-center ">
        <label className='frex justify-center items-center uppercase text-xl font-bold' htmlFor="todo">Create a new Stop</label>

        </div>

      <form action={formAction} className="mt-8 grid grid-cols-6 gap-6">
        <div className="col-span-6">
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
        <div className="col-span-6">
          <input
            className="w-full rounded-lg border-gray-200 p-3  border border-solidp-2 text-sm"
            placeholder="Address"
            type="text"
            name='address'
            id="address"
            required
          />
        </div>
        <div className="col-span-6">
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