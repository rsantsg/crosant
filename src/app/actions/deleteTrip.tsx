'use client'
import { experimental_useFormState as useFormState, experimental_useFormStatus as useFormStatus } from 'react-dom'
import { deleteTrip } from './action'
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


export function DeleteForm({ id }: { id: number; }) {
  const [state, formAction] = useFormState(deleteTrip, initialState)


  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={id} />
      <DeleteButton />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  )

}
  
