'use client'
import {PiPlusThin} from "react-icons/pi";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import { useEffect, useState} from "react";
import { experimental_useFormState as useFormState } from 'react-dom'
import { createTrip } from './action'
import { getUser } from "../lib/getUser"
import { getSession } from "next-auth/react";
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
//import Stop from '../component/Stops'
import CompletedTask from "../../app/component/Alarts";
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
  if(pending){
    return(
      <CompletedTask/>
    )
  }

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
//Combine popForm with AddTrip. put everything that is currently here into the popup and add card into trigger.
export function AddTrip() {
 
  

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
        <input type="text" id= 'user' name= 'trip_id'  className='hidden' value={getUser()} /> 

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
  const addNewChild = () => {
    setChildCount((prevCount) => prevCount + 1);
  };
 
  let allStops = []
  const user = getUser()
  console.error(`USER: ${user}`)

  return( 
    <Popup className="flex justify-center  h-3/4 w-2/3 rounded-md" 
      trigger={
        <div className="p-5  rounded-xl border-solid border-black  ">
          <div className="   hover:cursor-pointer flex justify-center items-center rounded-lg shadow-md h-[200px] w-[175px] bg-slate-50">    
            <PiPlusThin   color='black' size={50}>   </PiPlusThin> 

          </div>
          </div>
      } modal position="right center" contentStyle={contentStyle}  overlayStyle={overlayStyle} arrowStyle={arrowStyle}>
    
   


    { close => (
          /*
          <div className='flex justify-center  h-full w-full rounded-md'> 
                <form className=' border border-solid relative h-full w-full ' action={formAction}>
                   
                  <label className=' items-center absolute inset-x-0 top-0 border border-solid  h-10 w-[100%] text-center text-3xl   ' htmlFor="trip">Create a new trip </label>
                   <div className=' w-[100%] border border-solid h-1/6 bg-slate- absolute top-10  '>
                     <label className='text-black uppercase'>Trip name </label>
     
                     <input  className=' bg-slate-100 absolute bottom-0  ' placeholder='new trip' type="text" id="trip" name="trip" required />
                     {
                      /*
                      {!addButton  ?(             <PiPlusThin onClick={addButtonHandler}   color='black' size={50}>   </PiPlusThin>):(<>hello</>) }

                          {allStops.map((Stop, index) => (
                          <Stop key={index} />
                          ))}

                      *
                    }
                   </div> 

                   <div  className = " absolute bottom-0 right-5 h-10" >

                            
                        <SubmitButton onClose={close}></SubmitButton>
                       {* Render child components based on the current count *
                        {Array.from({ length: childCount }, (_, index) => (
                          <ChildComponent key={index} index={index + 1} />
                        ))}
                      <button onClick={addNewChild}>Add New Child</button>
                        *}
                                            
                    </div>
                   
                   <p aria-live="polite" className="sr-only" role="status">
                     {() => close()}
                   </p>
                 </form>
           
           </div>
           */
           <div className="rounded-lg  p-8 shadow-lg lg:col-span-3 lg:p-6">
            <div className="space-y-1  w-full frex justify-center items-center ">
              <label className=' justify-center items-center uppercase text-xl font-bold' htmlFor="todo">Create a New Trip</label>
            </div>
 
            <form action={formAction} className="space-y-4 pt-6">
              <div>
                <label className="sr-only " for="name">Name</label>
                <input
                  className="w-full rounded-lg border border-solid p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  name='trip'
                  id="trip"
                  required
                />
                <input type="text" id= 'user' name= 'user'  className='hidden' value={user} /> 

                <div className="mt-4">
              <SubmitButton onClose={close} />
              </div>
              </div>
              </form>
           </div>

    )
    }

   
    </Popup>




)

}


