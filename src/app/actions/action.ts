'use server'

import { revalidatePath, revalidateTag } from 'next/cache'
import { z } from 'zod'
import {POST} from '../api/trip/route'
import { delete_Trip as DELETE, postTodo, postLocation  } from '../api/trip/route'
import { redirect } from 'next/navigation'
import {POST as Signin} from '../api/login/route'
import {auth} from '../lib/firebase/firebase'
import { signInWithCredential, signInWithEmailAndPassword } from 'firebase/auth'
import { NextResponse } from 'next/server'

// CREATE TABLE todos (
//   id SERIAL PRIMARY KEY,
//   text TEXT NOT NULL
// );
//This will be a new function it will replace createTrip(). It will have the functionality of CreateStop() and createTodo() all together. 
//Functionallity. Needs to be able to create multiple stops and todo all onces. 
export async function initTrip(prevState: any, formData: FormData) {

}
export async function SignIn(prevState:any, formData:FormData){
  const schema  = z.object({
    email: z.string().min(1),
    password: z.string().min(1)

  })
  const credentials = schema.parse({
    email: formData.get('email'), 
    password: formData.get('password')
  })
  const url = 'http://local:3000/api/login'
  const header ={
    method:'POST', 
    headers: {
      Authorization: `Bearer ${credentials}`,
    }
  }
  try{
    console.log("In ACTIONS")
   const res = await signInWithEmailAndPassword(auth, credentials.email, credentials.password)
   console.log(res.user) 
   const kid = await res.user.getIdToken(true)
   const response = await fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${kid}`,
    }}
   )
   if(response.ok){
    return NextResponse.redirect(new URL('/'))
  }
   //const resp = await fetch(url, header)

  }
catch(e){
  console.error(e)
}

  
  

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
    console.log(formData.get('address'))
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
    user: z.string().min(1),
  })
  const data = schema.parse({
    name: formData.get('trip'),
    user: formData.get('user'),
  })
console.log("DATAHJE")
   //const res = await addTrips(data)
  
    revalidatePath('/')
    //redirect(`/trip/${res}`)
  
}

export async function deleteTrip(prevState: any, formData: FormData) {
  const schema = z.object({
    id: z.string().min(1)
  })
  const data = schema.parse({
    id: formData.get('id'),
  })

    DELETE(data.id)
    revalidatePath('/')
    redirect('/')

}
