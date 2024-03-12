'use client'
import { useFormState } from 'react-dom'
import { createTodo } from './action'
import { PiPlusThin } from "react-icons/pi";
import { useEffect } from "react";

import Popup from 'reactjs-popup';
import { useFormStatus } from 'react-dom'
const initialState = {
  message: null,
}
const overlayStyle = { background: 'rgba(0,0,0,0.5)' };
const arrowStyle = { color: '#000' };
const contentStyle = {
  background: '#FFFF',
  width: '40%',
  height: `${60}%`, // Adjust the multiplier as needed
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
function SubmitButton({ onClose }) {
  const { pending } = useFormStatus();

  useEffect(() => {
    if (pending) {
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
const CloseForm = (close: any, id:any): JSX.Element => {
    const [state, formAction] = useFormState(createTodo, initialState)

  return(

    
        <div className="rounded-lg transparent p-8 shadow-lg lg:col-span-3 lg:p-6">
          <div className="space-y-1  w-full frex justify-center items-center ">
            <label className='frex justify-center items-center uppercase text-xl font-bold' htmlFor="todo">Create a new Todo</label>

          </div>

          <form action={formAction} className="space-y-4 pt-6">
            <div>
              <label className="sr-only" htmlFor="name">Name</label>
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
                <label className="sr-only" htmlFor="email">Email</label>
                <input
                  className="w-full rounded-lg border-gray-200   border border-solid p-3 text-sm"
                  placeholder="Address"
                  name='address'
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="phone">Phone</label>
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
              <label className="sr-only" htmlFor="message">Message</label>
              <input type="text" id='location_id' name='location_id' value={id} className='hidden' />

              <textarea
                className="w-full rounded-lg border-gray-200   border border-solid p-3 text-sm"
                placeholder="Message"
                rows={8}
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
export function AddTodo({ id }) {

  console.log('add Todo id ', id)
  return (
    <Popup trigger={
      <div className="p-5  rounded-xl border-solid border-black  ">

        <PiPlusThin color='black' size={20}>   </PiPlusThin>

      </div>
    } modal position="right center" contentStyle={contentStyle} overlayStyle={overlayStyle} arrowStyle={arrowStyle}>
      <CloseForm id={id}/>
    </Popup>



  )


}