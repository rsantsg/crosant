'use client'
import { experimental_useFormState as useFormState } from 'react-dom'
import { createStop } from './action'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
const initialState = {
  message: null,
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button type="submit" aria-disabled={pending}>
      Add
    </button>
  )
}
export function AddStop({id}){
    const [state, formAction] = useFormState(createStop, initialState)

        return( 
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
    )

        

    

}