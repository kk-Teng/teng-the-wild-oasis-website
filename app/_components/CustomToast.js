'use client'


import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/16/solid";

export default function CustomToast(props) {
    const { successfully = true, message, toastState } = props
    return (
        <div
            className={ `flex gap-2 items-center justify-center bg-slate-700 text-slate-50 px-4 py-3 mb-2 shadow-lg ${ toastState.visible ? 'animate-custom-in' : 'animate-custom-out' }` }>
            { successfully ? (
                <CheckCircleIcon className={ 'h-4 w-4' } />
            ) : (
                <XCircleIcon className={ 'h-4 w-4' } />
            ) }
            <span>{ message }</span>
        </div>
    );
}