'use client';

import { TrashIcon } from '@heroicons/react/24/solid';
import { useTransition } from "react";
import SpinnerMini from "@/app/_components/SpinnerMini";
import toast from "react-hot-toast";
import { CheckCircleIcon } from "@heroicons/react/16/solid";
import { deleteReservation } from "@/app/_action/reservation";

function DeleteReservation({ bookingId }) {
    // const [state/response, action, isPending] = useActionState(() => deleteReservation(bookingId))
    const [isPending, startDeleteReservationTransition] = useTransition()

    function handleDeleteReservation() {
        startDeleteReservationTransition(async () => {
            await deleteReservation(bookingId)
            // TODO 弹出来了结果DeleteReservation还在转
            toast.custom(t => {
                return (
                    <div
                        className={ `flex transition-all -translate-y-4 gap-2 items-center justify-center bg-slate-700 text-slate-50 px-4 py-3 mb-2 shadow-lg ${ t.visible ? 'translate-y-0 opacity-100' : '-translate-y-2.5 opacity-0' }` }>
                        <CheckCircleIcon className={ 'h-4 w-4' } />
                        <span>{ `booking ${ bookingId } delete successfully !` }</span>
                    </div>
                )
            }, { duration: 3000 })
        })
    }

    return (
        <>
            {/* onClick={() => startTransition(action)}*/ }
            <button
                disabled={ isPending }
                onClick={ handleDeleteReservation }
                className='group flex justify-center items-center gap-2 uppercase text-xs font-bold text-slate-300 flex-grow px-3 hover:bg-yellow-600 transition-colors hover:text-slate-900'
            >
                { isPending ? (
                    <SpinnerMini />
                ) : (
                    <>
                        <TrashIcon className='h-5 w-5 text-slate-600 group-hover:text-slate-800 transition-colors' />
                        <span className='mt-1'>Delete</span>
                    </>)
                }
            </button>
        </>
    );
}

export default DeleteReservation;
