import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import { auth } from "@/app/_lib/auth";
import { getCountries, getGuest } from "@/app/_lib/data-service";

export const metadata = {
    title: 'profile'
}

export const revalidate = 0

export default async function Page() {
    const session = await auth()
    const currentGuest = await getGuest(session.user.email)
    const countriesPromise = getCountries()

    return (
        <div>
            <h2 className="font-semibold text-2xl text-yellow-400 mb-4">
                Update your guest profile
            </h2>

            <p className="text-lg mb-8 text-slate-200">
                Providing the following information will make your check-in process
                faster and smoother. See you soon!
            </p>

            <UpdateProfileForm guest={ currentGuest } countriesPromise={ countriesPromise } />
        </div>
    );
}
