'use server';
import { signIn, signOut } from "@/app/_lib/auth";

export async function doSocialLogin(formData) {
    const action = formData.get('action')
    await signIn(action, { redirectTo: '/account' })
}

export async function doLogout() {
    await signOut({ redirectTo: '/' })
}