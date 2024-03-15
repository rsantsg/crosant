'use client'
import {PiPlusThin} from "react-icons/pi";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
type ValuePiece = Date | null;
import { Button, Modal } from 'flowbite-react';
type Value = ValuePiece | [ValuePiece, ValuePiece];
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
function CloseForm ({close}) {
    const [date, onChange] = useState<Value>([new Date(), new Date()]);
    const [state, formAction] = useFormState(createTrip, initialState)
  const [openModal, setOpenModal] = useState(false);
  return(
    <div className="rounded-lg  p-2 shadow-lg lg:col-span-3 lg:p-2">
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
                  placeholder="from"
                  type="text"
                  name='from'
                  id="from"
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
                  <div className=" h-10 pt-2 col-span-6 sm:col-span-4 border-gray-200  inline-block  border border-solid rounded-lg">
                      <DateRangePicker onChange={onChange} value={date} />
                      <input name='start' id='start' type="hidden" value={JSON.stringify(date[0])}></input>
                      <input name='end' id='end' type="hidden" value={JSON.stringify(date[1])}></input>

                    </div>

              <div className="inline-block p-3 mt-4">
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
  
   function onCloseModal() {
    setOpenModal(false);
  }
  const [openModal, setOpenModal] = useState(false);
  //console.error(user)
let close = false
  return( 
     <div className="p-5">
      <button className="hover:cursor-pointer flex justify-center items-center shadow-md h-[200px] w-[275px] bg-slate-50  p-5  rounded-xl border-solid border-black " onClick={() => setOpenModal(true)}> 
                       <PiPlusThin   color='black' size={50}>   </PiPlusThin> 


        </button>
      <Modal show={openModal} size="lg" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
            <CloseForm close={onCloseModal}></CloseForm>
        </Modal.Body>
        </Modal>
 </div>

)

}


