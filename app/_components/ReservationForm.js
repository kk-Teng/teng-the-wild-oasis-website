'use client';

import Guest from "@/app/_components/Guest";
import { doCreateBooking } from "@/app/_action/booking";
import SubmitButton from "@/app/_components/SubmitButton";
import { useReservationContext } from "@/app/_components/ReservationContext";
import { differenceInCalendarDays } from "date-fns";

function ReservationForm({ user, cabin }) {

    const { maxCapacity } = cabin
    const { range } = useReservationContext()

    const newBooking = {
        startDate: range.from,
        endDate: range.to,
        numNights: differenceInCalendarDays(range.to, range.from),
        cabinId: cabin.id,
        cabinPrice: cabin.regularPrice,
    }

    return (
        <div className={ 'flex flex-col' }>
            <div className='bg-slate-700 text-slate-300 px-16 py-2 flex justify-between items-center'>
                <p>Logged in as</p>
                <Guest image={ user.image } text={ user.name } />
            </div>

            <form className='bg-slate-800 flex-1 py-10 px-16 text-lg flex gap-5 flex-col' action={ doCreateBooking }>
                <input type={ 'hidden' } name={ 'newBooking' } value={ JSON.stringify(newBooking) } />
                <div className='space-y-2'>
                    <label htmlFor='numGuests'>How many guests?</label>
                    <select
                        name='numGuests'
                        id='numGuests'
                        className='px-5 py-3 bg-slate-200 text-slate-800 w-full shadow-sm rounded-sm'
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
                        className='px-5 py-3 bg-slate-200 text-slate-800 w-full shadow-sm rounded-sm'
                        placeholder='Any pets, allergies, special requirements, etc.?'
                    />
                </div>

                <div className='flex justify-end items-center gap-6'>
                    <p className='text-slate-300 text-base'>Start by selecting dates</p>
                    <SubmitButton text={ 'Reserve now' } pendingText={ 'Reserving for you now...' } />
                </div>
            </form>
        </div>
    );
}

export default ReservationForm;
