'use server'

import { auth } from "@/app/_lib/auth";

export async function doCreateBooking(formData) {
    // name='numGuests'
    // name='observations'
    const session = await auth()
    const newBooking = JSON.parse(formData.get('newBooking'))
    newBooking.numGuests = formData.get('numGuests')
    newBooking.observations = formData.get('observations')
    newBooking.guestId = session.guestId
    newBooking.totalPrice = newBooking.cabinPrice * newBooking.numNights
    console.log(newBooking)
}