'use client'
import {PiPlusThin} from "react-icons/pi";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import { useEffect, useState} from "react";
import {  useFormState } from 'react-dom'
import { createTrip } from './action'
import {  useFormStatus } from 'react-dom'
//import Stop from '../component/Stops'
const overlayStyle = { background: 'rgba(0,0,0,0)' };
const arrowStyle = { color: '#000' };
const initialState = {
  message: null,
}


function SubmitButton({  onClose }) {
  const { pending} = useFormStatus();

  useEffect(()=>{
    if(pending){
      onClose()
      console.log(pending)
    }
  })
  /*
  if(pending){
    return(
      <CompletedTask/>
    )
  }**/

  return (
    <button

      type="submit"
      disabled={pending}
      className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"

    >

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
const CloseForm = (close: any, id:any): JSX.Element => {
    const [state, formAction] = useFormState(createTrip, initialState)

  return(
    <div className="rounded-lg  p-8 shadow-lg lg:col-span-3 lg:p-6">
            <div className="space-y-1  w-full frex justify-center items-center ">
              <label className=' justify-center items-center uppercase text-xl font-bold' htmlFor="todo">Create a New Trip</label>
            </div>
 
            <form action={formAction} className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <label className="sr-only " htmlFor="name">Name</label>
                <input
                  className="w-full rounded-lg border border-solid p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  name='trip'
                  id="trip"
                  required
                />

              
              </div>
               <div className="col-span-6 sm:col-span-3">
                <label className="sr-only " htmlFor="name">Name</label>
                <input
                  className="w-full rounded-lg border border-solid p-3 text-sm"
                  placeholder="Where"
                  type="text"
                  name='where'
                  id="where"
                  required
                />
                </div>
                   <div className="col-span-6 sm:col-span-3">
                <label className="sr-only " htmlFor="name">Name</label>
                <input
                  className="w-full rounded-lg border border-solid p-3 text-sm"
                  placeholder="To"
                  type="text"
                  name='to'
                  id="to"
                  required
                />
                </div>
                <div className="col-span-6">
                  <textarea
                    className="w-full rounded-lg border-gray-200   border border-solid p-3 text-sm"
                    placeholder="Description"
                    rows={4}
                    name='description'
                    id="description"
                  >
                  
                  </textarea>
                </div>
              <div className="mt-4">
                <SubmitButton onClose={close} />
              </div>
              </form>
           </div>
    
  )
}
//Combine popForm with AddTrip. put everything that is currently here into the popup and add card into trigger.
export function AddTrip() {
 
  

  const contentStyle = {
    background: '#FFFF',
    width: '40%',
   // height: `${20 + childCount * 5}%`, // Adjust the multiplier as needed
   height:'56.5%',
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
  const [state, formAction] = useFormState(createTrip, initialState)
  /*
  const addNewChild = () => {
    setChildCount((prevCount) => prevCount + 1);
  };
 
  let allStops = []
  const user =  "None"
  /*
  if(user !== undefined && user !== null){
    console.log(typeof user)
    console.log(user['uid'])

  }**/
  
  

  //console.error(user)
let close = false
  return( 
    <Popup className="flex justify-center  rounded-md" 
      trigger={
        <div className="p-5  rounded-xl border-solid border-black  ">
          <div className="   hover:cursor-pointer flex justify-center items-center rounded-lg shadow-md h-[200px] w-[175px] bg-slate-50">    
            <PiPlusThin   color='black' size={50}>   </PiPlusThin> 

          </div>
          </div>
      } modal position="right center" contentStyle={contentStyle}  overlayStyle={overlayStyle} arrowStyle={arrowStyle}>
    
   
  <CloseForm/> 

   
    </Popup>




)

}


