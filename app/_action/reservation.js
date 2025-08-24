'use server'

import { auth } from "@/app/_lib/auth";
import { supabase } from "@/app/_lib/supabase";
import { updateBooking } from "@/app/_lib/data-service";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function exportSomethingError() {
    throw new Error('Something error')
}

export async function deleteReservation(bookingId) {
    const session = await auth()
    if (session === null) {
        throw new Error('You must be logged in first !')
    }
    const { error } = await supabase
        .from('bookings')
        .delete()
        .eq('id', bookingId);
    if (error) {
        throw new Error(error.message)
    }
    revalidatePath('/account/reservations')
}

export async function updateReservation(reservationId, updateFields) {
    const session = await auth()
    if (session === null) {
        throw new Error('You must be logged in first !')
    }
    await updateBooking(reservationId, updateFields)
    revalidatePath(`/account/reservations/${ reservationId }`)
    revalidatePath('/account/reservations')
    redirect('/account/reservations')
}