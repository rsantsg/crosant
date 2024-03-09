//import { DeleteForm } from "../../../actions/deleteTrip"
import { PiPencilCircle } from "react-icons/pi";
export default async function page(params) {
console.log(params.params)
  return (
    <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
  <dl className="-my-3 divide-y divide-gray-100 text-sm">
    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
    
      <dt className="font-medium text-gray-900">Name</dt>
      <dt className="text-gray-700 sm:col-span-2">ssda</dt>
     
    </div>

    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Description</dt>
      <dd className="text-gray-700 sm:col-span-2">        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis debitis explicabo
        doloremque impedit nesciunt dolorem facere, dolor quasi veritatis quia fugit aperiam
        aspernatur neque molestiae labore aliquam soluta architecto?</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Where</dt>
      <dd className="text-gray-700 sm:col-span-2">Guitarist</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">To</dt>
      <dd className="text-gray-700 sm:col-span-2">$1,000,000+</dd>
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


  )
}

