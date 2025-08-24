'use client';

import { TrashIcon } from '@heroicons/react/24/solid';
import { useTransition } from "react";
import SpinnerMini from "@/app/_components/SpinnerMini";
import { deleteReservation, exportSomethingError } from "@/app/_action/reservation";

function DeleteReservation({ onDelete, bookingId }) {
    // const [state/response, action, isPending] = useActionState(() => deleteReservation(bookingId))
    const [isPending, startDeleteReservationTransition] = useTransition()

    function handleDeleteReservation() {
        startDeleteReservationTransition(async () => {
            onDelete(bookingId)
            await deleteReservation(bookingId)
            // TODO ERROR无效
            throw new Error('something wrong happen')
            // TODO 弹出来了结果DeleteReservation还在转
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
