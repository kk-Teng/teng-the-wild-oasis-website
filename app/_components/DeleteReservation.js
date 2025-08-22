'use client';

import { TrashIcon } from '@heroicons/react/24/solid';
import { useTransition } from "react";
import SpinnerMini from "@/app/_components/SpinnerMini";
import { deleteReservation } from "@/app/_action/reservation";
import toast from "react-hot-toast";
import CustomToast from "@/app/_components/CustomToast";
import customToast from "@/app/_util/custom-toast";

function DeleteReservation({ bookingId }) {
    // const [state/response, action, isPending] = useActionState(() => deleteReservation(bookingId))
    const [isPending, startTransition] = useTransition()

    function handleDeleteReservation() {
        startTransition(async () => {
            await deleteReservation(bookingId)
            startTransition(() => {
                toast.custom(<CustomToast message={ 'delete successfully' } />)
            })
        })
    }

    // TODO
    customToast.success('delete', { duration: 50000 })

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
