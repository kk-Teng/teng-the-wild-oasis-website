'use client';

import { createContext, useContext, useState } from "react";
import { differenceInDays, isSameDay } from "date-fns";

const ReservationContext = createContext(undefined)

const useReservationContext = () => {
    const context = useContext(ReservationContext)
    if (context === undefined) {
        throw new Error('Reservation context is used outside of the reservation provider.')
    }
    return context
}

const initialRange = { from: undefined, to: undefined }

const ReservationContextProvider = ({ children }) => {
    const [range, _setRange] = useState(initialRange)
    const resetRange = () => {
        _setRange(initialRange)
    }
    const setRange = (dateValue, minBookingLength, maxBookingLenth) => {
        if (range.from === undefined) {
            return _setRange(range => ({ ...range, from: dateValue }))
        }

        const dateFrom = new Date(range.from)
        const dateCur = new Date(dateValue)
        const interval = Math.abs(differenceInDays(dateFrom, dateCur))

        if (isSameDay(dateFrom, dateCur) || range.to && isSameDay(new Date(range.to), dateCur) || interval > maxBookingLenth || interval <= minBookingLength) {
            return _setRange(range => ({ from: dateValue, to: undefined }))
        }

        const [from, end] = [dateFrom, dateCur].sort((a, b) => a - b)

        _setRange({ from: from.toUTCString(), to: end.toUTCString() })
    }
    return (
        <ReservationContext.Provider value={ { range, setRange, resetRange } }>
            { children }
        </ReservationContext.Provider>
    )
}

export { ReservationContextProvider, useReservationContext }

