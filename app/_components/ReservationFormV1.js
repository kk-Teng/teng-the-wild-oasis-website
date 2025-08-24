'use client'

import Guest from "@/app/_components/Guest";
import SubmitButton from "@/app/_components/SubmitButton";
import { useReservationContext } from "@/app/_components/ReservationContext";
import { differenceInDays } from "date-fns";
import { doCreateBookingV1 } from "@/app/_action/booking";

function ReservationForm({ user, cabin }) {

    const { maxCapacity, cabinId, regularPrice: cabinPrice, discount } = cabin
    const { range, resetRange } = useReservationContext()

    const numNights = differenceInDays(range.to, range.from)
    const newBooking = {
        startDate: range.from,
        endDate: range.to,
        numNights,
        cabinId,
        cabinPrice,
        totalPrice: numNights * (cabinPrice - discount)
    }

    // TODO 除了form hidden input, 还可以这样做
    const createBookingAction = doCreateBookingV1.bind(null, newBooking)

    return (
        <div className={ 'flex flex-col' }>
            <div className='bg-slate-700 text-slate-300 px-16 py-2 flex justify-between items-center'>
                <p>Logged in as</p>
                <Guest image={ user.image } text={ user.name } />
            </div>

            <form className='bg-slate-800 flex-1 py-10 px-16 text-lg flex gap-5 flex-col'
                  action={ createBookingAction }
            >
                <div className='space-y-2'>
                    <label htmlFor='numGuests'>How many guests?</label>
                    <select
                        name='numGuests'
                        id='numGuests'
                        className="disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 px-5 py-3 bg-slate-200 text-slate-800 w-full shadow-sm rounded-sm"
                        required
                    >
                        <option value='' key=''>
                            Select number of guests...
                        </option>
                        { Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
                            <option value={ x } key={ x }>
                                { x } { x === 1 ? 'guest' : 'guests' }
                            </option>
                        )) }
                    </select>
                </div>

                <div className='space-y-2 mb-6'>
                    <label htmlFor='observations'>
                        Anything we should know about your stay?
                    </label>
                    <textarea
                        name='observations'
                        id='observations'
                        className="disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 px-5 py-3 bg-slate-200 text-slate-800 w-full shadow-sm rounded-sm"
                        placeholder='Any pets, allergies, special requirements, etc.?'
                    />
                </div>

                <div className='flex justify-end items-center gap-6'>
                    { !range.from && !range.to &&
                        <p className='text-slate-300 text-base'>Start by selecting dates</p>
                    }
                    <SubmitButton text={ 'Reserve now' } pendingText={ 'Reserving for you now...' } />
                </div>
            </form>
        </div>
    );
}

export default ReservationForm;
