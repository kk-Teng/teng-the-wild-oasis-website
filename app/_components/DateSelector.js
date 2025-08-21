'use client'
import { isWithinInterval } from "date-fns";
import { DayFlag, DayPicker, SelectionState, UI } from "react-day-picker";
import { useReservationContext } from "@/app/_components/ReservationContext";

function isAlreadyBooked(range, datesArr) {
    return (
        range.from &&
        range.to &&
        datesArr.some((date) =>
            isWithinInterval(date, { start: range.from, end: range.to })
        )
    );
}

function DateSelector({ bookedDates, cabin, settings }) {

    const { range, setRange, resetRange } = useReservationContext()

    const {
        regularPrice,
        discount,
        cabinPrice,
        numNights
    } = cabin

    const { maxBookingLength, minBookingLength } = settings

    return (
        <div className="flex flex-col justify-between rdp">
            <DayPicker
                className="pt-12 place-self-center"
                excludeDisabled
                classNames={ {
                    [DayFlag.today]: 'text-yellow-500',
                    [UI.Dropdowns]: 'text-slate-50 space-x-4',
                    [UI.MonthCaption]: 'text-center mb-2',
                    [SelectionState.selected]: `${ range.from && !range.to ? 'rounded-full bg-yellow-100 text-yellow-500 bg-slate-900' : '' }`,
                    [SelectionState.range_start]: 'rounded-full rounded-r-none bg-yellow-100 text-yellow-500 bg-slate-900',
                    [SelectionState.range_end]: 'rounded-full rounded-l-none text-yellow-500 bg-slate-900 bg-yellow-100',
                    [SelectionState.range_middle]: 'text-yellow-500 bg-slate-900 bg-yellow-100',
                } }
                selected={ range }
                onSelect={ setRange }
                animate
                hideNavigation
                mode="range"
                min={ minBookingLength + 1 }
                max={ maxBookingLength }
                startMonth={ new Date() }
                today={ new Date() }
                captionLayout="dropdown"
                numberOfMonths={ 2 }
            />

            <div className="flex items-center justify-between px-8 bg-yellow-500 text-slate-800 h-[72px]">
                <div className="flex items-baseline gap-6">
                    <p className="flex gap-2 items-baseline">
                        { discount > 0 ? (
                            <>
                                <span className="text-2xl">${ regularPrice - discount }</span>
                                <span className="line-through font-semibold text-slate-700">
                                      ${ regularPrice }
                                </span>
                            </>
                        ) : (
                            <span className="text-2xl">${ regularPrice }</span>
                        ) }
                        <span className="">/night</span>
                    </p>
                    { numNights ? (
                        <>
                            <p className="bg-accent-600 px-3 py-2 text-2xl">
                                <span>&times;</span> <span>{ numNights }</span>
                            </p>
                            <p>
                                <span className="text-lg font-bold uppercase">Total</span>{ " " }
                                <span className="text-2xl font-semibold">${ cabinPrice }</span>
                            </p>
                        </>
                    ) : null }
                </div>

                { range.from || range.to ? (
                    <button
                        className="border border-slate-800 py-2 px-4 text-sm font-semibold"
                        onClick={ resetRange }
                    >
                        Clear
                    </button>
                ) : null }
            </div>
        </div>
    );
}

export default DateSelector;
