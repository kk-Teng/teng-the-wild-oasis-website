import ReservationForm from "@/app/_components/ReservationForm";
import { getBookedDatesByCabinId, getSettings } from "@/app/_lib/data-service";
import DateSelector from "@/app/_components/DateSelector";

export default async ({ cabin }) => {

    const [settings, bookedDates] = await Promise.all([
        getSettings(),
        getBookedDatesByCabinId(cabin.id)
    ])

    return (
        <div className={ 'grid grid-cols-[1.1fr_1fr] border border-slate-800' }>
            { /* 虽然放在这里也行，不过为了不必要的重渲染，建议放在最外层*/ }
            {/*<ReservationContextProvider>*/ }
            <DateSelector
                settings={ settings }
                cabin={ cabin }
                bookedDates={ bookedDates }
            />
            <ReservationForm cabin={ cabin } />
            {/*</ReservationContextProvider>*/ }
        </div>
    )
}