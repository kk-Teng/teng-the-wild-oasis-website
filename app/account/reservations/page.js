import { auth } from "@/app/_lib/auth";
import { getBookings } from "@/app/_lib/data-service";
import Reservations from "@/app/_components/Reservations";

export const metadata = {
    title: 'reservations'
}

export default async function Page() {
    const session = await auth()
    const bookingsPromise = getBookings(session.guestId)

    return (
        <div>
            <h2 className="font-semibold text-2xl text-yellow-400 mb-7">
                Your reservations
            </h2>
            <Reservations bookingsPromise={ bookingsPromise } />
        </div>
    );
}
