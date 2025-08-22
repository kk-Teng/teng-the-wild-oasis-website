import { PencilSquareIcon } from '@heroicons/react/24/solid';
import { format, formatDistance, isPast, isToday, parseISO } from 'date-fns';
import DeleteReservation from './DeleteReservation';
import Image from "next/image";
import Link from "next/link";

export const formatDistanceFromNow = (dateStr) =>
    formatDistance(parseISO(dateStr), new Date(), {
        addSuffix: true,
    }).replace('about ', '');

function ReservationCard({ booking }) {
    const {
        id,
        guestId,
        startDate,
        endDate,
        numNights,
        totalPrice,
        numGuests,
        created_at,
        cabins: { name, image },
    } = booking;
    const isOutOfDay = isPast(new Date(startDate))
    return (
        <div className='flex border border-slate-800'>
            <div className='relative h-32 aspect-square'>
                <Image
                    fill
                    src={ image }
                    alt={ `Cabin ${ name }` }
                    className='object-cover border-r border-slate-800'
                />
            </div>

            <div className='flex-grow px-6 py-3 flex flex-col'>
                <div className='flex items-center justify-between'>
                    <h3 className='text-xl font-semibold'>
                        { numNights } nights in Cabin { name }
                    </h3>
                    { isOutOfDay ? (
                        <span
                            className='bg-yellow-800 text-yellow-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm'>
                              past
                        </span>
                    ) : (
                        <span
                            className='bg-green-800 text-green-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm'>
                              upcoming
                        </span>
                    ) }
                </div>

                <p className='text-lg text-slate-300'>
                    { format(new Date(startDate), 'EEE, MMM dd yyyy') } (
                    { isToday(new Date(startDate))
                        ? 'Today'
                        : formatDistanceFromNow(startDate) }
                    ) &mdash; { format(new Date(endDate), 'EEE, MMM dd yyyy') }
                </p>

                <div className='flex gap-5 mt-auto items-baseline'>
                    <p className='text-xl font-semibold text-yellow-400'>${ totalPrice }</p>
                    <p className='text-slate-300'>&bull;</p>
                    <p className='text-lg text-slate-300'>
                        { numGuests } guest{ numGuests > 1 && 's' }
                    </p>
                    <p className='ml-auto text-sm text-slate-400'>
                        Booked { format(new Date(created_at), 'EEE, MMM dd yyyy, p') }
                    </p>
                </div>
            </div>

            <div className='flex flex-col border-l border-slate-800 w-[100px]'>
                { !isOutOfDay &&
                    <Link
                        href={ `/account/reservations/edit/${ id }` }
                        className='group flex items-center gap-2 uppercase text-xs font-bold text-slate-300 border-b border-slate-800 flex-grow px-3 hover:bg-yellow-600 transition-colors hover:text-slate-900'
                    >
                        <PencilSquareIcon
                            className='h-5 w-5 text-slate-600 group-hover:text-slate-800 transition-colors' />
                        <span className='mt-1'>Edit</span>
                    </Link>
                }
                <DeleteReservation bookingId={ id } />
            </div>
        </div>
    );
}

export default ReservationCard;
