'use server'

import { revalidatePath, revalidateTag } from 'next/cache'
import { z } from 'zod'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

// CREATE TABLE todos (
//   id SERIAL PRIMARY KEY,
//   text TEXT NOT NULL
// );
//This will be a new function it will replace createTrip(). It will have the functionality of CreateStop() and createTodo() all together. 
//Functionallity. Needs to be able to create multiple stops and todo all onces. 
const supabase = createServerComponentClient({cookies}) 
export async function editTrip(prevState:any, formData:FormData) {

  
}
export async function initTrip(prevState: any, formData: FormData) {
    const schema = z.object({
    name: z.string().min(1),
    description:z.string().nullish(), 
    from:z.string().nullish(),
    to:z.string().nullish(),
  })
    const data = schema.parse({
    name: formData.get('name'),
    description : formData.get('description'), 
    links:formData.get('from'), 
    address: formData.get('to'),
  })
  
}
async function signInHandler(credentials:any) {
  try{
    //console.log("USER LOGging ")
   const res = ''// await signInWithEmailAndPassword(auth, credentials.email, credentials.password)
   //onsole.log(res.user) 
   const kid =  '' //await res.user.getIdToken()
   const response = await fetch( process.env.URL + '/api/login', {
    method: "POST",
    headers: {
      Authorization: `Bearer ${kid}`,
    }}
   )
   return response

  }
  catch(error){
    console.log('Loging Error Error')
    return error 
  }
  
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
  const response = await signInHandler(credentials)
  if( cookies().get("session") !== undefined){
    redirect('/')
  }
 
  
  redirect('/login')  
  

}

export async function createTodo(prevState: any, formData: FormData) {
  const schema = z.object({
    name: z.string().min(1),
    description:z.string().nullish(), 
    links:z.string().nullish(),
    address:z.string().nullish(),
    locationId:z.string().min(1)
  })
  console.log("====================================================")
    console.log(formData.get('address'))
  console.log("====================================================")

  const data = schema.parse({
    name: formData.get('name'),
    description : formData.get('description'), 
    links:formData.get('links'), 
    address: formData.get('address'),
    locationId:formData.get('location_id')
    
  })
  const { data: { user } } = await supabase.auth.getUser()


  try{
    const dataPackage = {
      name:data.name,
      description : data.description, 
      privileges:{
        "read":[user.id], 
        'write':[user.id],
      }, 
      uid: user.id,
      locationId: data.locationId
  
    }
    console.log(dataPackage)

    const result = await supabase.from('todos').insert(dataPackage);
    //postTodo(data)
    revalidateTag(`L${data.locationId}`)
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
    id: z.string().min(1)
  })
  const { data: { user } } = await supabase.auth.getUser()

  const data = schema.parse({
    name: formData.get('name'), 
    description : formData.get('description'), 
    address: '',
    links:'', 
   
    id: formData.get('id')

  })
  try{ 
    const dataPackage = {
      name:data.name,
      description : data.description, 
      address: '',
      links:'', 
      privileges:{
        "read":[user.id], 
        'write':[user.id],
      }, 
      uid: user.id,
      id: data.id
  
    }
    console.log(dataPackage)

    const result = await supabase.from('locations').insert(dataPackage);
    console.log(result)
    if(result.status===201){
      revalidatePath('/trip/[slug]', 'layout')
      return {message: 'A stop was created'}
    }
    return "Error"
  
    
    
  }
  catch(e){
    return { message: 'Failed to create trip location' }

  }
}

export async function createTrip(prevState: any, formData: FormData) {
  const schema = z.object({
    name: z.string().min(1),
    description: z.string().nullish(), 
    where: z.string().nullish(), 
    to: z.string().nullish(),
    uid: z.string().min(1),
  })
  const data = schema.parse({
    name: formData.get('trip'),
    description: formData.get('description'), 
    where: formData.get('where'), 
    to : formData.get('to'),
    uid: formData.get('user'),
  })
  try {
    console.log('HEre')
    const { data: { user } } = await supabase.auth.getUser()

      console.log("EL  ", user ); 
      //console.log(user)
      let dataP = {
          "name": data.name, 
          "uid": user.id, 
          "privileges" :[ 
            {
              "read":[user.id], 
              'write':[user.id], 
            }
          ], 
          "description" : data.description, 
          "where": data.where, 
          "to": data.to

  
      }
      //console.log(auth.currentUser)
      console.log(dataP)
      const result = await supabase.from('trips').insert(dataP);
      console.log("Trip addesd successfully:", result);
      if(result.status === 201){
        revalidatePath('/')
      }
    
 
    return result
} catch (error) {
    console.error("Error adding trip:", error.toString());
    return undefined
} 
}
   //const res = await addNewTrip(data)
//console.log("DATAHJE")
  
    
    //redirect(`/trip/${res}`)
  


export async function deleteColumn(prevState: any, formData: FormData) {
  const schema = z.object({
    id: z.string().min(1),
    table: z.string().min(1),
    col: z.string().min(1)
  })

  const data = schema.parse({
    id: formData.get('id'),
    table: formData.get('table'),
    col: formData.get('column')
  })
    const result = await supabase.from(data.table).delete().eq(data.col, data.id)
    //DELETE(data.id)
    revalidatePath('/')
    redirect('/')

}
