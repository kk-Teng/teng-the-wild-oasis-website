'use server';

import { auth } from "@/app/_lib/auth";
import { supabase } from "@/app/_lib/supabase";
import { redirect } from "next/navigation";

export async function doUpdateGuest(formData) {
    // TODO action其实已经是后端的范畴，所以要进行身份验证。其实后面也要用到ID
    const session = await auth()
    if (!session) {
        throw new Error('You must be logged in first')
    }
    const [nationality, countryFlag] = formData.get('nationality').split('%')
    // validate nationalID
    const nationalID = formData.get('nationalID')
    if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID)) {
        throw new Error('Please provide a valid nation id')
    }
    // update
    const updateData = { nationality, countryFlag, nationalID }
    const { error } = await supabase
        .from('guests')
        .update(updateData)
        .eq('id', session.guestId)
    if (error) {
        throw new Error(`Update Failure: ${ error.message }`)
    }
    redirect('/account/profile')
}