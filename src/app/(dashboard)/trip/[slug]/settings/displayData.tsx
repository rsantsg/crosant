'use client'
import { useEffect, useState } from "react"
import EditTrip from "../../../../actions/editTrip"
export default function DisplaySetting({tripInfo}){
    console.log(tripInfo)
    const[edit, setEdit] = useState(true)
    return(
            <>
      {!edit ? (
            <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
  <dl className="-my-3 divide-y divide-gray-100 text-sm">
    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
    
      <dt className="font-medium text-gray-900">Name</dt>
      <dt className="text-gray-700 sm:col-span-2">{tripInfo.name}</dt>
     
    </div>

    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Description</dt>
      <dd className="text-gray-700 sm:col-span-2"> {tripInfo.description}</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">From</dt>
      <dd className="text-gray-700 sm:col-span-2">{tripInfo.from}</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">To</dt>
      <dd className="text-gray-700 sm:col-span-2">{tripInfo.to}</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Bio</dt>
      <dd className="text-gray-700 sm:col-span-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis debitis explicabo
        doloremque impedit nesciunt dolorem facere, dolor quasi veritatis quia fugit aperiam
        aspernatur neque molestiae labore aliquam soluta architecto?
      </dd>
    </div>
  </dl>

</div>
      ):(<EditTrip tripInfo={tripInfo}></EditTrip>)}

</>
    )
}