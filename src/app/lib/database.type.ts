export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]
export interface Database {
    public: {
      Tables: {
        trip: {
          Row: {
            // the data expected from .select()
            id: number
            name: string
            description: string 
            where: string 
            to: string 
            privileges: Json | null
            uid: number 
          }
          Insert: {
            // the data to be passed to .insert()
            id?: never // generated columns must not be supplied
            name: string // `not null` columns with no default must be supplied
            description: string 
            where: string 
            to: string 
            privileges?: Json | null // nullable columns can be omitted
            uid: string
          }
          Update: {
            // the data to be passed to .update()
            id?: never
            name?: string // `not null` columns are optional on .update()
            description?: string 
            where?: string 
            to?: string 
            privileges?: Json | null
            uid?: number
          }
        }
      }
    }
  }