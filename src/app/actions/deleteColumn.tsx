'use client'
import { useFormState, useFormStatus } from 'react-dom'
import { deleteColumn } from './action'
import { Button, Modal } from 'flowbite-react';
import { Suspense, useState, useEffect } from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
const initialState = {
    message: null,
  }
  
function DeleteButton({setOpenModal}) {
    const { pending } = useFormStatus()
    useEffect( ()=>{
      if(pending){
        setOpenModal()
      }
    })
  
    return (
      <button  className =' bg-red-500 inline-block  rounded-lg  px-5 py-3 font-medium text-white sm:w-auto' type="submit" aria-disabled={pending}>
                {"Yes, I'm sure"}
      </button>
    )
  }


export function DeleteColumn({ id, table, column }: { id: number; table:string; column: string;}) {
  const [state, formAction] = useFormState(deleteColumn, initialState)
  const [openModal, setOpenModal] = useState(false);
  const closeHandle = ()=>{
    setOpenModal(false)
  }
  return (
     <div className='inline-block h-15 '>
      

      <button       className="inline-block w-1/2 h- rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
 onClick={() => setOpenModal(true)}>Toggle modal</button>
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
                <form action={formAction} className='inline-block p-5 borber border-solid'>
      <input type="hidden" name="id" value={id} />
      <input type='hidden' name= 'table' value={table}/>
      <input type='hidden' name= 'column' value ={column}/>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
            <Suspense fallback={<h1> Loading...</h1>}>
                <DeleteButton setOpenModal={closeHandle} />
                </Suspense>
              <button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </button>
            </div>
          </div>
            <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
        </Modal.Body>
      </Modal>
    
    </div>
  
  )

}
  
