'use server'
import { unstable_cache } from 'next/cache';
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

export const getTrips = unstable_cache( async ()=>{
  const cookieStore = cookies()
const supabase = createServerComponentClient({ cookies:()=>cookieStore });
        return await supabase.from("trips").select()


}, ['trips'],
{ tags:['trips']})

export const getTrip = unstable_cache( async (id)=>{
  const cookieStore = cookies()
const supabase = createServerComponentClient({ cookies:()=>cookieStore });
        return await supabase.from("trips").select().eq('id', id)


}, ['trip'],
{ tags:['trip']})

export const getStops = unstable_cache( async ()=>{
          const cookieStore = cookies()
const supabase = createServerComponentClient({ cookies:()=>cookieStore });

        return await supabase.from("stops").select()


}, ['stops'],
{ tags:['stops']})