'use client'
import {PiPlusThin} from "react-icons/pi";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import {  useEffect } from "react";
import { experimental_useFormState as useFormState } from 'react-dom'
import { createStop } from './action'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
const initialState = {
  message: null,
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
export function AddStop({id}){
    const [state, formAction] = useFormState(createStop, initialState)

        return( 
          <Popup  trigger={
            <div className=" rounded-xl border-solid  border-black  ">
                <div className="   hover:cursor-pointer flex justify-center items-center rounded-lg shadow-md  bg-slate-50 h-14 w-11/12">    
                  <PiPlusThin   color='black' size={15}>   </PiPlusThin> 
      
                </div>
            </div>
        } modal position="right center">
          { close => (
          
            <form action={formAction}>
            <label htmlFor="stop">Enter Task</label>
                <input type="text" id="name" name="name" required />
                <input type="text" id="description" name="description"  />
                <input type="text" id= 'trip_id' name= 'trip_id' value={id} className='hidden' /> 
                <SubmitButton />
                <p aria-live="polite" className="sr-only" role="status">
                    {state?.message}
                </p>

        </form> 
          )} 
          </Popup>

    )

        

    

}