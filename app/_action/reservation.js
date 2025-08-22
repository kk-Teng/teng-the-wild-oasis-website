'use server'

import { revalidatePath } from "next/cache";
import { auth } from "@/app/_lib/auth";
import { supabase } from "@/app/_lib/supabase";

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