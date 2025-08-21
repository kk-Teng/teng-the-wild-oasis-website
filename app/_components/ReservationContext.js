'use client';

import { createContext, useContext, useState } from "react";

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
    const [range, setRange] = useState(initialRange)
    const resetRange = () => {
        setRange(initialRange)
    }
    return (
        <ReservationContext.Provider value={ { range, setRange, resetRange } }>
            { children }
        </ReservationContext.Provider>
    )
}

export { ReservationContextProvider, useReservationContext }

