'use server'

import { revalidatePath, revalidateTag } from 'next/cache'
import { z } from 'zod'
import {POST} from '../api/trip/route'
import { delete_Trip as DELETE, postTodo, postLocation  } from '../api/trip/route'
import { redirect } from 'next/navigation'
// CREATE TABLE todos (
//   id SERIAL PRIMARY KEY,
//   text TEXT NOT NULL
// );
//This will be a new function it will replace createTrip(). It will have the functionality of CreateStop() and createTodo() all together. 
//Functionallity. Needs to be able to create multiple stops and todo all onces. 
export async function initTrip(prevState: any, formData: FormData) {

}
export async function createTodo(prevState: any, formData: FormData) {
  const schema = z.object({
    name: z.string().min(1),
    description:z.string().nullish(), 
    links:z.string().nullish(),
    address:z.string().nullish(),
    location_id:z.string().min(1)
  })
  console.log("====================================================")

  console.log("====================================================")

  const data = schema.parse({
    name: formData.get('name'),
    description : formData.get('description'), 
    links:formData.get('links'), 
    address: formData.get('address'),
    location_id:formData.get('location_id')
    
  })
  console.log(data)


  try{
    postTodo(data)
    revalidateTag(`L${data.location_id}`)
    return { message: `Added todo ${data.name}` }

    
  }
  catch(e){
    return { message: 'Failed to create todo' }


  }


}
export async function createStop(prevState: any, formData: FormData) {
  const schema = z.object({
    name: z.string().min(1),
    description : z.string().max(256),
    trip_id: z.string().min(1)
  })
  const data = schema.parse({
    name: formData.get('name'), 
    description : formData.get('description'), 
    trip_id: formData.get('trip_id')

  })
  try{ 
    postLocation(data)

    revalidatePath('/trip/[slug]', 'layout')
    return {message: 'A stop was created'}
    
    
  }
  catch(e){
    return { message: 'Failed to create trip location' }

  }
}

export async function createTrip(prevState: any, formData: FormData) {
  const schema = z.object({
    name: z.string().min(1),
  })
  const data = schema.parse({
    name: formData.get('trip'),
  })

   const res = await POST(data.name)
  
    revalidatePath('/')
    redirect(`/trip/${res}`)
  
}

export async function deleteTrip(prevState: any, formData: FormData) {
  const schema = z.object({
    id: z.string().min(1)
  })
  const data = schema.parse({
    id: formData.get('id'),
  })

  try {
    DELETE(data.id)
    revalidatePath('/')
    return { message: `Deleted trip id ${data.id}` }
  } catch (e) {
    return { message: 'Failed to delete todo' }
  }
}
