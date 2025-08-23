'use client'


import SubmitButton from "@/app/_components/SubmitButton";
import { updateReservation } from "@/app/_action/reservation";
import { useTransition } from "react";

export default function EditReservationForm({ booking, maxCapacity }) {
    const [isPending, startTransition] = useTransition()

    function handleUpdateReservation(formData) {
        const newReservation = {
            numGuests: formData.get('numGuests'),
            observations: formData.get('observations').slice(0, 1000)
        }
        startTransition(() => updateReservation(booking.id, newReservation))
    }

    return (
        <form className="bg-slate-900 py-8 px-12 text-lg flex gap-6 flex-col" action={ handleUpdateReservation }>
            <div className="space-y-2">
                <label htmlFor="numGuests">How many guests?</label>
                <select
                    id="numGuests"
                    name="numGuests"
                    disabled={ isPending }
                    defaultValue={ booking.numGuests }
                    className="disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 px-5 py-3 bg-slate-200 text-slate-800 w-full shadow-sm rounded-sm"
                    required
                >
                    <option value="" key="">
                        Select number of guests...
                    </option>
                    { Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
                        <option value={ x } key={ x }>
                            { x } { x === 1 ? "guest" : "guests" }
                        </option>
                    )) }
                </select>
            </div>

            <div className="space-y-2">
                <label htmlFor="observations">
                    Anything we should know about your stay?
                </label>
                <textarea
                    name="observations"
                    disabled={ isPending }
                    defaultValue={ booking.observations }
                    className="disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 px-5 py-3 bg-slate-200 text-slate-800 w-full shadow-sm rounded-sm"
                />
            </div>

            <div className="flex justify-end items-center gap-6">
                <SubmitButton pendingText={ 'Updating...' } text={ 'Update reservation' } />
            </div>
        </form>
    );
}