'use client'
import { experimental_useFormState as useFormState } from 'react-dom'
import { createTodo } from './action'
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
export function AddTodo({id}){
    console.log(  `id ${id}`)
    const [state, formAction] = useFormState(createTodo, initialState)
    return(
        <form action={formAction}>
            <label htmlFor="todo">Enter Task</label>
                <input type="text" id="todo" name="name" required />
                <input type="text" id="description" name="description"  />
                <input type="text" id="links" name="links"  />
                <input type="text" id="address" name="address"  />
                <input type="text" id= 'location_id' name= 'location_id' value={id} className='hidden' /> 
                <SubmitButton />
                <p aria-live="polite" className="sr-only" role="status">
                    {state?.message}
                </p>

        </form> 
    )


}