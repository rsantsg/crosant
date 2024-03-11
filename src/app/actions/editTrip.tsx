'use client'
import { useFormState } from 'react-dom'
import { createTodo } from './action'
import { PiPlusThin } from "react-icons/pi";
import { useEffect, useState } from "react";

import { useFormStatus } from 'react-dom'
const initialState = {
    message: null,
}
const overlayStyle = { background: 'rgba(0,0,0,0.5)' };
const arrowStyle = { color: '#000' };
function SubmitButton({ pending }) {



    return (
        <button

            type="submit"
            disabled={pending}
            className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"


        >
            Create
        </button>
    );
}
export default function EditTrip({ tripInfo }) {
    const [edit, setEdit] = useState(false)
    const [info, setInfo] = useState(tripInfo)
    const [tempInfo, setTempInfo] = useState(tripInfo)
    const [change, setChange] = useState(false)
    const { pending } = useFormStatus();
    const cancel = () => {
        setTempInfo(info)
        setEdit(false)
        setChange(false)
    }
    function ActionButtons() {
        return (
            <>
                
                    <button
                        onClick={cancel}
                        className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"


                    >
                        Cancel
                    </button>

                
                <SubmitButton pending={pending}></SubmitButton>
            </>
        )
    }

    const [state, formAction] = useFormState(createTodo, initialState)
    return (
        <form action={formAction} >
            <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
                <dl className="-my-3 divide-y divide-gray-100 text-sm">
                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">

                        <dt className="font-medium text-gray-900">Name</dt>
                        <dt className="text-gray-700 sm:col-span-2">
                            {edit ? (
                                <input
                                    className="w-full rounded-lg border-gray-200   border border-solid p-3 text-sm"
                                    placeholder={tempInfo.name}
                                    type="text"
                                    name='name'
                                    id="name"
                                    value={tempInfo.name}
                                    onChange={(e) => {
                                        setChange(true)
                                        setTempInfo({
                                            ...tempInfo,
                                            name: e.target.value
                                        })
                                    }}
                                    required
                                />
                            ) : (<> {info.name}</>)}
                        </dt>

                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Description</dt>
                        <dd className="text-gray-700 sm:col-span-2">
                            {edit ? (
                                <textarea
                                    className="w-full rounded-lg border-gray-200   border border-solid p-3 text-sm"
                                    placeholder="Message"
                                    name='description'
                                    id="description"
                                    value={tempInfo.description}
                                    onChange={(e) => setTempInfo({
                                        ...tempInfo,
                                        description: e.target.value
                                    })}
                                ></textarea>
                            ) :
                                (<>{info.description}</>)}

                        </dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">From</dt>
                        <dd className="text-gray-700 sm:col-span-2">
                            {edit ? (
                                <input
                                    className="w-full rounded-lg border-gray-200   border border-solid p-3 text-sm"
                                    placeholder={tripInfo.from}
                                    type="text"
                                    name='from'
                                    id="from"
                                    onChange={(e) => {
                                        setChange(true)
                                        setTempInfo({
                                            ...tempInfo,
                                            from: e.target.value
                                        })
                                    }
                                    }
                                    value={tempInfo.from}
                                />
                            ) :
                                (<>{info.fromn}</>)}
                        </dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">To</dt>
                        <dd className="text-gray-700 sm:col-span-2">
                            {edit ? (
                                <input
                                    className="w-full rounded-lg border-gray-200   border border-solid p-3 text-sm"
                                    placeholder={tripInfo.to}
                                    type="text"
                                    name='to'
                                    id="to"
                                    onChange={(e) => {
                                        setChange(true)
                                        setTempInfo({

                                            ...tempInfo,
                                            to: e.target.value
                                        })
                                    }}
                                    value={tempInfo.to}
                                />) :
                                (<>{info.to}</>)}

                        </dd>
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
            <input type='hidden' id='id' value="id" />
            {edit ? (<ActionButtons />) : (


                <button
                    onClick={()=>setEdit(true)}
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto" >
                    Edit
                </button>
            )


            }

        </form>
    )
}