'use client';

import ReservationCard from "@/app/_components/ReservationCard";
import Link from "next/link";
import { use, useOptimistic } from "react";

export default function Reservations({ bookingsPromise }) {
    const bookings = use(bookingsPromise)

    // TODO 先显示成功后的值，actionOptimistic必须在一个formAction或者startTransition中调用，不然无法回退
    const [optimisticBookings, deleteBookingOptimistic] = useOptimistic(
        bookings,
        (currentBookings, bookingId) => currentBookings.filter(booking => booking.id !== bookingId)
    )

    // TODO 这东西的rollback到底是怎么做到的
    function handleDelete(bookingId) {
        deleteBookingOptimistic(bookingId)
    }

    return (
        <>
            {
                optimisticBookings.length === 0 ? (
                    <p className="text-lg">
                        You have no reservations yet. Check out our{ " " }
                        <Link className="underline text-yellow-500" href="/cabins">
                            luxury cabins &rarr;
                        </Link>
                    </p>
                ) : (
                    <ul className="space-y-6">
                        { optimisticBookings.map((booking) => (
                            <ReservationCard onDelete={ handleDelete } booking={ booking } key={ booking.id } />
                        )) }
                    </ul>
                )
            }
        </>
    );
}