'use client'
import { useFormState, useFormStatus } from 'react-dom'
import { deleteColumn } from './action'
import {FiTrash2} from "react-icons/fi";
const initialState = {
    message: null,
  }
  
function DeleteButton() {
    const { pending } = useFormStatus()
  
    return (
      <button className =' z-100 border border-solid border-black rounded-sm' type="submit" aria-disabled={pending}>
        Delete 
      </button>
    )
  }


export function DeleteColumn({ id, table, column }: { id: number; table:string; column: string;}) {
  const [state, formAction] = useFormState(deleteColumn, initialState)


  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={id} />
      <input type='hidden' name= 'table' value={table}/>
      <input type='hidden' name= 'column' value ={column}/>
        <DeleteButton />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  )

}
  
