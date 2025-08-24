'use server'

import { auth } from "@/app/_lib/auth";
import { createBooking } from "@/app/_lib/data-service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function doCreateBooking(newBooking) {
    // name='numGuests'
    // name='observations'
    const session = await auth()
    if (session === null) {
        throw new Error('You should be logged in first')
    }
    const booking = { ...newBooking, guestId: session.guestId }
    await createBooking(booking)
    revalidatePath(`/cabins/${ booking.cabinId }`)
    redirect('/thankyou')
}

export async function doCreateBookingV1(bookingData, formData) {
    console.log(bookingData, formData)
}