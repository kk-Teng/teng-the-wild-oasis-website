import ReservationForm from "@/app/_components/ReservationForm";
import { getBookedDatesByCabinId, getSettings } from "@/app/_lib/data-service";
import DateSelector from "@/app/_components/DateSelector";
import { auth } from "@/app/_lib/auth";
import LoginMessage from "@/app/_components/LoginMessage";

export default async ({ cabin }) => {

    const [settings, bookedDates, session] = await Promise.all([
        getSettings(),
        getBookedDatesByCabinId(cabin.id),
        auth()
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
            { session?.user ? <ReservationForm cabin={ cabin } user={ session.user } /> : <LoginMessage /> }
            {/*</ReservationContextProvider>*/ }
        </div>
    )
}